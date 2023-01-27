using System.Text.Json.Serialization;


namespace CalcAPI.Models
{
    public class Calc
    {
        public double Value1 {get; set;}
        public double Value2 {get; set;}
        
        public string OperatorType {get; set;}
        public double Total { get; internal set; }
    }
}