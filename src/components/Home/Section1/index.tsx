import Button from "@atoms/Button";
import React from "react";
import Image from "next/image";

const dummyCardData = {
  image:
    "https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?fit=bounds&format=png&width=960",
  name: "Bored Ape",
  owner: "Mad_Mat",
  owner_image:
    "https://sportshub.cbsistatic.com/i/2021/08/09/6e3315ce-cb47-42da-9b0a-41ef335f000e/dragon-ball-super-new-super-hero-movie-goku-toei-animation-1276890.jpg",
};

interface IpropsBigNftCard {
  image: string;
  name: string;
  owner: string;
  owner_image: string;
}

const BigNftCard: React.FC<IpropsBigNftCard> = (props: IpropsBigNftCard) => {
  const { image, name, owner, owner_image } = props;
  return (
    <div className="bignft_card">
      <div className="image_container">
        <img className="nft_image" src={image} alt="" />
      </div>
      <div className="profile_section d-flex align-items-center p-3">
        <img className="owner_image" src={owner_image} alt="" />
        <div className="d-flex flex-column align-items-center">
          <div className="nft_name">{name}</div>
          <div className="owner_name">{owner}</div>
        </div>
      </div>
    </div>
  );
};

const Section1: React.FC = () => {
  return (
    <>
      <div className="background_container">
        <div
          style={{
            backgroundImage: `url(${dummyCardData.image})`,
          }}
          className="blur_background"
        ></div>
      </div>
      <div className="section1 container-xxl px-5">
        <div className="row">
          <div className="col-12 col-md-7 left_intro">
            <h1 className="section1_heading">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="subheading">
              Sasible is the world's first and largest NFT marketplace
            </p>
            <div className="button_section d-flex align-items-center mt-5">
              <Button text="Explore" variant="big_blackborder" />
              <Button text="Create" variant="big_blackborder" />
            </div>
          </div>
          <div className=" right_intro col-12 col-md-5 p-5">
            <BigNftCard {...dummyCardData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
