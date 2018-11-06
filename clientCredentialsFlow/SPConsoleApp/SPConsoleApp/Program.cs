using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SPConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string token = AuthHelper.GetToken().GetAwaiter().GetResult();
            Console.WriteLine(token);
        }
    }
}
