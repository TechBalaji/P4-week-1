import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../features/products/productSlice";
import moment from "moment";

const ProductDetails = () => {
  const { productId } = useParams();
  const productDetails = useSelector((state) => state?.product?.productDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDetails(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    // Add to cart logic here
  };

  const handleCheckout = () => {
    // Proceed to checkout logic here
  };

  return (
    <>
      <Meta title={productDetails?.name} />
      <BreadCrumb title={productDetails?.name} />
      <Container className="product-details-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <img src={productDetails?.images[0]?.url} className="img-fluid w-100" alt={productDetails?.name} />
          </div>
          <div className="col-6">
            <h3 className="title">{productDetails?.name}</h3>
            <p className="description">{productDetails?.description}</p>
            <p className="price">${productDetails?.price}</p>
            <p className="date">Available from: {moment(productDetails?.availableFrom).format("MMMM Do YYYY")}</p>
            <h4>Product Details</h4>
            <ul>
              <li>Category: {productDetails?.category}</li>
              <li>Brand: {productDetails?.brand}</li>
              <li>Stock: {productDetails?.stock}</li>
              <li>SKU: {productDetails?.sku}</li>
              <li>Dimensions: {productDetails?.dimensions}</li>
              <li>Weight: {productDetails?.weight}</li>
            </ul>
            <button onClick={handleAddToCart} className="button">Add to Cart</button>
            <button onClick={handleCheckout} className="button">Proceed to Checkout</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
