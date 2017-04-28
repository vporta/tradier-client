import axios from 'axios';

const HOST = 'https://sandbox.tradier.com/v1/';
const HOST_BETA = 'https://api.tradier.com/beta/';

class Tradier {
  constructor(accesstoken) {
    this.accesstoken = accesstoken;

    if (!this.accesstoken) {
      this._throw('Need a valid accesstoken');
    }
  }

  quote(ticker) {
    return axios.get(`${HOST}markets/quotes?symbols=${ticker}`, {
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
    return axios.get(`${HOST}markets/timesales?symbol=${ticker}`, { 
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
    return axios.get(`${HOST}markets/options/chains?symbol=${ticker}&expiration=${expiration} `, { 
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
    return axios.get(`${HOST}markets/options/strikes?symbol=${ticker}&expiration=${expiration}`, { 
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
    return axios.get(`${HOST}markets/options/expirations?symbol=${ticker}`, { 
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
    return axios.get(`${HOST}markets/history?symbol=${ticker}`, { 
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
    return axios.get(`${HOST}markets/clock`, { 
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
    return axios.get(`${HOST}markets/calendar`, { 
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
    return axios.get(`${HOST}markets/search?q=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/company?symbols=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/calendars?symbols=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/dividends?symbols=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/corporate_actions?symbols=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/ratios?symbols=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/financials?symbols=${ticker}`, { 
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
    return axios.get(`${HOST_BETA}markets/fundamentals/statistics?symbols=${ticker}`, { 
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

}


module.exports = Tradier;
