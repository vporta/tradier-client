const rest = require('restler');
const Promise = require('bluebird');
const EventEmitter = require('events');

const HOST = 'https://api.tradier.com/v1/';

export default (username, password) => { 

  const Tradier = rest.service((u, p) => {
    this.defaults.username = u;
    this.defaults.password = p;
  }, {
    baseURL: HOST,

  }, {
      quotes(ticker) => {
        return this.get(`markets/quotes?symbols=${ticker}`);
      },
      timesales(ticker) => { 
        return this.get(`markets/timesales?symbol=${ticker}`);
      },
      optionchain(ticker) => {
        return this.get(`markets/options/chains?symbol=${ticker}`);
      },
      optionstrikes(ticker, expiration) => {
        return this.get(`markets/options/strikes?symbol=${ticker}&expiration=${expiration}`);
      },
      optionexpirations(ticker) => {
        return this.get(`markets/options/expirations?symbol=${ticker}`);
      },
      historical(ticker) => {
        return this.get(`markets/history?symbol=${ticker}`);
      },
      intradaystatus() => {
        return this.get(`markets/clock`);
      },
      marketcalendar() => {
        return this.get(`markets/calendar`);
      },
      companysearch(ticker) => {
        return this.get(`markets/search?q=${ticker}`);
      }
  });
  
  if (!username || !password) {
    console.log("No password provided.");
    let username = ""
    let password = ""   
  }
}

