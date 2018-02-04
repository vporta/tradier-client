import axios from 'axios';

class Tradier {
  constructor(accesstoken, _endpoint='') {
    this.accesstoken = accesstoken;
    this._endpoint = _endpoint.toLowerCase();
    this._host = 'https://api.tradier.com/v1/';
    this._hostBeta = 'https://api.tradier.com/beta/';

    if (!this.accesstoken) {
      this._throw('Need a valid accesstoken');
    }
    if (this._endpoint === 'sandbox') {
      this._host = 'https://sandbox.tradier.com/v1/';
    }
  }

  quote(ticker) {
    return axios.get(`${this._host}markets/quotes?symbols=${ticker}`, {
      headers: {
        "Authorization": `Bearer ${this.accesstoken}`
      }
    })
      .then(response => {
        const { quotes } = response.data;
        return new Promise((resolve, reject) => {
          if (quotes) {
            resolve(quotes)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  timesales(ticker) { 
    return axios.get(`${this._host}markets/timesales?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { series } = response.data;
        return new Promise((resolve, reject) => {
          if (series) {
            resolve(series)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionchain(ticker, expiration) { 
    return axios.get(`${this._host}markets/options/chains?symbol=${ticker}&expiration=${expiration} `, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { options } = response.data;
        return new Promise((resolve, reject) => {
          if (options) {
            resolve(options)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionstrikes(ticker, expiration) { 
    return axios.get(`${this._host}markets/options/strikes?symbol=${ticker}&expiration=${expiration}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { strikes } = response.data;
        return new Promise((resolve, reject) => {
          if (strikes) {
            resolve(strikes)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  optionexpirations(ticker) { 
    return axios.get(`${this._host}markets/options/expirations?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { expirations } = response.data;
        return new Promise((resolve, reject) => {
          if (expirations) {
            resolve(expirations)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  historical(ticker) { 
    return axios.get(`${this._host}markets/history?symbol=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { history } = response.data;
        return new Promise((resolve, reject) => {
          if (history) {
            resolve(history)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  intradaystatus() {
    return axios.get(`${this._host}markets/clock`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  marketcalendar() {
    return axios.get(`${this._host}markets/calendar`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  companysearch(ticker) {
    return axios.get(`${this._host}markets/search?q=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCompanyInfo(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/company?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCorporateCalendar(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/calendars?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getDividendInfo(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/dividends?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCorporateActions(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/corporate_actions?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getRatios(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/ratios?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getCorporateFinancials(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/financials?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getPriceStats(ticker) {
    return axios.get(`${this._hostBeta}markets/fundamentals/statistics?symbols=${ticker}`, { 
      headers: {
        "Authorization": `Bearer ${this.accesstoken}` 
      } 
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  _throw(e) {
    if (typeof e === 'string') {
      e = "Tradier Client | " + e;
    } else {
      throw e;
    }
  }

  lookup(queryParams = {}) {
    //TODO: use module for building query
    const params = Object.assign({
      q: null,
      exchanges: [],
      types: [],
    }, queryParams);
    const {q, exchanges, types} = params;
    const filteredQuery = [
      q !== null && `q=${q}` || null,
      exchanges.length !== 0 && `exchanges=${exchanges.join(',')}` || null,
      types.length !== 0 && `types=${types.join(',')}` || null,
    ];
    const query = filteredQuery.filter( q => q !== null).join('&');
    return axios.get(`${this._hostBeta}markets/lookup?${query}`, {
      headers: {
        "Authorization": `Bearer ${this.accesstoken}`
      }
    })
      .then(response => {
        const { data } = response.data;
        return new Promise((resolve, reject) => {
          if (data) {
            resolve(data)
          } else {
            let error = new Error();
            reject(error);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
}

module.exports = Tradier;
