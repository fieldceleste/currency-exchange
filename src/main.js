import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyEx } from './currency.js';

$(document).ready(function () {
  $("#currency").submit(function (event) {
  event.preventDefault();
   const amount = $('#baseUS').val();
    // console.log(amount);
   const currencyResult = $('#currencyType').val();
    // console.log(currencyResult);
    

    (async () => {
      let currency = new CurrencyEx();
      const response = await currency.getCurrencybyRates();
      getElements(response);
    })();



    function getElements(response) {
      if (response.conversion_rates[currencyResult]) {
          let rate = response.conversion_rates[currencyResult];
          let exchangeCon = (amount * rate).toFixed(2);
          $("#showAmount").text(amount);
          $("#newAmount").text(" " + exchangeCon + " " + currencyResult);
           $("#result").show();

        } else {
        $('.output').text(`malformed-request, your input was not valid`);
      }
    }
  });
});


        // $('.output').text(`Your currency exchange in ${currency} is $ ${response.amount.currency}.`);