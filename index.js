const rest = require('restler');
const Promise = require('bluebird');
const EventEmitter = require('events');

const HOST = 'https://api.tradier.com/v1/';

export default (accesstoken) => { 
  const Tradier = rest.service(accesstoken => {
    this.defaults.accesstoken = a;
  }, {
    baseURL: HOST
  }, {
      quote(ticker) {
        return this.get(`markets/quotes?symbols=${ticker}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      timesales(ticker) { 
        return this.get(`markets/timesales?symbol=${ticker}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      optionchain(ticker) {
        return this.get(`markets/options/chains?symbol=${ticker}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      optionstrikes(ticker, expiration) {
        return this.get(`markets/options/strikes?symbol=${ticker}&expiration=${expiration}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      optionexpirations(ticker) {
        return this.get(`markets/options/expirations?symbol=${ticker}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      historical(ticker) {
        return this.get(`markets/history?symbol=${ticker}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      intradaystatus() {
        return this.get(`markets/clock`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      marketcalendar() {
        return this.get(`markets/calendar`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      },
      companysearch(ticker) {
        return this.get(`markets/search?q=${ticker}`, { headers: {
    "Authorization": `Bearer  ${accesstoken}` } });
      }
  });

  if (!accesstoken) {
    console.log("No access token provided.");
    let accesstoken = ""; 
  }

  const tradier = new Tradier(accesstoken);
  return tradier;
}
