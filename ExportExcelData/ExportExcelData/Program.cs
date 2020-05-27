using NPOI.HSSF.UserModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExportExcelData
{
    class Program
    {
        static void Main(string[] args)
        {
            ExportExcel exportExcel = new ExportExcel();
            exportExcel.ReadExcel();
        }
    }
}
