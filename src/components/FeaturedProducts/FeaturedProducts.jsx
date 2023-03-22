import Card from "../Card/Card";
import React from "react";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-Shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 3,
      img: "https://www.exist.com.tn/img/gauche.jpg",
      img2: "https://www.exist.com.tn/img/droite.jpg",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      newPrice: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: false,
      oldPrice: 19,
      newPrice: 12,
    },
  ];

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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
