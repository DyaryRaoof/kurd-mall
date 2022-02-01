const items = [];
for (let i = 0; i < 5; i += 1) {
  const item = {
    id: i, categoryId: 0, subcategoryId: 0, name: `Item No. ${i}`, price: { value: 100000, currency: 'IQD' }, image: 'http://i1.adis.ws/i/canon/eos-r6-rf24-105mm-f4_7.1_is_stm_front-on_square_6412568cc0e7484b96bd55e43069a56c', stars: { count: 3, users: 100 }, leftInStock: 3,
  };
  items.push(item);
}

export default items;
