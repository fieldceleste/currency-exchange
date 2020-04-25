 export class CurrencyEx {
   async getCurrencybyRates() {
      try {
        let response = await fetch (`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
        let jsonifiedResponse;
        if(response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        return jsonifiedResponse;
      } 
      catch (error){
        console.log(error)
      
      }
    }   
  }
  