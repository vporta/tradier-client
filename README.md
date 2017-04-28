# tradier-client

NPM package will be published soon. 

For now, begin by cloning the repo: `git clone https://github.com/vporta/tradier-client.git`. Then `npm install`

Grab your Token from the Tradier website. 
```
const tradier = new Tradier('My Tradier Bearer Token');

```

### Quotes ###

```
tradier.quote('AAPL', data => {
  console.log(data);
});

```

### Time and Sales ### 

```
tradier.timeandsales('AAPL', data => {
  console.log(data);
});

```


### Option Chains ###

```
tradier.optionchain('AAPL', data => {
  console.log(data);
});

```


### Option Strikes ### 

```
tradier.optionstrikes('AAPL', data => {
  console.log(data);
});

```


### Option Expirations ###

```
tradier.optionexpirations('AAPL', data => {
  console.log(data);
});

```


### Historical Pricing ###

```
tradier.historical('AAPL', data => {
  console.log(data);
});

```

### Intraday Status ###

```
tradier.intradaystatus('AAPL', data => {
  console.log(data);
});

```

### Market Calendar ###

```
tradier.marketcalendar('AAPL', data => {
  console.log(data);
});

```

### Company Search ###

```
tradier.companysearch('AAPL', data => {
  console.log(data);
});

```

### Company Information ###

```
tradier.getCompanyInfo('AAPL', data => {
  console.log(data);
});

```

### Corporate Calendar ###

```
tradier.getCorporateCalendar('AAPL', data => {
  console.log(data);
});

```

### Dividend Information ###

```
tradier.getDividendInfo('AAPL', data => {
  console.log(data);
});

```

### Corporate Actions ###

```
tradier.getCorporateActions('AAPL', data => {
  console.log(data);
});

```

### Ratios ###

```
tradier.getRatios('AAPL', data => {
  console.log(data);
});

```

### Corporate Financials ###

```
tradier.getCorporateFinancials('AAPL', data => {
  console.log(data);
});

```

### Price Statistics ###

```
tradier.getPriceStats('AAPL', data => {
  console.log(data);
});

```

