# tradier-client

[![npm](https://img.shields.io/npm/l/express.svg?style=plastic)](https://www.npmjs.com/package/tradier-client)




tradier-client is a promise-based Node.js wrapper for the Tradier API. It currently works with the *Market Data* and *Fundamentals* API. 

## API Keys 

You will receive your Tradier API Access Token after: [creating an account](https://developer.tradier.com)

## Installation

```shell
$ npm i -S tradier-client
```


## Example Usage 

Require or import the package. 
```javascript
const Tradier = require('tradier-client');

// ES2015 
import Tradier from 'tradier-client';

```

When creating a new `Tradier` instance, you must specify if you are in a sandbox account. See below for a description. 

```javascript
// If you are not in a sandbox account, you only need to pass in your access token and it takes care of the rest:
const tradier = new Tradier('TRADIER_ACCESS_TOKEN');

// If you are in a sandbox account, you must pass in 'sandbox' as a second argument in the new instance: 
const tradier = new Tradier('TRADIER_ACCESS_TOKEN', 'sandbox');

// Get current stock quotes
tradier
  .quote('AAPL')  // For multiple quotes, separate tickers with a comma: .quote('AAPL,KO,S')
  .then(quote => {
    console.log(`
      Symbol: ${quote.symbol}     
      Volume: ${quote.volume} 
      Open: ${quote.open} 
      High: ${quote.high}
      Low: ${quote.low} 
      Close: ${quote.close}
      Previous: ${quote.prevclose}  
    `);
  })
  .catch(error => {
    console.log(error);
  })

```


## Documentation 

### Methods
  - [Quote](https://github.com/vporta/tradier-client#quote)
  - [Time and Sales](https://github.com/vporta/tradier-client#time-and-sales)
  - [Option Chains](https://github.com/vporta/tradier-client#option-chains)
  - [Option Strikes](https://github.com/vporta/tradier-client#option-strikes)
  - [Option Expirations](https://github.com/vporta/tradier-client#option-expirations)
  - [Historical Pricing](https://github.com/vporta/tradier-client#historical-pricing)
  - [Intraday Status](https://github.com/vporta/tradier-client#intraday-status)
  - [Market Calendar](https://github.com/vporta/tradier-client#market-calendar)
  - [Company Search](https://github.com/vporta/tradier-client#company-search)
  - [Company Information](https://github.com/vporta/tradier-client#company-information)
  - [Corporate Calendar](https://github.com/vporta/tradier-client#corporate-calendar)
  - [Dividend Information](https://github.com/vporta/tradier-client#dividend-information)
  - [Corporate Actions](https://github.com/vporta/tradier-client#corporate-actions)
  - [Ratios](https://github.com/vporta/tradier-client#ratios)
  - [Corporate Financials](https://github.com/vporta/tradier-client#corporate-financials)
  - [Price Statistics](https://github.com/vporta/tradier-client#price-statistics)

### Quote ###

```javascript
tradier
  .quote('AAPL')  // For multiple quotes: .quote('AAPL,KO,S')
  .then(quote => {
    console.log(quote)
  })
  .catch(error => {
    console.log(error);
  })
```

### Time and Sales ### 

```javascript
tradier
  .timesales('AAPL')
  .then(ts => {
    console.log(ts)
  })
  .catch(error => {
    console.log(error);
  })
```

### Option Chains ###

```javascript
tradier
  .optionchain('AAPL')
  .then(oc => {
    console.log(oc)
  })
  .catch(error => {
    console.log(error);
  })
```

### Option Strikes ### 

```javascript
tradier
  .optionstrikes('AAPL')
  .then(os => {
    console.log(os)
  })
  .catch(error => {
    console.log(error);
  })
```

### Option Expirations ###

```javascript
tradier
  .optionexpirations('AAPL')
  .then(oe => {
    console.log(oe)
  })
  .catch(error => {
    console.log(error);
  })
```

### Historical Pricing ###

```javascript
tradier
  .historical('AAPL')
  .then(history => {
    console.log(history)
  })
  .catch(error => {
    console.log(error);
  })
});

/* returns an array of objects

{ day: 
  [ { date: '2017-01-03',
       open: 115.8,
       high: 116.33,
       low: 114.76,
       close: 116.15,
       volume: 28781865 }... 
  ]

*/

```

### Intraday Status ###

```javascript
tradier
  .intradaystatus('AAPL')
  .then(intraday => {
    console.log(intraday)
  })
  .catch(error => {
    console.log(error);
  })
```

### Market Calendar ###

```javascript
tradier
  .marketcalendar('AAPL')
  .then(mc => {
    console.log(mc)
  })
  .catch(error => {
    console.log(error);
  })
```

### Company Search ###

```javascript
tradier
  .companysearch('AAPL')
  .then(cs => {
    console.log(cs)
  })
  .catch(error => {
    console.log(error);
  })
```

### Company Information ###

```javascript
tradier
  .getCompanyInfo('AAPL')
  .then(ci => {
    console.log(ci)
  })
  .catch(error => {
    console.log(error);
  })
```

### Corporate Calendar ###

```javascript
tradier
  .getCorporateCalendar('AAPL')
  .then(cc => {
    console.log(cc)
  })
  .catch(error => {
    console.log(error);
  })
```

### Dividend Information ###

```javascript
tradier
  .getDividendInfo('AAPL')
  .then(di => {
    console.log(di)
  })
  .catch(error => {
    console.log(error);
  })
```

### Corporate Actions ###

```javascript
tradier
  .getCorporateActions('AAPL')
  .then(ca => {
    console.log(ca)
  })
  .catch(error => {
    console.log(error);
  })
```

### Ratios ###

```javascript
tradier
  .getRatios('AAPL')
  .then(ratios => {
    console.log(ratios)
  })
  .catch(error => {
    console.log(error);
  })
```

### Corporate Financials ###

```javascript
tradier
  .getCorporateFinancials('AAPL')
  .then(cf => {
    console.log(cf)
  })
  .catch(error => {
    console.log(error);
  })
```

### Price Statistics ###

```javascript
tradier
  .getPriceStats('AAPL')
  .then(ps => {
    console.log(ps)
  })
  .catch(error => {
    console.log(error);
  })
```


## Endpoints 

API Endpoints used include:

Sandbox: `https://sandbox.tradier.com/v1/`
API: `https://api.tradier.com/v1/`
Beta: `https://api.tradier.com/beta/`



## Contribute 
Feel free to suggest new features, open an issue or submit a pull request. 