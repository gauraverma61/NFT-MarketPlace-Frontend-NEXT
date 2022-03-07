import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const dummyData = [
  {
    title: "Wait Wait by William Wegman",
    subtitle:
      "A genesis NFT series featuring William Wegman’s iconic Weimaraners",
    image: "https://storage.opensea.io/static/promocards/wegman-promocard.png",
  },
  {
    title: "1/1 Topps 1952 Mickey Mantle",
    subtitle:
      "First-of-its-kind auction for reimagined iconic Topps baseball card",
    image: "https://storage.opensea.io/static/promocards/topps-promocard2.jpg",
  },
  {
    title: "My Beautiful Little Nightmares",
    subtitle: "Hand-drawn abstract portraiture",
    image: "https://storage.opensea.io/static/promocards/vries-promocard.png",
  },
  {
    title: "TIMEPieces: Artists for Peace",
    subtitle:
      "1:1 auctions. 100% of proceeds support relief efforts in Ukraine",
    image:
      "https://storage.opensea.io/static/promocards/timepieces-promocard.JPG",
  },
];

interface IPropsLongCard {
  image: string;
  title: string;
  subtitle: string;
}

const LongCard: React.FC<IPropsLongCard> = (props: IPropsLongCard) => {
  const { image, title, subtitle } = props;
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="long_card">
      <div className="upper_box"></div>
      <div className="content_box">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

const Section2: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section2 container-xxl px-2 px-md-4 px-lg-5 py-5">
    <h2>Notable Drops</h2>
      <Slider {...settings}>
        {dummyData.map((nft, index)=>{
            return <div key={index} className="p-2">
                <LongCard {...nft} />
            </div>
        })}
      </Slider>
    </div>
  );
};

export default Section2;
