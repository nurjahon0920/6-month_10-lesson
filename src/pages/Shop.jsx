import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  let links = data?.slice(0, 4).map((link) => (
    <div
      key={link.id}
      className="sec3_card bg-[#F4F5F7] w-[285px] h-[446px] text-left">
      <img src={link.img} alt="" className="" />
      <div className="" style={{ padding: "16px 20px 30px 16px" }}>
        <h4 className="text-2xl font-bold">Syltherine</h4>
        <p className="text-base text-[#898989] font-medium mt-2">
          Stylish cafe chair
        </p>
        <div className="flex justify-between items-center mt-2">
          <h5 className="text-2xl">Rp 2.500.000</h5>
          <p className="text-[#B0B0B0] font-medium text-base">Rp 3.500.000</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="container mx-auto p-5 text-center">
        <div className="shop_top w-full h-80">
          <h1 className="text-5xl font-bold text-[#000000]">Shop</h1>
          <div className="flex justify-center mt-3 text-base">
            <Link to="/" className="text-base font-medium">
              Home
            </Link>
            <p className="text-base font-semibold px-3">{">"}</p>
            <Link to="/shop" className="font-normal text-base">
              Shop
            </Link>
          </div>
        </div>
        <div className=" items-center">
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            {links}
          </div>
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            {links}
          </div>
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            {links}
          </div>
          <div className="flex flex-wrap gap-8 justify-center mb-10">
            {links}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
