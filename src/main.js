import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { CurrencyEx } from './currency.js';

$(document).ready(function () {


  $("#button").click(function () {
    (async () => {
      let dinoGif = new DinoIpsum();
      const response = await dinoGif.getQuote();
      const gifResponse = await dinoGif.getGif();
      console.log(gifResponse)
      $('#showGif').html(`<img src="${gifResponse}" alt="a random dino gif">"${response[0]}"`);
    })();
  });
});