import MainIcon from "@atoms/MainIcon";
import Link from "next/link";
import React from "react";

const linksData = [
  {
    title: "MarketPlace",
    data: [
      "All NFTs",
      "Art",
      "Collectibles",
      "Domain Names",
      "Music",
      "Photography",
      "Sports",
      "Trading Cards",
      "Utility",
      "Virtual Worlds",
    ],
  },
  {
    title: "My Account",
    data: ["Profile", "favorites", "Watchlist", "My Collections", "Settings"],
  },
  {
    title: "Resources",
    data: [
      "Help Center",
      "Platform Status",
      "Partners",
      "Gas Fee Marketplaces",
      "Taxes",
      "Blog",
      "Docs",
      "Newsletter",
    ],
  },
  { title: "Company", data: ["About", "Careers", "Ventures", "Grants"] },
];

const Linkbox = (props: any) => {
  const { title, data } = props;
  return (
    <div className="link_box col-6 col-md-3 mb-2">
      <h5>{title}</h5>
      {data.map((link: any, index: any) => {
        return (
          // <Link href="">
          <p className="link" key={index}>
            {link}
          </p>
        );
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer w-100">
      <div className="container">
        <div className="community_section w-100">
          <div className="row">
            <div className="signup_section col-12 col-lg-6">
              <h4>Stay in the loop</h4>
              <p>
                Join our mailing list to stay in the loop with our newest
                feature releases, NFT drops, and tips and tricks for navigating
                OpenSea.
              </p>
              <div className="sign_form">
                <div className="input_container">
                  <input type="text" placeholder="Your email address" />
                </div>
                <button>Sign up</button>
              </div>
            </div>
            <div className="social_section col-12 col-lg-6">
              <h4>Join the community</h4>
              <div className="social_container">
                <div className="social_icon">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-discord"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-steam"></i>
                </div>
                <div className="social_icon">
                  <i className="fab fa-youtube"></i>
                </div>
                <div className="social_icon">
                  <i className="far fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links_section">
          <div className="row">
            <div className="left_section d-flex align-items-left col-12 col-lg-3">
              <MainIcon />
              <h4>Sasible</h4>
              <p>
                The world’s first and largest digital marketplace for crypto
                collectibles and non-fungible tokens (NFTs). Buy, sell, and
                discover exclusive digital items.
              </p>
            </div>
            <div className="right_section col-12 col-lg-9">
              <div className="row">
                {linksData.map((linkdata, index) => {
                  return (
                    <Linkbox
                      key={index}
                      title={linkdata.title}
                      data={linkdata.data}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer d-flex aling-items-center justify-content-between">
          <div className="left">© 2018 - 2022 Ozone Networks, Inc</div>
          <div className="right">
            <ul className="d-flex align-items-center">
              <div>Privacy Policy</div>
              <div className="ms-3">Terms of Service</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
