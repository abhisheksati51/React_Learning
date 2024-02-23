import ReactDOM, { render } from "react-dom/client";
import React from "react";

/**
 * Header
 * -- Logo
 * -- Navbar
 * Body
 * --search
 * --Resturant Container
 * ---Resturant card
 * Footer
 * --'copyrights
 * --links
 * --contact
 * --Address
 */


const resObj = [
  {
      "_id": {
          "$oid": "5eee651f739f8c674fd736ee"
      },
      "name": "Tofu Bao",
      "image": "https://photo2.foodgawker.com/wp-content/uploads/2020/12/3673283.jpg",
      "price": "250",
      "description": "crispy, fried tofu bites mixed in a spicy, topped Sausage",
      "starts":4.3,
      "deleveryTime":40,
  },
  {
      "_id": {
          "$oid": "5eee6671a27a66807cf2bea2"
      },
      "name": "Tacos De alambre",
      "image": "https://photo.foodgawker.com/wp-content/uploads/2020/10/3652339.jpg",
      "price": "300",
      "description": "chicken cooked with bacon, topped with Oaxaca cheese",
      "starts":4.0,
      "deleveryTime":36,
  },
  {
      "_id": {
          "$oid": "5eee6692a27a66807cf2bea3"
      },
      "name": "Tacos Al Pastor",
      "image": "https://photo2.foodgawker.com/wp-content/uploads/2020/11/3666680.jpg",
      "price": "200",
      "description": "warmth from spices and sweetness from pineapple",
      "starts":4.5,
      "deleveryTime":38,
  },
  {
      "_id": {
          "$oid": "5eee66a5a27a66807cf2bea4"
      },
      "name": "Chicken Bruschetta",
      "image": "https://photo.foodgawker.com/wp-content/uploads/2020/10/3655673.jpg",
      "price": "500",
      "description": "crunch, succulent juicy chicken and a glaze drizzle",
      "starts":3.0,
      "deleveryTime":30,
  },
  {
      "_id": {
          "$oid": "5eee66c4a27a66807cf2bea5"
      },
      "name": "Vegetarian Frito Pie",
      "image": "https://photo2.foodgawker.com/wp-content/uploads/2020/10/3650127.jpg",
      "price": "350",
      "description": "Kick off the week than with this Vegetarian Frito Pie",
      "starts":3.9,
      "deleveryTime":25,
  },
  {
      "_id": {
          "$oid": "5eee66cfa27a66807cf2bea6"
      },
      "name": "Kafta Kebabs",
      "image": "https://photo2.foodgawker.com/wp-content/uploads/2020/09/3647666.jpg",
      "price": "200",
      "description": "beautifully flavored with spices and fresh parsley",
      "starts":3.8,
      "deleveryTime":50,
  },
  {
      "_id": {
          "$oid": "5eee66eea27a66807cf2bea7"
      },
      "name": "Balik Ekmek",
      "image": "https://photo2.foodgawker.com/wp-content/uploads/2020/09/3642459.jpeg",
      "price": "600",
      "description": "BALIK EKMEK / ISTANBUL STREET FLAVOR, FISH SANDWICH",
      "starts":4.2,
      "deleveryTime":45,
  },
  {
      "_id": {
          "$oid": "5eee6717a27a66807cf2bea8"
      },
      "name": "Kielbasa Quesadillas",
      "image": "https://photo2.foodgawker.com/wp-content/uploads/2020/07/3625674.jpg",
      "price": "500",
      "description": "Sausage, peppers, and onions with a twist: Kielbasa Quesadillas",
      "starts":3.5,
      "deleveryTime":43,
  },
  {
      "_id": {
          "$oid": "5eee6717a27a66807cf2bea9"
      },
      "name": "Ground Tacos",
      "image": "https://photo.foodgawker.com/wp-content/uploads/2020/08/3631018.jpg",
      "price": "400",
      "description": "Sandwiches have eggs, bacon, cheese, avocado, spinach, and tomato",
      "starts":4.5,
      "deleveryTime":40,
  }
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const {restData} = props

  return (
    <div className="res-card">
      <img
        className="logo-card"
        alt="logo"
        src={restData.image}
      />
      <div>
        <h3>{restData.name}</h3>
        <h3>{restData.description}</h3>
        <h4>₹{restData.price}</h4>
        <h4>{restData.starts}</h4>
        <h4>{restData.deleveryTime} Minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
      {resObj.map((item) => (
          <ResturantCard key={item._id.$oid} restData={item} />
          ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
