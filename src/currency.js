 export class CurrencyEx {
    async getCurrency() {
      try {
        let response = await fetch (`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          return "There seems to be an error. Check the API key to ensure it is live";
      }
      let jsonifiedResponse = await response.json();
      console.log(jsonifiedResponse);
      return jsonifiedResponse;
    } catch(error) {
      console.log(error);
    }
  }
}







  // inputMoney, currencyType, amountEx


  // jsonifiedResponse = await response.json();
  //       } else { 
  //         jsonifiedResponse = false; 
  //       } 
  //       return jsonifiedResponse;
  //     } catch (error) {
  //       console.log(error);
  //       return false; 
  //     }
  //   }
  // }
