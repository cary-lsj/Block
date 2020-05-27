using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExportExcelData
{
    public class DebugUtils
    {
        public static void Log(string log)
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine(log);
        }

        public static void LogWithoutLine(string log)
        {
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write(log);
        }

        public static void LogWaring(string log)
        {
            Console.ForegroundColor = ConsoleColor.Yellow;
            Console.WriteLine(log);
        }

        public static void LogPoint(string log)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine(log);
        }

        public static void LogError(string log)
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine(log);
        }
    }
}
