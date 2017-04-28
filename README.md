# tradier-client


NPM package will be published soon. 

For now, begin by cloning the repo: `git clone https://github.com/vporta/tradier-client.git`. Then `npm install`

Grab your Token from the Tradier website. 
```
const tradier = new Tradier('My Tradier Bearer Token');

```

### Quote ###

```
tradier
  .quote('AAPL')
  .then((quotes) => {
    console.log(quotes)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Time and Sales ### 

```
tradier
  .timesales('AAPL')
  .then((ts) => {
    console.log(ts)
  })
  .catch((error) => {
    console.log(error);
  })

```


### Option Chains ###

```
tradier
  .optionchain('AAPL')
  .then((oc) => {
    console.log(oc)
  })
  .catch((error) => {
    console.log(error);
  })

```


### Option Strikes ### 

```
tradier
  .optionstrikes('AAPL')
  .then((os) => {
    console.log(os)
  })
  .catch((error) => {
    console.log(error);
  })

```


### Option Expirations ###

```
tradier
  .optionexpirations('AAPL')
  .then((oe) => {
    console.log(oe)
  })
  .catch((error) => {
    console.log(error);
  })

```


### Historical Pricing ###

```
tradier
  .historical('AAPL')
  .then((history) => {
    console.log(history)
  })
  .catch((error) => {
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
  .then((intraday) => {
    console.log(intraday)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Market Calendar ###

```
tradier
  .marketcalendar('AAPL')
  .then((mc) => {
    console.log(mc)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Company Search ###

```
tradier
  .companysearch('AAPL')
  .then((cs) => {
    console.log(cs)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Company Information ###

```
tradier
  .getCompanyInfo('AAPL')
  .then((ci) => {
    console.log(ci)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Corporate Calendar ###

```
tradier
  .getCorporateCalendar('AAPL')
  .then((cc) => {
    console.log(cc)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Dividend Information ###

```
tradier
  .getDividendInfo('AAPL')
  .then((di) => {
    console.log(di)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Corporate Actions ###

```
tradier
  .getCorporateActions('AAPL')
  .then((ca) => {
    console.log(ca)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Ratios ###

```
tradier
  .getRatios('AAPL')
  .then((ratios) => {
    console.log(ratios)
  })
  .catch((error) => {
    console.log(error);
  })

```

### Corporate Financials ###

```
tradier
  .getCorporateFinancials('AAPL')
  .then((cf) => {
    console.log(cf)
  })
  .catch((error) => {
    console.log(error);
  })
```

### Price Statistics ###

```
tradier
  .getPriceStats('AAPL')
  .then((ps) => {
    console.log(ps)
  })
  .catch((error) => {
    console.log(error);
  })
```

