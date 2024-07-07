import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-12" style={{ borderTop: "1px solid #0000002B" }}>
      <div className="container mx-auto px-24">
        <div
          className="footer_top flex mb-[35px]"
          style={{ borderBottom: "1px solid #0000002B" }}>
          <div className="footer1 mr-[136px]">
            <h3 className="text-2xl font-bold mb-12">Funiro.</h3>
            <p className="w-[285px] text-[#9f9f9f]">
              400 University Drive Suite 200 Coral Gables,
            </p>
            <p className="p">FL 33134 USA</p>
          </div>
          <div className="footer2 flex flex-col mr-[144px]">
            <p className="p">Links</p>
            <Link className="L">Home</Link>
            <Link className="L">Shop</Link>
            <Link className="L">About</Link>
            <Link className="L">Contact</Link>
          </div>
          <div className="footer3 flex flex-col mr-[72px]">
            <p className="p">Help</p>
            <Link className="L">Payment Options</Link>
            <Link className="L">Returns</Link>
            <Link className="L">Privacy Policies</Link>
          </div>
          <div className="footer4">
            <p className="p">Newsletter</p>
            <div className="flex justify-between w-[286px]">
              <input
                type="email"
                className="input w-[200px] text-[14px] border-none outline-none"
                placeholder="Enter Your Email Address"
              />
              <h4 className="font-bold cursor-pointer">SUBSCRIBE</h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
