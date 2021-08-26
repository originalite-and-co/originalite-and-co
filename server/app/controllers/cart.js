const Cart = require("../models/Cart");
const Product = require("../models/Product");
const queryCreator = require("../commonHelpers/queryCreator");
const _ = require("lodash");

exports.createCart = (req, res, next) => {
  Cart.findOne({ customerId: req.user.id }).then((cart) => {
    if (cart) {
      return res
        .status(400)
        .json({ message: `Cart for this customer is already exists` });
    } else {
      const initialQuery = _.cloneDeep(req.body);
      initialQuery.customerId = req.user.id;

      const newCart = new Cart(queryCreator(initialQuery));

      newCart
        .populate("products.product")
        .populate("customerId")
        .execPopulate();

      newCart
        .save()
        .then((cart) => res.json(cart))
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          })
        );
    }
  });
};

exports.updateCart = (req, res, next) => {
  Cart.findOne({ customerId: req.user.id })
    .then((cart) => {
      if (!cart) {
        const initialQuery = _.cloneDeep(req.body);
        initialQuery.customerId = req.user.id;

        const newCart = new Cart(queryCreator(initialQuery));

        newCart
          .populate("products.product")
          .populate("customerId")
          .execPopulate();

        newCart
          .save()
          .then((cart) => res.json(cart))
          .catch((err) =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `,
            })
          );
      } else {
        const initialQuery = _.cloneDeep(req.body);
        const updatedCart = queryCreator(initialQuery);

        Cart.findOneAndUpdate(
          { customerId: req.user.id },
          { $set: updatedCart },
          { new: true }
        )
          .populate("products.product")
          .populate("customerId")
          .then((cart) => res.json(cart))
          .catch((err) =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `,
            })
          );
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.addProductToCart = async (req, res, next) => {
  let productToAdd;

  try {
    productToAdd = await Product.findOne({ _id: req.params.productId });
  } catch (err) {
    res.status(400).json({
      message: `Error happened on server: "${err}" `,
    });
  }

  if (!productToAdd) {
    res.status(400).json({
      message: `Product with _id (ObjectId) "${req.params.productId}" does not exist`,
    });
  } else {
    Cart.findOne({ customerId: req.user.id })
      .then((cart) => {
        if (!cart) {
          const cartData = {};
          cartData.customerId = req.user.id;
          cartData.products = [].concat({
            product: req.params.productId,
            cartQuantity: 1,
            chosenSize: req.query.size,
          });

          const newCart = new Cart(queryCreator(cartData));

          newCart
            .populate("products.product")
            .populate("customerId")
            .execPopulate();

          newCart
            .save()
            .then((cart) => res.json(cart))
            .catch((err) =>
              res.status(400).json({
                message: `Error happened on server: "${err}" `,
              })
            );
        } else {
          const cartData = {};

          const isProductExistInCart = cart.products.some((item) => {
            const isTheSameID =
              item.product.toString() === req.params.productId;
            const isTheSameSize = item.chosenSize.toString() === req.query.size;
            return isTheSameSize && isTheSameID;
          });

          if (isProductExistInCart) {
            cartData.products = cart.products.map((item) => {
              const isTheSameID =
                item.product.toString() === req.params.productId;
              const isTheSameSize =
                item.chosenSize.toString() === req.query.size;
              if (isTheSameID && isTheSameSize) {
                item.cartQuantity += 1;
              }

              return item;
            });
          } else {
            cartData.products = cart.products.concat({
              product: req.params.productId,
              cartQuantity: 1,
              chosenSize: req.query.size,
            });
          }

          const updatedCart = queryCreator(cartData);

          Cart.findOneAndUpdate(
            { customerId: req.user.id },
            { $set: updatedCart },
            { new: true }
          )
            .populate("products.product")
            .populate("customerId")
            .then((cart) => res.json(cart))
            .catch((err) =>
              res.status(400).json({
                message: `Error happened on server: "${err}" `,
              })
            );
        }
      })
      .catch((err) =>
        res.status(400).json({
          message: `Error happened on server: "${err}" `,
        })
      );
  }
};

exports.decreaseCartProductQuantity = async (req, res, next) => {
  Cart.findOne({ customerId: req.user.id })
    .then((cart) => {
      if (!cart) {
        res.status(400).json({ message: "Cart does not exists" });
      } else {
        const cartData = {};

        const isProductExistInCart = cart.products.some((item) => {
          const isTheSameID = item.product.toString() === req.params.productId;
          const isTheSameSize = item.chosenSize.toString() === req.query.size;
          return isTheSameSize && isTheSameID;
        });

        if (isProductExistInCart) {
          cartData.products = cart.products.map((item) => {
            const isTheSameID =
              item.product.toString() === req.params.productId;
            const isTheSameSize = item.chosenSize.toString() === req.query.size;
            if (isTheSameSize && isTheSameID) {
              item.cartQuantity -= 1;
            }

            return item;
          });

          cartData.products = cart.products.filter(
            (item) => item.cartQuantity > 0
          );
        } else {
          res.status(400).json({
            message: "Product ${} does not exists in cart to decrease quantity",
          });
        }

        Cart.findOneAndUpdate(
          { customerId: req.user.id },
          { $set: cartData },
          { new: true }
        )
          .populate("products.product")
          .populate("customerId")
          .then((cart) => res.json(cart))
          .catch((err) =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `,
            })
          );
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.deleteCart = (req, res, next) => {
  Cart.findOne({ customerId: req.user.id }).then(async (cart) => {
    if (!cart) {
      return res
        .status(400)
        .json({ message: `Cart for this customer is not found.` });
    } else {
      const cartToDelete = await Cart.findOne({ customerId: req.user.id });

      Cart.deleteOne({ customerId: req.user.id })
        .then((deletedCount) =>
          res.status(200).json({
            message: `Cart witn id "${cartToDelete._id}" is successfully deletes from DB `,
          })
        )
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          })
        );
    }
  });
};

exports.deleteProductFromCart = async (req, res, next) => {
  Cart.findOne({ customerId: req.user.id })
    .then((cart) => {
      if (!cart) {
        res.status(400).json({ message: `Cart does not exist` });
        return;
      }

      const isProductExistInCart = cart.products.some((item) => {
        const isTheSameID = item.product.toString() === req.params.productId;
        const isTheSameSize = item.chosenSize.toString() === req.query.size;
        return isTheSameSize && isTheSameID;
      });

      if (!isProductExistInCart) {
        res.status(400).json({
          message: `Product with _id "${req.params.productId}" is absent in cart.`,
        });

        return;
      }

      const cartData = {};
      cartData.products = cart.products.filter((item) => {
        const isTheSameID = item.product.toString() === req.params.productId;
        const isTheSameSize = item.chosenSize.toString() === req.query.size;
        return !(isTheSameSize && isTheSameID);
      });

      const updatedCart = queryCreator(cartData);

      if (cartData.products.length === 0) {
        return Cart.deleteOne({ customerId: req.user.id })
          .then((deletedCount) =>
            res.status(200).json({
              products: [],
            })
          )
          .catch((err) =>
            res.status(400).json({
              message: `Error happened on server: "${err}" `,
            })
          );
      }

      Cart.findOneAndUpdate(
        { customerId: req.user.id },
        { $set: updatedCart },
        { new: true }
      )
        .populate("products.product")
        .populate("customerId")
        .then((cart) => res.json(cart))
        .catch((err) =>
          res.status(400).json({
            message: `Error happened on server: "${err}" `,
          })
        );
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.getCart = (req, res, next) => {
  Cart.findOne({ customerId: req.user.id })
    .populate("products.product")
    .populate("customerId")
    .then((cart) => res.json(cart))
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};
