import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyEx } from './currency.js';

$(document).ready(function () {
  $('#button').click(function() {
    const amount = $('#amountUS').val();
    $('#amountUS').val("");

    (async () => {
      let currencyExchange = new CurrencyEx();
      const response = await currencyExchange.getCurrencybyAmount(amount);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      } else {
        $('.showHumidity').text(`There was an error handling your request.`);
        $('.showTemp').text(`Please check your inputs and try again!`);
      }
    }
  })
});