// This file contains api calls
const API_DOMAIN = 'https://ftl-frontend-test.herokuapp.com';
class API {
  async getUsers(amount,numMonths) {
    console.log(amount,numMonths);
    try {
      let response = await fetch(`${API_DOMAIN}/interest?amount=${amount}&numMonths=${numMonths}`);
      let results = await response.json();
      return results;
    } catch (error) {
      console.log(error);
      return []; 
    }
  }
  
}

export default new API();
