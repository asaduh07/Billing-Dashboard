function transformData(data) {
    const transformed = {};
  
    for (const [serviceProvider, serviceData] of Object.entries(data)) {
      transformed[serviceProvider] = {
        serviceProvider,
        countryCode: [],
        price: [],
        totalcost: [],
        smscost: [],
        delivered: [],
        failed: [],
        other: [],
      };
  
      for (const [countryCode, countryDetails] of Object.entries(serviceData)) {
        transformed[serviceProvider].countryCode.push(countryCode);
  
        for (const [price, pricingData] of Object.entries(countryDetails)) {
          transformed[serviceProvider].price.push(price);
          transformed[serviceProvider].totalcost.push(pricingData.totalcost);
          transformed[serviceProvider].smscost.push(pricingData.smscost);
          transformed[serviceProvider].delivered.push(pricingData.delivered || 0);
          transformed[serviceProvider].failed.push(pricingData.failed || 0);
          transformed[serviceProvider].other.push(pricingData.other || 0);
        }
      }
    }
  
    return Object.values(transformed);
  }

export default transformData;