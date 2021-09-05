import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

Email.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      size: PropTypes.string,
      currentPrice: PropTypes.number,
      color: PropTypes.string,
      quantity: PropTypes.number
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
  orderNumber: PropTypes.number.isRequired
};

function Email({ products, total }) {
  const productList = products.map(
    ({ _id, image, name, size, currentPrice, color, quantity }) => (
      <li
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 10fr',
          gridColumnGap: '2vw',
          padding: '2vw',
          borderBottom: '1px solid #000000',
          listStyleType: 'none',
          marginBottom: '3vw'
        }}
      >
        <figure>
          <img
            style={{
              display: 'block',
              maxWidth: '100%',
              objectFit: 'cover'
            }}
            src={image}
            alt={name}
          />
        </figure>
        <div>
          <p
            style={{
              fontFamily: '"Open Sans"  ,sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#000000',
              marginBottom: '.875rem'
            }}
          >
            {_.upperFirst(name)}
          </p>
          <p
            style={{
              fontFamily: '"Open Sans"  ,sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#757575',
              marginBottom: '.5rem'
            }}
          >
            Size: {size.toUpperCase()}
          </p>
          <p
            style={{
              fontFamily: '"Open Sans"  ,sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#757575',
              marginBottom: '.5rem'
            }}
          >
            Color: {_.upperFirst(color)}
          </p>
          <p
            style={{
              fontFamily: '"Open Sans"  ,sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#757575',
              marginBottom: '.5rem'
            }}
          >
            Quantity: {quantity}
          </p>
          <div>
            <p
              style={{
                fontFamily: '"Open Sans"  ,sans-serif',
                fontWeight: 400,
                fontSize: '1rem',
                lineHeight: 1.5,
                display: 'inline-block',
                color: '#757575',
                marginRight: '3px'
              }}
            >
              Price:{' '}
            </p>
            <p
              style={{
                fontFamily: '"Open Sans"  ,sans-serif',
                fontWeight: 500,
                fontSize: '1rem',
                lineHeight: 1.5,
                display: 'inline-block',
                color: '#000000'
              }}
            >
              {' '}
              ${Number(currentPrice).toFixed(2)}
            </p>
          </div>
        </div>
      </li>
    )
  );
  return (
    <section>
      <header style={{ backgroundColor: '#000' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1200px',
            padding: '10px',
            margin: '0 auto'
          }}
        >
          <p style={{ color: '#fff' }}>Logo</p>
          <nav>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <li style={{ marginRight: '1rem', listStyleType: 'none' }}>
                <a
                  style={{
                    fontFamily: '"Open Sans"  ,sans-serif',
                    textDecoration: 'none',
                    color: ' #fff',
                    textTransform: 'uppercase'
                  }}
                  href="#"
                >
                  Men
                </a>
              </li>
              <li style={{ marginRight: '1rem', listStyleType: 'none' }}>
                <a
                  style={{
                    fontFamily: '"Open Sans"  ,sans-serif',
                    textDecoration: 'none',
                    color: ' #fff',
                    textTransform: 'uppercase'
                  }}
                  href="#"
                >
                  Women
                </a>
              </li>
              <li style={{ listStyleType: 'none' }}>
                <a
                  style={{
                    fontFamily: '"Open Sans"  ,sans-serif',
                    textDecoration: 'none',
                    color: ' #fff',
                    textTransform: 'uppercase'
                  }}
                  href="#"
                >
                  Kids
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div
        style={{
          padding: '30px 20px',
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '1160px'
        }}
      >
        <h2
          style={{
            fontFamily: '"Open Sans"  ,sans-serif',
            fontWeight: 300,
            fontSize: '2rem',
            marginBottom: '2rem',
            color: '#000',
            textAlign: 'center'
          }}
        >
          Thank You for Your Order!
        </h2>
        <p
          style={{
            fontFamily: '"Open Sans"  ,sans-serif',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            color: '#000',
            marginBottom: '.875rem'
          }}
        >
          We will send you tracking information when the order ships
        </p>

        <div>
          <p
            style={{
              fontFamily: '"Open Sans"  ,sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              lineHeight: 1.5,
              color: '#000000',
              marginBottom: '.3rem'
            }}
          >
            Order #
          </p>
          <ul
            style={{
              borderTop: '1px solid #000000'
            }}
          >
            {productList}
          </ul>
          <div
            style={{
              borderRadius: '7px',
              backgroundColor: '#c4c4c433',
              padding: '2.7vw',
              marginBottom: '2vw'
            }}
          >
            <h3
              style={{
                fontFamily: '"Open Sans"  ,sans-serif',
                fontWeight: 700,
                fontSize: '1rem',
                lineHeight: 1.5,
                color: '#000000',
                marginBottom: '1.5rem'
              }}
            >
              Summary
            </h3>
            <div>
              <p
                style={{
                  fontFamily: '"Open Sans"  ,sans-serif',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  color: '#000000'
                }}
              >
                Total: ${total}
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: '#000' }}>
        <address
          style={{ maxWidth: '1200px', padding: '10px', margin: ' 0 auto' }}
        >
          <ul
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <li style={{ marginRight: '.5rem', listStyleType: 'none' }}>
              <a
                href="#"
                style={{
                  fontFamily: '"Open Sans"  ,sans-serif',
                  textDecoration: 'none',
                  color: ' #fff'
                }}
              >
                Facebook
              </a>
            </li>
            <li style={{ marginRight: '.5rem', listStyleType: 'none' }}>
              <a
                href="#"
                style={{
                  fontFamily: '"Open Sans"  ,sans-serif',
                  textDecoration: 'none',
                  color: ' #fff'
                }}
              >
                Instagram
              </a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <a
                href="#"
                style={{
                  fontFamily: '"Open Sans"  ,sans-serif',
                  textDecoration: 'none',
                  color: ' #fff'
                }}
              >
                Pinterest
              </a>
            </li>
          </ul>
        </address>
      </footer>
    </section>
  );
}

export default Email;
