 export class CurrencyEx {
    async getCurrency(rateEX, ) {
      try {
        let response = await fetch ("https://alexnormand-dino-ipsum.p.rapidapi.com/?format=html&words=3&paragraphs=3");
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else { 
          jsonifiedResponse = false; 
        } 
        return jsonifiedResponse;
      } catch (error) {
        console.log(error);
        return false; 
      }
    }
  }