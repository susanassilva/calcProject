using CalcAPI.Models;

namespace CalcAPI.Services
{
    public class HistoryService
    {
        public HistoryService(){
            History = new List<Calc>();
        }
        public List<Calc> History {get; set;}
        public List<Calc> ShowHistory()
        {
            return History;
        }

        public void ClearHistory(){
            History.Clear();
        }

        public void AddHistory(Calc calc){
            History.Add(calc);
        }
        

    }
}