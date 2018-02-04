import chai, { expect, should, assert } from 'chai';
import Tradier from '../src/index';
import axios from 'axios';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
 
describe('Tradier', () => {

  describe('#constructor()', () => {
    it('requires one string argument', () => {
      () => {
        expect(new Tradier()).to.throw(Error);
      }
      () => {
        expect(new Tradier(123422).to.throw(Error));
      }
      () => {
        expect(new Tradier('ibuwwe', 'cbiccwc').to.throw(Error));
      }
      () => {
        expect(new Tradier('3c9h9fh8h2f92c8c2' + 3927329).to.not.throw(Error));
      }
    });
  });

  describe('methods', () => {
    let tradier; 

    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
    });

    it('should respond to quote', () => { 
      expect(tradier).to.respondTo('quote');
    });
    it('should respond to timesales', () => { 
      expect(tradier).to.respondTo('timesales');
    });
    it('should respond to optionchain', () => { 
      expect(tradier).to.respondTo('optionchain');
    });
    it('should respond to optionstrikes', () => { 
      expect(tradier).to.respondTo('optionstrikes');
    });
    it('should respond to optionexpirations', () => { 
      expect(tradier).to.respondTo('optionexpirations');
    });
    it('should respond to historical', () => { 
      expect(tradier).to.respondTo('historical');
    });
    it('should respond to intradaystatus', () => { 
      expect(tradier).to.respondTo('intradaystatus');
    });
    it('should respond to marketcalendar', () => { 
      expect(tradier).to.respondTo('marketcalendar');
    });
    it('should respond to companysearch', () => { 
      expect(tradier).to.respondTo('companysearch');
    });
    it('should respond to getCompanyInfo', () => { 
      expect(tradier).to.respondTo('getCompanyInfo');
    });
    it('should respond to getCorporateCalendar', () => { 
      expect(tradier).to.respondTo('getCorporateCalendar');
    });
    it('should respond to getDividendInfo', () => { 
      expect(tradier).to.respondTo('getDividendInfo');
    });
    it('should respond to getCorporateActions', () => { 
      expect(tradier).to.respondTo('getCorporateActions');
    });
    it('should respond to getRatios', () => { 
      expect(tradier).to.respondTo('getRatios');
    });
    it('should respond to getCorporateFinancials', () => { 
      expect(tradier).to.respondTo('getCorporateFinancials');
    });
    it('should respond to getPriceStats', () => { 
      expect(tradier).to.respondTo('getPriceStats');
    });
    it('should respond to _throw', () => { 
      expect(tradier).to.respondTo('_throw');
    });
  });

  describe('#quote()', () => {
    let tradier; 
    let quote;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      quote = tradier.quote;
    });
    it('is a function', () => {
      assert.isFunction(quote)
    })
  });
  describe('#timesales()', () => {
    let tradier; 
    let timesales;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      timesales = tradier.timesales;
    });
    it('is a function', () => {
      assert.isFunction(timesales)
    })
  });

  describe('#optionchain()', () => {
    let tradier; 
    let optionchain;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      optionchain = tradier.optionchain;
    });
    it('is a function', () => {
      assert.isFunction(optionchain)
    })
  });

  describe('#optionstrikes()', () => {
    let tradier; 
    let optionstrikes;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      optionstrikes = tradier.optionstrikes;
    });
    it('is a function', () => {
      assert.isFunction(optionstrikes)
    })
  });

  describe('#optionexpirations()', () => {
    let tradier; 
    let optionexpirations;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      optionexpirations = tradier.optionexpirations;
    });
    it('is a function', () => {
      assert.isFunction(optionexpirations)
    })
  });

  describe('#historical()', () => {
    let tradier; 
    let historical;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      historical = tradier.historical;
    });
    it('is a function', () => {
      assert.isFunction(historical)
    })
  });

  describe('#intradaystatus()', () => {
    let tradier; 
    let intradaystatus;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      intradaystatus = tradier.intradaystatus;
    });
    it('is a function', () => {
      assert.isFunction(intradaystatus)
    })
  });

  describe('#marketcalendar()', () => {
    let tradier; 
    let marketcalendar;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      marketcalendar = tradier.marketcalendar;
    });
    it('is a function', () => {
      assert.isFunction(marketcalendar)
    })
  });

  describe('#companysearch()', () => {
    let tradier; 
    let companysearch;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      companysearch = tradier.companysearch;
    });
    it('is a function', () => {
      assert.isFunction(companysearch)
    })
  });

  describe('#getCompanyInfo()', () => {
    let tradier; 
    let getCompanyInfo;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getCompanyInfo = tradier.getCompanyInfo;
    });
    it('is a function', () => {
      assert.isFunction(getCompanyInfo)
    })
  });

  describe('#getCorporateCalendar()', () => {
    let tradier; 
    let getCorporateCalendar;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getCorporateCalendar = tradier.getCorporateCalendar;
    });
    it('is a function', () => {
      assert.isFunction(getCorporateCalendar)
    })
  });

  describe('#getDividendInfo()', () => {
    let tradier; 
    let getDividendInfo;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getDividendInfo = tradier.getDividendInfo;
    });
    it('is a function', () => {
      assert.isFunction(getDividendInfo)
    })
  });

  describe('#getCorporateActions()', () => {
    let tradier; 
    let getCorporateActions;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getCorporateActions = tradier.getCorporateActions;
    });
    it('is a function', () => {
      assert.isFunction(getCorporateActions)
    })
  });

  describe('#getRatios()', () => {
    let tradier; 
    let getRatios;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getRatios = tradier.getRatios;
    });
    it('is a function', () => {
      assert.isFunction(getRatios)
    })
  });

  describe('#getCorporateFinancials()', () => {
    let tradier; 
    let getCorporateFinancials;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getCorporateFinancials = tradier.getCorporateFinancials;
    });
    it('is a function', () => {
      assert.isFunction(getCorporateFinancials)
    })
  });

  describe('#getPriceStats()', () => {
    let tradier; 
    let getPriceStats;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      getPriceStats = tradier.getPriceStats;
    });
    it('is a function', () => {
      assert.isFunction(getPriceStats)
    })
  });

  describe('#_throw()', () => {
    let tradier; 
    let _throw;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      _throw = tradier._throw;
    });
    it('is a function', () => {
      assert.isFunction(_throw)
    })
  });

  describe('#lookup()', () => {
    let tradier;
    beforeEach(() => {
      tradier = new Tradier(process.env.ACCESS_TOKEN);
      axios.get = sinon.spy(() => Promise.resolve({data:{data: {}}}));
    });
    it('is a function', () => {
      assert.isFunction(tradier.lookup)
    });
    it('fetch with q', () => {
      tradier.lookup({q: 'MSFT'});
      expect(axios.get).to.have.been.calledWith(`${tradier._hostBeta}markets/lookup?q=MSFT`);
    });
    it('fetch with exchanges', () => {
      tradier.lookup({exchanges: ['N', 'V']});
      expect(axios.get).to.have.been.calledWith(`${tradier._hostBeta}markets/lookup?exchanges=N,V`);
    });
    it('fetch with types', () => {
      tradier.lookup({types: ['stock', 'etf']});
      expect(axios.get).to.have.been.calledWith(`${tradier._hostBeta}markets/lookup?types=stock,etf`);
    });
    it('fetch with q, exchanges and types', () => {
      tradier.lookup({
        types: ['stock', 'etf'],
        q: 'MSFT',
        exchanges: ['N', 'V']
      });
      expect(axios.get).to.have.been.calledWith(`${tradier._hostBeta}markets/lookup?q=MSFT&exchanges=N,V&types=stock,etf`);
    });
});

});
