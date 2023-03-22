import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, earum maxime nam reiciendis expedita tenetur
            voluptatibus eveniet veritatis error ipsa tempore nesciunt corrupti
            quidem esse illum eaque illo nisi saepe.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            quaerat maiores dolorem magnam rem sint repellat asperiores commodi
            illum explicabo alias cum voluptate enim velit ex excepturi nihil,
            earum ipsam?
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Hamastore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
