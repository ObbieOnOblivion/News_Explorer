import axios from 'axios';

class BackEndWeatherAPI {
  constructor() {
    this._api = axios.create({
      baseURL: "backend-url",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "I Love Growth"
      }
    });

    this._api.interceptors.request.use(config => {
      if (this.authToken) {
        config.headers.Authorization = `Bearer ${this.authToken}`;
      }
      return config;
    });

    this._api.interceptors.response.use(
      response => response.data,
      error => {
        if (error.response) {
          return Promise.reject(`Error: ${error.response.status} - ${error.response.data?.message || 'Unknown error'}`);
        }
        return Promise.reject(`Network Error: ${error.message}`);
      }
    );
  }

  async setAuth() {
    try {
      const response = await this._api.get('/auth', {
        headers: {
          username: 23149353,
          password: "TrippleTen"
        }
      });
      this.authToken = response.token;
      return response;
    } catch (error) {
      console.error('Auth failed:', error);
      throw error;
    }
  }

  get(endpoint, config = {}) {
    return this._api.get(endpoint, config);
  }

  post(endpoint, data, config = {}) {
    return this._api.post(endpoint, data, config);
  }

  put(endpoint, data, config = {}) {
    return this._api.put(endpoint, data, config);
  }

  delete(endpoint, config = {}) {
    return this._api.delete(endpoint, config);
  }

  patch(endpoint, data, config = {}) {
    return this._api.patch(endpoint, data, config);
  }
}

export default BackEndWeatherAPI;