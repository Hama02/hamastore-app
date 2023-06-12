import Card from "../Card/Card";
import React from "react";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch("/products?populate=*");
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
          explicabo omnis id modi veniam tempora, dolorem repellat impedit
          provident ex, numquam sint minus rerum. Odio fugit sint aliquid,
          dolore aliquam impedit voluptate exercitationem sunt voluptatum quas,
          magni at consectetur expedita?
        </p>
      </div>

      <div className="bottom">
        {error
          ? "Something went wrong!!"
          : loading
          ? "Loading"
          : data?.slice(0, 4).map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
