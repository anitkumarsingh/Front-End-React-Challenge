// This file contains api calls
const API_DOMAIN = 'https://ftl-frontend-test.herokuapp.com';
class API {
  async getUsers() {
    try {
      let response = await fetch(`${API_DOMAIN}/interest?amount=500&numMonths=7`);
      let results = await response.json();
      console.log(response);
      return results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
}

export default new API();
