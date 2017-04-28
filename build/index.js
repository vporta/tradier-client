'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tradier = function () {
  function Tradier(accesstoken) {
    var _endpoint = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    _classCallCheck(this, Tradier);

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

  _createClass(Tradier, [{
    key: 'quote',
    value: function quote(ticker) {
      return _axios2.default.get(this._host + 'markets/quotes?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var quotes = response.data.quotes;

        return new Promise(function (resolve, reject) {
          if (quotes) {
            resolve(quotes);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'timesales',
    value: function timesales(ticker) {
      return _axios2.default.get(this._host + 'markets/timesales?symbol=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var series = response.data.series;

        return new Promise(function (resolve, reject) {
          if (series) {
            resolve(series);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'optionchain',
    value: function optionchain(ticker, expiration) {
      return _axios2.default.get(this._host + 'markets/options/chains?symbol=' + ticker + '&expiration=' + expiration + ' ', {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var options = response.data.options;

        return new Promise(function (resolve, reject) {
          if (options) {
            resolve(options);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'optionstrikes',
    value: function optionstrikes(ticker, expiration) {
      return _axios2.default.get(this._host + 'markets/options/strikes?symbol=' + ticker + '&expiration=' + expiration, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var strikes = response.data.strikes;

        return new Promise(function (resolve, reject) {
          if (strikes) {
            resolve(strikes);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'optionexpirations',
    value: function optionexpirations(ticker) {
      return _axios2.default.get(this._host + 'markets/options/expirations?symbol=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var expirations = response.data.expirations;

        return new Promise(function (resolve, reject) {
          if (expirations) {
            resolve(expirations);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'historical',
    value: function historical(ticker) {
      return _axios2.default.get(this._host + 'markets/history?symbol=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var history = response.data.history;

        return new Promise(function (resolve, reject) {
          if (history) {
            resolve(history);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'intradaystatus',
    value: function intradaystatus() {
      return _axios2.default.get(this._host + 'markets/clock', {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'marketcalendar',
    value: function marketcalendar() {
      return _axios2.default.get(this._host + 'markets/calendar', {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'companysearch',
    value: function companysearch(ticker) {
      return _axios2.default.get(this._host + 'markets/search?q=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getCompanyInfo',
    value: function getCompanyInfo(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/company?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getCorporateCalendar',
    value: function getCorporateCalendar(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/calendars?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getDividendInfo',
    value: function getDividendInfo(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/dividends?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getCorporateActions',
    value: function getCorporateActions(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/corporate_actions?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getRatios',
    value: function getRatios(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/ratios?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getCorporateFinancials',
    value: function getCorporateFinancials(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/financials?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'getPriceStats',
    value: function getPriceStats(ticker) {
      return _axios2.default.get(this._hostBeta + 'markets/fundamentals/statistics?symbols=' + ticker, {
        headers: {
          "Authorization": 'Bearer ' + this.accesstoken
        }
      }).then(function (response) {
        var data = response.data.data;

        return new Promise(function (resolve, reject) {
          if (data) {
            resolve(data);
          } else {
            var error = new Error();
            reject(error);
          }
        });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: '_throw',
    value: function _throw(e) {
      if (typeof e === 'string') {
        e = "Tradier Client | " + e;
      } else {
        throw e;
      }
    }
  }]);

  return Tradier;
}();

module.exports = Tradier;