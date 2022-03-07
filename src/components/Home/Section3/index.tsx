import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const dummyCollectionData = [
  {
    index: 1,
    profile_image:
      "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100",
    floor_price: 5.56,
    name: "Invisible Friends",
    net_worth: 1723.23,
    percentage: 83,
  },
  {
    index: 2,
    profile_image:
      "https://lh3.googleusercontent.com/x6hvOIWMQoPlIGwDAhpZCm4NesFGCwtrF6tv7UNu6vDasx6WxqW80WZ7w_vvMd6rVil6orhfeBmCk9GDGVUCYfP78gzFDb30usxWOA=s100",
    floor_price: 22,
    name: "HOWLErZ",
    net_worth: 2500 ,
    percentage: 60,
  },
  {
    index: 3,
    profile_image:
      "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s100",
    floor_price: 66 ,
    name: "Bored Yatch ape",
    net_worth: 6000 ,
    percentage: 98 ,
  },
  {
    index: 4,
    profile_image:
      "https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s100",
    floor_price: 35 ,
    name: "Snoop Dogg",
    net_worth: 660,
    percentage: 76,
  },
  {
    index: 5,
    profile_image:
      "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100",
    floor_price: 5.56,
    name: "Invisible Friends",
    net_worth: 1723.23,
    percentage: 83,
  },
  {
    index: 6,
    profile_image:
      "https://lh3.googleusercontent.com/x6hvOIWMQoPlIGwDAhpZCm4NesFGCwtrF6tv7UNu6vDasx6WxqW80WZ7w_vvMd6rVil6orhfeBmCk9GDGVUCYfP78gzFDb30usxWOA=s100",
    floor_price: 22,
    name: "HOWLErZ",
    net_worth: 2500 ,
    percentage: 60,
  },
  {
    index: 7,
    profile_image:
      "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s100",
    floor_price: 66 ,
    name: "Bored Yatch ape",
    net_worth: 6000 ,
    percentage: 98 ,
  },
  {
    index: 8,
    profile_image:
      "https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s100",
    floor_price: 35 ,
    name: "Snoop Dogg",
    net_worth: 660,
    percentage: 76,
  },
  {
    index: 9,
    profile_image:
      "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100",
    floor_price: 5.56,
    name: "Invisible Friends",
    net_worth: 1723.23,
    percentage: 83,
  },
  {
    index: 10,
    profile_image:
      "https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s100",
    floor_price: 35 ,
    name: "Snoop Dogg",
    net_worth: 660,
    percentage: 76,
  },
  {
    index: 11,
    profile_image:
      "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100",
    floor_price: 5.56,
    name: "Invisible Friends",
    net_worth: 1723.23,
    percentage: 83,
  },
  {
    index: 12,
    profile_image:
      "https://lh3.googleusercontent.com/x6hvOIWMQoPlIGwDAhpZCm4NesFGCwtrF6tv7UNu6vDasx6WxqW80WZ7w_vvMd6rVil6orhfeBmCk9GDGVUCYfP78gzFDb30usxWOA=s100",
    floor_price: 22,
    name: "HOWLErZ",
    net_worth: 2500 ,
    percentage: 60,
  },
  {
    index: 13,
    profile_image:
      "https://lh3.googleusercontent.com/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI=s100",
    floor_price: 66 ,
    name: "Bored Yatch ape",
    net_worth: 6000 ,
    percentage: 98 ,
  },
  {
    index: 14,
    profile_image:
      "https://lh3.googleusercontent.com/ufumJQN9NwT0U5jh_suJP5cLRIjyE38hirVdBChQLe-ghnt1RomIARfxSNmR6fdMQC0OIgjVQHhhduUfcxiRVrfHpihrXSW-SU5J=s100",
    floor_price: 35 ,
    name: "Snoop Dogg",
    net_worth: 660,
    percentage: 76,
  },
  {
    index: 15,
    profile_image:
      "https://lh3.googleusercontent.com/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9=s100",
    floor_price: 5.56,
    name: "Invisible Friends",
    net_worth: 1723.23,
    percentage: 83,
  },
];

interface IpropsCollectionCards {
  index: number;
  name: string;
  floor_price: number;
  profile_image: string;
  net_worth: number;
  percentage: number;
}

const Collectioncard = (props: IpropsCollectionCards) => {
  const { index, name, floor_price, profile_image, net_worth, percentage } =
    props;
  return (
    <div className="collection_card col-12 col-md-6 col-lg-4 px-2">
      <div className="slip w-100 d-flex align-items-center justify-content-between">
        <div className="index">{index}</div>
        <div className="image_container">
          <img className="profile_image" src={profile_image} alt="" />
        </div>
        <div className="intro d-flex align-items-start flex-column flex-grow-1">
          <div className="name">{name}</div>
          <div className="floor_price d-flex align-items-center">Floor Price: {floor_price}
          <img
              className="coin_image"
              src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
              alt=""
            />
          </div>
        </div>
        <div className="number_info d-flex align-items-end flex-column">
          <div className="percentage">{percentage}%</div>
          <div className="networth d-flex align-items-center">
            <img
              className="coin_image"
              src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
              alt=""
            />
            <div className="worth">{net_worth}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Section3: React.FC = () => {
  const [dayLimit, setDayLimit] = useState("Last 7 days");
  return (
    <div className="container-xxl section3 my-4 px-2 px-md-4 px-lg-5">
      <div className="heading d-flex align-items-center justify-content-center my-4">
        <div className="section3_title d-flex align-items-center">
          <div className="heading_text ms">Top Collections Over</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {dayLimit}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => setDayLimit("Last 24 hours")}
                href="#/action-1"
              >
                Last 24 hours
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setDayLimit("Last 7 days")}
                href="#/action-2"
              >
                Last 7 days
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => setDayLimit("Last 30 days")}
                href="#/action-3"
              >
                Last 30 days
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="row">
        {dummyCollectionData.map((collection, index)=>{
            return <Collectioncard key={index} {...collection}/>
        })}
      </div>
    </div>
  );
};

export default Section3;
