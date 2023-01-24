using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CalcAPI.Models;

namespace CalcAPI.Services
{
    public interface IOperationServices
    {
        public double Add(Calc calc);
        public double Subtract(Calc calc);
        public double Mult(Calc calc);
        public double Div(Calc calc);
    }
}