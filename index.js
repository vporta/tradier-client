const Promise = require('bluebird');
const EventEmitter = require('events');

const HOST = 'https://api.tradier.com/v1/';
    
class Stocks {
  constructor(accesstoken) {
    this.accesstoken = accesstoken;

    if (!this.accesstoken) {
      this._throw('Need a valid accesstoken');
    }
  }

  quote(ticker, callback) {
    return axios.get(`${HOST}markets/quotes?symbols=${ticker}`, {
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}`
      }
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  timesales(ticker, callback) { 
    return axios.get(`${HOST}markets/timesales?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionchain(ticker, callback) { 
    return axios.get(`${HOST}markets/options/chains?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionstrikes(ticker, expiration, callback) { 
    return axios.get(`${HOST}markets/options/strikes?symbol=${ticker}&expiration=${expiration}`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionexpirations(ticker, callback) { 
    return axios.get(`${HOST}markets/options/expirations?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  historical(ticker, callback) { 
    return axios.get(`${HOST}markets/history?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  intradaystatus() {
    return axios.get(`markets/clock`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  marketcalendar() {
    return axios.get(`markets/calendar`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  companysearch(ticker) {
    return axios.get(`markets/search?q=${ticker}`, { 
      headers: {
        "Authorization": `Bearer  ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  _throw(e) {
    if (typeof e === 'string') {
      e = "Tradier Client | " + e
    } else {
      throw e
    }
  }

}
