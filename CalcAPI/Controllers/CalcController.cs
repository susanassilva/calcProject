using CalcAPI.Models;
using CalcAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CalcAPI.Controllers{
    [Route("[controller]")]
    [ApiController]

    public class CalcController : ControllerBase{

        private readonly IOperationServices _operationServices;
        private readonly HistoryService _history;        
        public CalcController(IOperationServices operationServices, HistoryService history){
            _operationServices = operationServices;
            _history = history;
        }

        [HttpPost]
        public IActionResult Operation([FromBody]Calc calc){

            if (calc.OperatorType == "+")
                return Ok(_operationServices.Add(calc));
            if (calc.OperatorType == "-")
                return Ok(_operationServices.Subtract(calc));
            if (calc.OperatorType == "*")
                return Ok(_operationServices.Mult(calc));
            if(calc.OperatorType == "/")
                return Ok(_operationServices.Div(calc));
            else
                return BadRequest("erro");
        }

        [HttpGet]
        public List<Calc> ShowHistory(){
            return _history.ShowHistory();
        }

        [HttpDelete]
        public IActionResult DeleteHistory(){
            _history.ClearHistory();
            return Ok("Clear");
        }
    }
}