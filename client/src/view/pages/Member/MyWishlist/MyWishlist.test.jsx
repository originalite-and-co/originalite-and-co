import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../../redux/store/store';
import { Provider } from 'react-redux';
import CustomThemeProvider from '../../../HOC/CustomThemeProvider/CustomThemeProvider';
import React from 'react';
import MyWishlist from './MyWishlist';

const wishlist = {
  products: [
    {
      enabled: true,
      imageUrls: [
        'https://res.cloudinary.com/originalite-and-co/image/upload/v1628522942/jacket1_zuyr96.png',
        './img2',
        './img3'
      ],
      quantity: 4,
      sizes: ['xs', 's', 'm', 'l', 'xl'],
      _id: '6102e0617068eb0d87e18f95',
      name: 'Jacket',
      currentPrice: 100,
      previousPrice: 120,
      categories: 'women-jackets',
      color: 'brown',
      productUrl: '/men',
      brand: 'Zara',
      manufacturer: 'Zara',
      manufacturerCountry: 'France',
      seller: 'Shop',
      itemNo: '477619',
      date: '2021-07-29T17:07:45.436Z',
      __v: 0
    },
    {
      enabled: true,
      imageUrls: [
        'https://res.cloudinary.com/originalite-and-co/image/upload/v1628684811/product5_vgteuq.png',
        './img2',
        './img3'
      ],
      quantity: 0,
      sizes: [],
      _id: '6113c69d66cf181dcc758691',
      name: 'Coat',
      currentPrice: 100,
      previousPrice: 120,
      categories: 'women-coats',
      color: 'white',
      productUrl: '/men',
      brand: 'Zara',
      manufacturer: 'Zara',
      manufacturerCountry: 'France',
      seller: 'Shop',
      itemNo: '841293',
      date: '2021-07-29T17:07:45.436Z',
      __v: 0
    },
    {
      enabled: true,
      imageUrls: [
        'https://res.cloudinary.com/originalite-and-co/image/upload/v1628686468/product1_axv2s9.png',
        './img2',
        './img3'
      ],
      quantity: 4,
      sizes: ['xs', 's'],
      _id: '6113c8bf6151b842ec1d448b',
      name: 'white jacket',
      currentPrice: 360,
      previousPrice: 120,
      categories: 'women-jackets',
      color: 'white',
      productUrl: '/men',
      brand: 'Zara',
      manufacturer: 'Zara',
      manufacturerCountry: 'France',
      seller: 'Shop',
      itemNo: '388912',
      date: '2021-07-29T17:07:45.436Z',
      __v: 0
    }
  ],
  _id: '611e56335386805cc4c51fcd',
  customerId: {
    isAdmin: true,
    enabled: true,
    _id: '61113db78523d7b02120b4ed',
    firstName: 'Anton',
    lastName: 'Molchanov',
    login: 'molchanov',
    email: 'antonmolchanov97@gmail.com',
    password: '$2a$10$5oVmyCZ2/lNPtbLxL0eTEeMqpxj2eIy241QMd7lsQkyPnp9ZPa68i',
    telephone: '+380508088725',
    birthdate: '22.04.1997',
    gender: 'Male',
    customerNo: '50826218',
    date: '2021-08-09T14:37:43.407Z',
    __v: 0,
    birthday: '06.09.1969',
    mobilePhone: '+380503311484',
    name: 'Tony'
  },
  date: '2021-08-19T13:01:39.838Z',
  __v: 0
};

const MyWishlistTest = () => {
  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Provider store={store}>
          <MyWishlist wishlist={wishlist} />
        </Provider>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};
describe('MyWishList component', () => {
  test('it should get rendered', () => {
    render(<MyWishlistTest />);
  });
});
