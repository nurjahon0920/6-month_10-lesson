import { useEffect, useState } from "react";
import sec1_bg from "../assets/sec1/sec1_bg.png";
import sec2_img1 from "../assets/sec2/sec2_img1.png";
import sec2_img2 from "../assets/sec2/sec2_img2.png";
import sec2_img3 from "../assets/sec2/sec2_img3.png";
import sec4_img1 from "../assets/sec4/sec4_img1.png";
import sec4_img2 from "../assets/sec4/sec4_img2.png";
import sec5_img from "../assets/sec5/Images.png";

import axios from "axios";

const Home = () => {
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
  let links = data?.map((link) => (
    <div
      key={link.id}
      className=" relative sec3_card bg-[#F4F5F7] w-[285px] h-[446px] text-left">
      <div
        className="sec3_overlay absolute w-full h-full bg-[#1a1111aa]"
        style={{ display: "none" }}>
        <p className="Share">Share</p>
      </div>
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
    <div className="min-h-[800px] mx-auto">
      <section className="sec1 relative max-w-[1440px] w-full mx-auto">
        <div className="max-w-screen-[1440px]  mx-auto p-0 ">
          <img src={sec1_bg} className="max-w-[1440px] mx-auto p-0 " alt="" />
          <div
            className="sec1_content text-left right-[58px]"
            style={{
              backgroundColor: "#FFF3E3",
              padding: "62px 43px 37px 39px",
              width: "643px",
              height: "443px",
              borderRadius: "10px ",
              position: "absolute",
              bottom: "117px",
            }}>
            <h3 className="text-base">New Arrival</h3>
            <h1 className="font-bold leading-normal text-[#B88E2F] text-[52px]">
              Discover Our New Collection
            </h1>
            <p className="text-xl font-medium leading-normal ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              className="p-[25px,72px]"
              style={{
                backgroundColor: "#B88E2F",
                color: "#FFF",
                cursor: "pointer",
                fontSize: "16px",
                width: "222px",
                height: "74px",
                fontWeight: "700",
                border: "none",
                transition: "0.4s",
                marginTop: "46px",
                "&:hover": {
                  backgroundColor: "#a6792a",
                },
              }}>
              BUY NOW
            </button>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="max-w-[1440px] mx-auto px-32 mt-14">
          <h2 className="text-[32px] font-bold  text-[#333] text-center">
            Browse The Range
          </h2>
          <p className="text-[#666] text-[20px] mb-16 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <div className="card">
              <img src={sec2_img1} className="w-[381px] h-[480px] " alt="" />
              <p className="text-[24px] font-bold text-center text-[#333]">
                Dining
              </p>
            </div>
            <div className="card">
              <img src={sec2_img2} className="w-[381px] h-[480px] " alt="" />
              <p className="text-[24px] font-bold text-center text-[#333]">
                Living
              </p>
            </div>
            <div className="card">
              <img src={sec2_img3} className="w-[381px] h-[480px] " alt="" />
              <p className="text-[24px] font-bold text-center text-[#333]">
                Bedroom
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="max-w-[1440px] mx-auto px-24 text-center text-[40px] font-bold text-[#3a3a3a] pb-6 mt-14 ">
          <h3 className="mb-8">Our Products</h3>
          <div className="sec3_cards flex flex-wrap gap-8">{links}</div>
          <button
            className="border-solid border-2 py-3 px-20 text-base font-semibold my11
           border-[#B88E2F] text-[#B88E2F]">
            Show More
          </button>
        </div>
      </section>
      <section className="sec4 bg-[#FCF8F3]">
        <div className="max-w-[1440px] mx-auto px-24 py-11 flex flex-wrap items-center justify-between">
          <div className="sec4_text">
            <h2 className="text-[40px] font-bold text-[#3a3a3a] w-[422px] ">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="w-[358px] pb-[25px] text-[#616161] pt-[7px]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button
              className="border-none py-3 px-9 text-base font-semibold
            bg-[#B88E2F] text-[#fff]">
              Explore More
            </button>
          </div>
          <div className="sec4_images flex relative gap-6">
            <img src={sec4_img1} alt="" className="" />
            <img src={sec4_img2} alt="" className="h-[486px] pr-5" />
            <button
              className="w-12 h-12 bg-white font-semibold text-xl right-0 top-[47%] absolute text-[#B88E2F] rounded-[50%]"
              style={{ boxShadow: "0px 4px 14px 1px #00000029" }}>
              {">"}
            </button>
          </div>
        </div>
      </section>
      <section className="sec5">
        <div className="max-w-[1440px] mx-auto text-center mt-16 mb-12 pt-1">
          <h3 className="text-[#616161] text-xl font-semibold">
            Share your setup with
          </h3>
          <h2 className="text-[#3a3a3a] text-[40px] font-bold">
            #FuniroFurniture
          </h2>
          <img src={sec5_img} alt="FuniroFurniture" />
        </div>
      </section>
    </div>
  );
};

export default Home;
