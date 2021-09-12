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
    ({ _id, image, name, size, price, color, quantity }) => (
      <tr
        key={_id}
        style={{
          borderBottom: '1px solid #000000'
        }}
      >
        <td
          style={{
            width: '20%',
            paddingTop: '15px',
            paddingBottom: '10px'
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
        </td>
        <td
          style={{
            verticalAlign: 'top',
            padding: '1rem'
          }}
        >
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
            ></p>
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
              ${Number(price).toFixed(2)}
            </p>
          </div>
        </td>
      </tr>
    )
  );
  return (
    <section>
      <header style={{ backgroundColor: '#000' }}>
        <a
          href="https://originalite-and-co.herokuapp.com/"
          style={{
            display: 'block',
            margin: '0 auto',
            maxWidth: '270px',
            padding: '10px 0 6px 0',
            textDecoration: 'none'
          }}
        >
          <img
            src="https://res.cloudinary.com/originalite-and-co/image/upload/v1631394391/Originalite%CC%81-logo1_hf5mkd.png"
            alt="Logo"
          />
        </a>
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
          <table
            style={{
              borderTop: '1px solid #000000',
              borderSpacing: '0 15px',
              marginBottom: '20px',
              borderCollapse: 'collapse'
            }}
          >
            {productList}
          </table>
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
          <table
            style={{
              borderSpacing: '10px 15px',
              borderCollapse: 'separate',
              margin: '0 auto'
            }}
          >
            <tr>
              <td style={{ marginRight: '.5rem' }}>
                <a
                  href="https://www.facebook.com/"
                  style={{
                    fontFamily: '"Open Sans"  ,sans-serif',
                    textDecoration: 'none',
                    color: ' #fff'
                  }}
                >
                  Facebook
                </a>
              </td>
              <td style={{ marginRight: '.5rem', listStyleType: 'none' }}>
                <a
                  href="https://www.instagram.com/"
                  style={{
                    fontFamily: '"Open Sans"  ,sans-serif',
                    textDecoration: 'none',
                    color: ' #fff'
                  }}
                >
                  Instagram
                </a>
              </td>
              <td style={{ listStyleType: 'none' }}>
                <a
                  href="https://www.pinterest.com/"
                  style={{
                    fontFamily: '"Open Sans"  ,sans-serif',
                    textDecoration: 'none',
                    color: ' #fff'
                  }}
                >
                  Pinterest
                </a>
              </td>
            </tr>
          </table>
        </address>
      </footer>
    </section>
  );
}

export default Email;
