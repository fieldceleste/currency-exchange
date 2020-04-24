 export class CurrencyEx {
    async getCurrencybyAmount() {
      try {
        let response = await fetch (`https://prime.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD?q=${conversion_rates}`);
        let jsonifiedResponse;
        if(response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        return jsonifiedResponse;
      } catch (error){
        return false;
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
