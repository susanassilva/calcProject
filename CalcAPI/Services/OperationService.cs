using CalcAPI.Models;

namespace CalcAPI.Services
{
    public class OperationServices : IOperationServices{

        private readonly HistoryService _history;
        public OperationServices(HistoryService history){
            _history = history;
        }

        public double Add(Calc calc){
            
            calc.Total = calc.Value1 + calc.Value2;
            _history.AddHistory(calc);
            return calc.Total;
        }

        public double Subtract(Calc calc){
            calc.Total = calc.Value1-calc.Value2;
            _history.AddHistory(calc);
            return calc.Total;
        }

        public double Mult(Calc calc){
            calc.Total = calc.Value1*calc.Value2;
            _history.AddHistory(calc);
            return calc.Total;
        }

        public double Div(Calc calc){
            calc.Total = calc.Value1/calc.Value2;
            _history.AddHistory(calc);
            return calc.Total;
        }

        public void Clear(){
            Clear();
        }
    }
}