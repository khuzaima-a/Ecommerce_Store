const express = require('express')

const shopController = require("../controller/shop");
const isAuth = require("../middleware/is-auth");

const router = express.Router()

router.get("/", shopController.getIndex);

router.get('/products', shopController.getProducts)

router.get("/products/:productId", shopController.getProduct);

router.get("/cart", isAuth, shopController.getCart);

router.post("/cart-delete-item", isAuth, shopController.deleteProductFromCart);

router.post("/cart", isAuth, shopController.postToCart);

router.get("/orders", isAuth, shopController.getOrders);

router.post("/post-order", isAuth, shopController.postOrder);

router.get("/search", shopController.search)

router.get("/checkout", isAuth, shopController.getCheckout);

router.get('/orders/:orderId', isAuth, shopController.getInvoice)

module.exports = router