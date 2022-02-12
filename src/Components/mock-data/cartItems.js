const cartItems = [
  {
    orderNo: 1,
    id: 0,
    supplierName: 'Supplier 1',
    name: 'Product 1',
    price: 100,
    currency: 'IQD',
    variantOptions: [
      {
        name: 'Color',
        value: 'Red',
        price: 100,
        currency: 'IQD',
      },
      {
        name: 'Size',
        value: '20',
        price: 100,
        currency: 'IQD',
      },

    ],
    shippingWeight: 1,
    quantity: 1,
    totalPrice: 0,
    totalWeight: 1,
    pickedUp: false,
    delivered: false,
    pickedUpByUserId: 1,
  },
  {
    orderNo: 2,
    id: 1,
    supplierName: 'Supplier 1',
    name: 'Product 2',
    price: 200,
    currency: 'IQD',
    variantOptions: [
      {
        name: 'Color',
        value: 'Red',
        price: 100,
        currency: 'IQD',
      },
      {
        name: 'Size',
        value: '20',
        price: 100,
        currency: 'IQD',
      },

    ],
    shippingWeight: 2,
    quantity: 1,
    totalPrice: 400,
    totalWeight: 2,
    pickedUp: false,
    delivered: false,
    pickedUpByUserId: 1,

  },
  {
    orderNo: 3,

    id: 2,
    supplierName: 'Supplier 2',
    name: 'Product 3',
    price: 300,
    currency: 'IQD',
    variantOptions: [
      {
        name: 'Color',
        value: 'Red',
        price: 100,
        currency: 'IQD',
      },
      {
        name: 'Size',
        value: '20',
        price: 100,
        currency: 'IQD',
      },

    ],
    shippingWeight: 3,
    quantity: 1,
    totalPrice: 900,

    totalWeight: 3,
    pickedUp: false,
    delivered: false,
    pickedUpByUserId: 1,

  }];

export default cartItems;
