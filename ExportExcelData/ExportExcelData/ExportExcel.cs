using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExportExcelData
{
    // row 行  col 列
    // 0代表不可放置木块节点，1代表存在数据，1以上为moodid，-1表示地图填充物
    class ExportExcel
    {
        private const string moodFilePath = @"..\..\..\..\Tables\mood.xls";
        private const string configDic = @"..\..\..\..\Tables\";
        private const string exportDic = @"..\..\..\..\Tables\Config\";

        private FileStream mFs;
        private IWorkbook mWorkbook;
        private string mMoodData = string.Empty;
        private Dictionary<string, List<string[]>> mMapList = new Dictionary<string, List<string[]>>();

        private const string CONFIG_EXTENSION = ".xls";
        private const string JSON_EXTENSION = ".json";

        public void ReadExcel()
        {
            try
            {

                using (mFs = File.OpenRead(moodFilePath))
                {//  解析mood
                    mWorkbook = new HSSFWorkbook(mFs);
                    DebugUtils.Log(string.Format("开始解析{0}表数据==============================================", mFs.Name));
                    mMoodData = string.Empty;
                    var sheet = mWorkbook.GetSheetAt(0);
                    var sheetName = sheet.SheetName;
                    DebugUtils.LogWaring(string.Format("正在解析{0}数据。。。", sheetName));
                    GenMoodData(sheet);
                }


                //  解析地图数据
                mMapList.Clear();
                DirectoryInfo root = new DirectoryInfo(configDic);
                var moodName = "mood" + CONFIG_EXTENSION;

                foreach (FileInfo info in root.GetFiles())
                {
                    if (info.Name == moodName)
                        continue;
                    DebugUtils.Log(string.Format("开始解析{0}表数据==============================================", info.Name));

                    var list = new List<string[]>();
                    mMapList.Add(Path.GetFileNameWithoutExtension(info.Name), list);

                    using (mFs = File.OpenRead(info.FullName))
                    {//  解析地图数据
                        mWorkbook = new HSSFWorkbook(mFs);

                        var sheetNumer = mWorkbook.NumberOfSheets;
                        for (int i = 0; i < sheetNumer; i++)
                        {
                            var sheet = mWorkbook.GetSheetAt(i);
                            var sheetName = sheet.SheetName;
                            DebugUtils.LogWaring(string.Format("正在解析{0}数据。。。", sheetName));

                            var rowcolData = GetRowCol(sheet);
                            DebugUtils.Log(string.Format("{0}有{1}行{2}列", sheetName, rowcolData[0], rowcolData[1]));
                            GenMapData(sheet, rowcolData, list);
                        }
                    }
                }

                DebugUtils.LogWaring("解析数据结束====开始导出数据======");
                ExportData();

            }
            catch (Exception ex)
            {
                DebugUtils.LogError($"Read Excel Exception{ex.Message}");
                return;
            }
        }

        private int[] GetRowCol(ISheet sheet)
        {
            var rowCount = sheet.LastRowNum+1;
            var colCount = 0;
            for (int i = 0; i < rowCount; i++)
            {
                IRow row = sheet.GetRow(i);
                if (null == row)
                {
                    DebugUtils.LogError($"工作表{sheet.SheetName}数据有错误！请检查");
                    return null;
                }
                var cellCount = row.LastCellNum;
                if (colCount < cellCount)
                    colCount = cellCount;
            }
            return new int[] { rowCount, colCount };
        }

        private void GenMapData(ISheet sheet,int[] rowcolData,List<string[]> list)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("{\"row\":" + rowcolData[0] + ",\"col\":" + rowcolData[1] + ",\"map\":[");
            var rowCount = sheet.LastRowNum + 1;
            bool isBegin = true;
            bool firstPoint = true;
            int index = 0;
            string pointData = null;
            for (int row = 0; row < rowCount; row++)
            {
                var rowData = sheet.GetRow(row);
                var cells = rowData.Cells;
                for (int col = 0; col < cells.Count; col++)
                {
                    index++;
                    var cellValue = GetCellValue(cells[col]);
                    if (string.IsNullOrEmpty(cellValue))
                    {
                        DebugUtils.LogError(string.Format("{0}表,{1}行{2}列，数据有误请检查！", sheet.SheetName, row + 1, col + 1));
                        break;
                    }
                    var numVal = 0;
                    var pointVal = 0;
                    if (!cellValue.Contains("|"))
                    {
                        if (!int.TryParse(cellValue, out numVal))
                        {
                            DebugUtils.LogError(string.Format("{0}表,{1}行{2}列，数据有误请检查！", sheet.SheetName, row + 1, col + 1));
                            break;
                        }
                        pointVal = numVal;
                    }
                    else
                    {
                        var vals = cellValue.Split('|');
                        if (!int.TryParse(vals[1], out numVal))
                        {
                            DebugUtils.LogError(string.Format("{0}表,{1}行{2}列，方块数据有误请检查！", sheet.SheetName, row + 1, col + 1));
                            break;
                        }
                        if (!int.TryParse(vals[0], out pointVal))
                        {
                            DebugUtils.LogError(string.Format("{0}表,{1}行{2}列，Point数据有误请检查！", sheet.SheetName, row + 1, col + 1));
                            break;
                        }
                        if (pointVal != 0)
                        {
                            for (int i = 0; i < vals.Length; i++)
                            {
                                var num = int.Parse(vals[i]);
                                DebugUtils.Log(string.Format("方块{0},moodId:{1},row:{2},col:{3}", index, num, row + 1, col + 1));
                                sb.Append(GetSingleMapData(num, row + 1, col + 1, isBegin));
                                isBegin = false;
                            }
                            continue;
                        }
                    }
                    if (pointVal == 0)
                    {
                        DebugUtils.LogPoint(string.Format("方块{0}为Point row:{1},col:{2}", index, row + 1, col + 1));
                        if (firstPoint)
                        {
                            pointData += GetPointData(row + 1, col + 1);
                            firstPoint = false;
                        }
                        else
                            pointData += "," + GetPointData(row + 1, col + 1);
                    }
                    if (numVal > 1)
                    {
                        DebugUtils.Log(string.Format("方块{0},moodId:{1},row:{2},col:{3}", index, numVal, row + 1, col + 1));
                        sb.Append(GetSingleMapData(numVal, row + 1, col + 1, isBegin));
                        isBegin = false;
                    }
                }
            }
            list.Add(new string[2] { sb.ToString(), pointData });
        }

        private string GetSingleMapData(int moodId, int row, int col, bool isBegin)
        {
            string data = string.Empty;
            if (!isBegin)
                data = ",{\"moodId\":" + moodId + ",\"row\":" + row + ",\"col\":" + col + "}";
            else
                data = "{\"moodId\":" + moodId + ",\"row\":" + row + ",\"col\":" + col + "}";
            return data;
        }

        private string GetPointData(int row,int col)
        {
            string data = string.Empty;
            data = "{\"row\":" + row + ",\"col\":" + col + "}";
            return data;
        }

        private void GenMoodData(ISheet sheet)
        {
            StringBuilder sb = new StringBuilder();
            var rowCount = sheet.LastRowNum + 1;
            bool isRowBegin = true;
            for (int row = 2; row < rowCount; row++)
            {
                var rowData = sheet.GetRow(row);
                var cells = rowData.Cells;
                string moodId = string.Empty;
                bool isCellBegin = true;
                for (int col = 0; col < cells.Count; col++)
                {
                    var cellval = GetCellValue(cells[col]);
                    if (string.IsNullOrEmpty(cellval))
                    {
                        DebugUtils.LogError(string.Format("{0}表中{1}行,{2}列有错误！请检查！", sheet.SheetName, row + 1, col + 1));
                        break;
                    }
                    if (col == 0)
                    {
                        moodId = cellval;
                        DebugUtils.LogWithoutLine(string.Format("moodId:{0},Data:", moodId));
                        if (isRowBegin)
                        {
                            sb.Append("\"" + moodId + "\":[");
                            isRowBegin = false;
                        }
                        else
                            sb.Append(",\"" + moodId + "\":[");
                        continue;
                    }
                    if (col != cells.Count - 1)
                        DebugUtils.LogWithoutLine("[" + cellval + "]  ");
                    else
                        DebugUtils.LogWithoutLine("[" + cellval + "]  \n");

                    if (isCellBegin)
                    {
                        sb.Append("[" + cellval + "]");
                        isCellBegin = false;
                    }
                    else
                        sb.Append(",[" + cellval + "]");
                }
                sb.Append("]");
            }
            mMoodData = sb.ToString();
        }

        private string GetCellValue(ICell cell)
        {
            switch (cell.CellType)
            {
                case CellType.Numeric:
                    return cell.NumericCellValue.ToString();
                case CellType.String:
                    return cell.StringCellValue;
                default:
                    return null;
            }
        }

        private void ExportData()
        {
            StringBuilder sb = new StringBuilder();
            var rator = mMapList.GetEnumerator();
            while (rator.MoveNext())
            {
                var fileName = rator.Current.Key;
                var mapInfoList = rator.Current.Value;

                sb.Clear();
                sb.Append("{\"port\":[");
                int levelindex = 0;
                foreach (var mapData in mapInfoList)
                {
                    levelindex++;
                    DebugUtils.LogWaring(string.Format("导出{0}  level{1}中........", fileName, levelindex));
                    var mapInfo = mapData[0];
                    var pointInfo = mapData[1];
                    if (levelindex < mapInfoList.Count)
                    {
                        if (string.IsNullOrEmpty(pointInfo))
                            sb.Append(mapInfo + "]},");
                        else
                            sb.Append(mapInfo + "]," + "\"point\":[" + pointInfo + "]},");
                    }
                    else
                    {
                        if (string.IsNullOrEmpty(pointInfo))
                            sb.Append(mapInfo + "]}],");
                        else
                            sb.Append(mapInfo + "]," + "\"point\":[" + pointInfo + "]}],");
                    }
                }
                DebugUtils.LogWaring("导出mood数据中.......");
                sb.Append("\"mood\":{" + mMoodData + "}}");
                DebugUtils.LogWaring(string.Format("导出文件{0}结束，生成文件中。。。。。", fileName));

                var path = exportDic+ fileName + JSON_EXTENSION;
                if (File.Exists(path))
                    File.Delete(path);
                FileStream fs = new FileStream(path, FileMode.Create);
                StreamWriter sw = new StreamWriter(fs);
                sw.Write(sb.ToString());
                sw.Flush();
                sw.Close();
                fs.Close();
            }
            
            DebugUtils.LogWaring("全部文件生成结束！");
        }
    }
}
