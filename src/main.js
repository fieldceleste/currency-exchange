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
      let currencyExchange = new CurrencyEx(amount,currencyResult);
      const response = await currencyExchange.getCurrencybyRates();
      getElements(response,currencyResult,amount);
    })();



    function getElements(response,currencyResult,amount) {
      if (response) {
          $("baseUS").text(amount);
          console.log(amount);
          $("#exchangeInput").text(`${response.conversion_rates}` * amount).toFixed(2);
          console.log(conversion_rates)
          $("#resultExchange").text(currencyResult);
          console.log(currencyResult)
        } else {
        $('.output').text(`malformed-request, your input was not valid`);
      }
    }
  });
});


        // $('.output').text(`Your currency exchange in ${currency} is $ ${response.amount.currency}.`);