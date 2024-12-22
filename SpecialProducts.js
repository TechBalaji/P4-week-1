import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllSpecialProducts } from "../features/products/productSlice";
import moment from "moment";

const SpecialProducts = () => {
  const specialProductsState = useSelector((state) => state?.product?.specialProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    getSpecialProducts();
  }, []);
  const getSpecialProducts = () => {
    dispatch(getAllSpecialProducts());
  };

  return (
    <>
      <Meta title={"Special Products"} />
      <BreadCrumb title="Special Products" />
      <Container className="special-products-wrapper home-wrapper-2 py-5">
        <div className="row">
          {specialProductsState &&
            specialProductsState?.map((product, index) => {
              return (
                <div className="col-4 mb-3" key={index}>
                  <div className="special-product-card">
                    <Link to={`/product/${product?._id}`} target="_blank" className="d-block">
                      <img src={product?.images[0]?.url} className="img-fluid w-100" alt={product?.name} />
                      <h3 className="title">{product?.name}</h3>
                      <p className="description">{product?.description}</p>
                      <p className="price">${product?.price}</p>
                      <p className="date">Available from: {moment(product?.availableFrom).format("MMMM Do YYYY")}</p>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default SpecialProducts;
