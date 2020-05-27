@echo off
echo Start Export.......
cd .\ExportExcelData\ExportExcelData\bin\Debug

ExportExcelData.exe

echo Start Copy.........

xcopy ..\..\..\..\Tables\Config\*.json ..\..\..\..\Client\resource\config\ /y/q

:Finish
@echo off
echo All Copy Completed!
pause