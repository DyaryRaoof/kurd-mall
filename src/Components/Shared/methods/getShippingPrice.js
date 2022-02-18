const getShippingPrice = (weight, currency) => {
  if (currency === 'USD') {
    switch (true) {
      case weight < 30:
        return 3;
      case weight > 30 && weight < 100:
        return 4;
      case weight > 100:
        return 10;
      default:
        return 3;
    }
  } else if (currency === 'IQD') {
    switch (true) {
      case weight < 30:
        return 4000;
      case weight > 30 && weight < 100:
        return 6000;
      case weight > 100:
        return 15000;
      default:
        return 4000;
    }
  }

  return 0;
};

export default getShippingPrice;
