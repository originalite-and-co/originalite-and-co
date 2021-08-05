import { ProductCard } from './ProductCard';

export const CardList = () => {
  const productsMockUp = [
    {
      enabled: true,
      imageUrls: ['products/itemNo2'],
      quantity: 40,
      _id: '5d73ad04fcad90130470f08b',
      name: 'test product',
      currentPrice: 280,
      categories: 'phones',
      someOtherFeature: 'Test feature strict false 2222222222',
      color: 'black',
      size: 'xl',
      ram: '5',
      weight: '200g',
      itemNo: '243965',
      __v: 0,
      date: '2019-10-14T12:46:28.041Z',
    },
    {
      enabled: true,
      imageUrls: ['products/itemNo2'],
      quantity: 40,
      _id: '5d73ad2bfcad90130470f08c',
      name: 'test product 2',
      currentPrice: 35,
      categories: 'phones',
      someOtherFeature: 'test2',
      color: 'white',
      size: 'x',
      ram: '23',
      weight: '100g',
      itemNo: '341527',
      __v: 0,
      date: '2019-10-14T12:46:28.041Z',
    },
    {
      enabled: true,
      imageUrls: ['products/itemNo2'],
      quantity: 40,
      _id: '5d73ad7cfcad90130470f08d',
      name: 'test product 3',
      currentPrice: 100,
      categories: 'notebooks',
      someOtherFeature: 'test3',
      color: 'red',
      size: 'l',
      ram: '50',
      weight: '4kg',
      itemNo: '831009',
      __v: 0,
      date: '2019-10-14T12:46:28.042Z',
    }
  ];
  return (

    productsMockUp.map((product) => (<ProductCard product={product} />))
  );
};
