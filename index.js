const Promise = require('bluebird');
const EventEmitter = require('events');
const axios = require('axios');
const HOST = 'https://api.tradier.com/v1/';
const HOST_BETA = 'https://api.tradier.com/beta/';

class Tradier {
  constructor(accesstoken) {
    this.accesstoken = accesstoken;

    if (!this.accesstoken) {
      this._throw('Need a valid accesstoken');
    }
  }

  quote(ticker, callback) {
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

  getCompanyInfo(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/company?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCorporateCalendar(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/calendars?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getDividendInfo(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/dividends?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCorporateActions(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/corporate_actions?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRatios(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/ratios?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCorporateFinancials(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/financials?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPriceStats(ticker, callback) {
    return axios.get(`${HOST_BETA}markets/fundamentals/statistics?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        // const { data } = response.data;
        callback(response);
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

const tradier = new Tradier();

tradier.getCorporateCalendar('AAPL', data => {
  console.log(data);
});

module.exports = Tradier;
