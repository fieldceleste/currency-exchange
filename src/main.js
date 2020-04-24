import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyEx } from './currency.js';


$(document).ready(function () {
  $('#button').click(function(event) {
    event.preventDefault();
   let amount = $('#amountUS').val();
    console.log(amount)
   let currency = $('#exchangeInput').val();
    console.log(currency)
    

    (async () => {
      let currencyExchange = new CurrencyEx();
      const response = await currencyExchange.getCurrencybyRates();
      console.log(response)
      getElements(response);
    })();

    function getElements(response) {
      if (response) {


        $('.output').text(`Your currency exchange in ${currency} is $ ${response.amount.currency}.`);
  

      } else {
        $('.output').text(`malformed-request, your input was not valid`);
      }
    }
  })
});