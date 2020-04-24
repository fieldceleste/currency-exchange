import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyEx } from './currency.js';


$(document).ready(function () {
  $('#button').click(function() {
    const amount = $('#amountUS').val();
    console.log(amount)
    const currency = $('#exchangeInput').val();
    console.log(currency)
    $('#amountUS').val("");
    $('#exchangeInput').val("");

    (async () => {
      let currencyExchange = new CurrencyEx();
      const response = await currencyExchange.getCurrencybyAmount(amount,currency);
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