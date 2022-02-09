const items = [];
for (let i = 0; i < 5; i += 1) {
  const item = {
    id: i,
    categoryId: 0,
    subcategoryId: 0,
    name: `Item No. ${i}`,
    description: 'This is item description for item No. 1, 2, 3, 4, 5',
    price: { value: 100000, currency: 'IQD' },
    cost: { value: 100000, currency: 'IQD' },
    image: 'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c',
    images: [
      'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c',
      'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c',
      'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c',
      'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c',
      'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c',
      'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c'],
    stars: { count: 3, users: 100 },
    leftInStock: 3,
    storeId: 0,
    shippingKg: 2,
    shippingPrice: { value: 3000, currency: 'IQD' },
    tags: ['tag1', 'tag2'],
    variants: [
      {
        id: 0,
        name: 'variant1',
        price: { value: 100000, currency: 'IQD' },
        cost: { value: 100000, currency: 'IQD' },
        imageIndex: 0,
      },
      {
        id: 1,
        name: 'variant2',
        price: { value: 100000, currency: 'IQD' },
        cost: { value: 100000, currency: 'IQD' },
        imageIndex: 1,
      },
      {
        id: 2,
        name: 'variant3',
        price: { value: 100000, currency: 'IQD' },
        cost: { value: 100000, currency: 'IQD' },
        imageIndex: 2,
      },
      {
        id: 3,
        name: 'variant4',
        price: { value: 100000, currency: 'IQD' },
        cost: { value: 100000, currency: 'IQD' },
        imageIndex: 3,
      },
      {
        id: 4,
        name: 'variant5',
        price: { value: 100000, currency: 'IQD' },
        cost: { value: 100000, currency: 'IQD' },
        imageIndex: 4,
      },
      {
        id: 5,
        name: 'variant6',
        price: { value: 100000, currency: 'IQD' },
        cost: { value: 100000, currency: 'IQD' },
        imageIndex: 5,
      },
    ],
  };
  items.push(item);
}

export default items;
