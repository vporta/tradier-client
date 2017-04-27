const Promise = require('bluebird');
const EventEmitter = require('events');
const axios = require('axios');
const HOST = 'https://sandbox.tradier.com/v1/';
    
class Tradier {
  constructor(accesstoken) {
    this.accesstoken = accesstoken;

    if (!this.accesstoken) {
      this._throw('Need a valid accesstoken');
    }
  }

  quote(ticker='', callback) {
    return axios.get(`${HOST}markets/quotes?symbols=${ticker}`, {
      headers: {
        "Authorization": `Bearer ${this.accesstoken}`
      }
    })
      .then(response => {
        const { quotes } = response.data;
        callback(quotes);
      })
      .catch(error => {
        console.log(error);
      });
  }

  timesales(ticker, callback) { 
    return axios.get(`${HOST}markets/timesales?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { series } = response.data;
        callback(series);
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionchain(ticker, expiration, callback) { 
    return axios.get(`${HOST}markets/options/chains?symbol=${ticker}&expiration=${expiration} `, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { options } = response.data;
        callback(options);
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionstrikes(ticker, expiration, callback) { 
    return axios.get(`${HOST}markets/options/strikes?symbol=${ticker}&expiration=${expiration}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { strikes } = response.data;
        callback(strikes);
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionexpirations(ticker, callback) { 
    return axios.get(`${HOST}markets/options/expirations?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { expirations } = response.data;
        callback(expirations);
      })
      .catch(error => {
        console.log(error);
      });
  }

  historical(ticker, callback) { 
    return axios.get(`${HOST}markets/history?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { history } = response.data;
        callback(history);
      })
      .catch(error => {
        console.log(error);
      });
  }

  intradaystatus(callback) {
    return axios.get(`${HOST}markets/clock`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  marketcalendar(callback) {
    return axios.get(`${HOST}markets/calendar`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response;
        callback(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  companysearch(ticker) {
    return axios.get(`${HOST}markets/search?q=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
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

const tradier = new Tradier('flbnuhYahicB86qobTxWSTgLN3aL');

tradier.intradaystatus(data => {
  console.log(data);
});

// export default Tradier;
