const baseUrl = "";
const apiKey = "";

class IronBeamApi { // i think the name of the class should allude to the app 
    constructor() {
      this._baseUrl = "backend";
      this._headers = {
        "Content-Type": "application/json",
      };
      this._apiKey = "I Love Growth";
      this.auth = "-----------"
    }

    setAUth(){
      return fetch(`${this._baseUrl}/auth`, {
        method: "GET",
        headers: {
          username: 23149353,
          password: "TrippleTen",
        }
      }).then(this._handleResponse).then((res) =>{
        console.log(res)
      })
    }
  
    _handleResponse(response) {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(`Error: ${response.status}`);
    }
  
    get(endpoint) {
      return fetch(`${this._baseUrl}${endpoint}`, {
        method: 'GET',
        headers: this._headers,
      }).then(this._handleResponse);
    }

    post(endpoint, body) {
      return fetch(`${this._baseUrl}${endpoint}`, {
        method: 'POST',
        headers: this._headers, // not all the header need athorization
        body: JSON.stringify(body),
      }).then(this._handleResponse);
    }
  
    put(endpoint, body) {
      return fetch(`${this._baseUrl}${endpoint}`, {
        method: 'PUT',
        headers: this._headers,
        body: JSON.stringify(body),
      }).then(this._handleResponse);
    }
  
    delete(endpoint) {
      return fetch(`${this._baseUrl}${endpoint}`, {
        method: 'DELETE',
        headers: this._headers,
      }).then(this._handleResponse);
    }
  }
  
  // Export the Api class
  export default IronBeamApi;
