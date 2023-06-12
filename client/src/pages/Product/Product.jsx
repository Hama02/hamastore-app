import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const images = [
    `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img?.data?.attributes?.url}`,
    `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2?.data?.attributes?.url}`,
  ];

  return (
    <div className="product">
      {error ? (
        "Something Wrong !!"
      ) : loading ? (
        "Loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
            <div className="mainImg">
              <img src={images[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data?.id,
                    title: data?.attributes.title,
                    img: data?.attributes.img.data.attributes.url,
                    price: data?.attributes.price,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
