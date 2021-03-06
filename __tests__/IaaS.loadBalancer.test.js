const ncloud = require('../lib/');
const moment = require('moment-timezone');

const {
  accessKey,
  secretKey,
  apiKey,
} = require('./env.json');

const client = ncloud.createClient({
  accessKey,
  secretKey,
  apiKey,
});

describe('Test IaaS LoadBalancer Method', function( ){
  beforeAll(function (){
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    // jest.setTimeout = 50000;
    console.log('set Interval');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 500000;
  });

  test('Test getLoadBalancerInstanceList', async ( done ) => {
    try {
      const client = ncloud.createClient({
        accessKey,
        secretKey,
        apiKey,
        regionNo: "1",
      });
      const loadBalancer = client.IaaS.loadBalancer();
      const loadBalancerList = await loadBalancer.getLoadBalancerInstanceList();
      console.log( loadBalancerList.loadBalancerInstanceList[0].loadBalancerName );

      done();
    } catch (e) {
      done.fail(e);
    }
  });
});

