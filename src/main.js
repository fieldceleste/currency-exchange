import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyEx } from './currency.js';

$(document).ready(function () {
  $("#currency").submit(function (event) {
  event.preventDefault();

   const amount = $('#baseUS').val();
    console.log(amount);
   const currencyResult = $('#exchangeInput').val();
    console.log(currencyResult);
    

    (async () => {
      let currencyExchange = new CurrencyEx();
      const response = await currencyExchange.getCurrencybyRates();
      console.log(response)
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        
          $("#baseUS").text(amount);
          console.log(amount);
          $("#exchangeInput").html(`${response.conversion_rates}` * amount[currencyResult]);
          
          $("#resultExchange").html(currencyResult);
          console.log(currencyResult)
        } else {
        $('.output').text(`malformed-request, your input was not valid`);
      }
    }
  });
});


        // $('.output').text(`Your currency exchange in ${currency} is $ ${response.amount.currency}.`);