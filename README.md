# tradier-client

tradier-client is a promise-based Node.js wrapper for the Tradier API. It currently works with the *Market Data* and *Fundamentals* API. 

## API Keys 

You will receive your Tradier API Access Token after creating an account: [creating an account](https://developer.tradier.com)

## Installation

`npm i -S tradier-client`


## Example Usage 

Require or import the package. 
```
const Tradier = require('tradier-client');

// or

import Tradier from 'tradier-client';

```

When creating a new `Tradier` instance, you must specify if you are in a sandbox account. See below for a description. 

```
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


### Quote ###

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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

```
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
```
Sandbox: https://sandbox.tradier.com/v1/
API: https://api.tradier.com/v1/
Beta: https://api.tradier.com/beta/
```


## Contribute 
Feel free to suggest new features, open an issue or submit a pull request. 