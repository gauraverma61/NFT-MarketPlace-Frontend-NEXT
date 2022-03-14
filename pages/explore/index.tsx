import React, { useState } from "react";
import CollectionNFTCard from "@components/CollectionNFTCard";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const dummydata = [
  {
    nft: "https://lh3.googleusercontent.com/CokKEUCsWv-jOVSg3chn-NucrrAVkDgwd9hjJR13ncKaWFKjHJ6Qmnpzi3_Xt9yE6r046Vp9xS5fLyHOzbMaLsHnblAUw8DuApjBGg=h200",
    collection_name: "Voyagers: Unknown Genesis",
    owner: "B90327",
    collection_icon:
      "https://lh3.googleusercontent.com/5C3O6Mm2cjVhG2qK6stlEeXTOjbq7LWdWfeioHDEZRMOpqL89U89U80Hu1u0vVG2qKTm9eraZd1vcv8akPKLypXas-ujcmDrvFO5sKo=s100",
    description:
      "A world without boundaries. The official OpenSea genesis collection for Voyagers: Unknown. ",
  },
  {
    nft: "https://lh3.googleusercontent.com/Lf4PsWhcJLjfuMw6tpSHj-UNgxTO0P50m5EiNqoc_OUqSaJBOiY_Mfu84tuicHUOLZQ0cMhDOmYkHvxw_GTlvAqQ15cn9AhVSXvZFw=h200",
    collection_name: "CryptoMories",
    owner: "CryptoMoriesContract",
    collection_icon:
      "https://lh3.googleusercontent.com/vb1frYDXLe4AHtDQORgr1O1EODOkq31xePpKvgsN3uE5wopK0M8rBYECcDbvTkOpx5Y-9x1TQIP61ae4wI9lq9qwe-wdSUsXywlw=s100",
    description: "memento mori means  remember you die in latin. It is an old saying used to remind people that ...",
  },
  {
    nft: "https://lh3.googleusercontent.com/kFZpw-bkoyH03qFbfqkwkkhHVxT7qclK_tYFmhU1K2HegU3v2wSMmhL6TIgw7Stx1KIoKs1sdJQ4My71ktXV7GygPBjaQZCACERt=h200",
    collection_name: "Lazy Lions",
    owner: "Lazy Lions",
    collection_icon:
      "https://lh3.googleusercontent.com/kFZpw-bkoyH03qFbfqkwkkhHVxT7qclK_tYFmhU1K2HegU3v2wSMmhL6TIgw7Stx1KIoKs1sdJQ4My71ktXV7GygPBjaQZCACERt=s100",
    description: "Lazy Lions is the NFT community for 👑s.",
  },
  {
    nft: "https://lh3.googleusercontent.com/wagZQjBQU0NZnTjlHHdBjDCgE0AvP1K4WGNYsCSTTj2Gib2N0LbE4uWC76w510bbyXFtqWTqj_1rlK_ZZ0KfZvGYuEBA5NivGuBnIw=h200",
    collection_name: "Karafuru",
    owner: "KarafuruDeployer",
    collection_icon:
      "https://lh3.googleusercontent.com/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec=s100",
    description:
      "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and ent...",
  },
  {
    nft: "https://lh3.googleusercontent.com/CokKEUCsWv-jOVSg3chn-NucrrAVkDgwd9hjJR13ncKaWFKjHJ6Qmnpzi3_Xt9yE6r046Vp9xS5fLyHOzbMaLsHnblAUw8DuApjBGg=h200",
    collection_name: "Voyagers: Unknown Genesis",
    owner: "B90327",
    collection_icon:
      "https://lh3.googleusercontent.com/5C3O6Mm2cjVhG2qK6stlEeXTOjbq7LWdWfeioHDEZRMOpqL89U89U80Hu1u0vVG2qKTm9eraZd1vcv8akPKLypXas-ujcmDrvFO5sKo=s100",
    description:
      "A world without boundaries. The official OpenSea genesis collection for Voyagers: Unknown. ",
  },
  {
    nft: "https://lh3.googleusercontent.com/zj2SSBpbV9IA3pZkB24KWkLJ3ylhgMIqS647ugIHEMcGYI8vTogEc4nM_Foh4tS1c4TLi4K3SmpyUojMsEL60Llt3H69khvQN7y68CA=h200",
    collection_name: "Dictator",
    owner: "Gaurav",
    collection_icon:
      "https://lh3.googleusercontent.com/Ra91XQZPJQK5fXugaYtSjDB9WNdNjWd0Cj7vYxHYChP7GyfHwiZfyNajjijyklJa9WlL46q5idwfjrwrXbVnMSBlvoVQIrzvukx2=s100",
    description: "how is doing",
  },
  {
    nft: "https://lh3.googleusercontent.com/kFZpw-bkoyH03qFbfqkwkkhHVxT7qclK_tYFmhU1K2HegU3v2wSMmhL6TIgw7Stx1KIoKs1sdJQ4My71ktXV7GygPBjaQZCACERt=h200",
    collection_name: "Lazy Lions",
    owner: "Lazy Lions",
    collection_icon:
      "https://lh3.googleusercontent.com/kFZpw-bkoyH03qFbfqkwkkhHVxT7qclK_tYFmhU1K2HegU3v2wSMmhL6TIgw7Stx1KIoKs1sdJQ4My71ktXV7GygPBjaQZCACERt=s100",
    description: "Lazy Lions is the NFT community for 👑s.",
  },
  {
    nft: "https://lh3.googleusercontent.com/wagZQjBQU0NZnTjlHHdBjDCgE0AvP1K4WGNYsCSTTj2Gib2N0LbE4uWC76w510bbyXFtqWTqj_1rlK_ZZ0KfZvGYuEBA5NivGuBnIw=h200",
    collection_name: "Karafuru",
    owner: "KarafuruDeployer",
    collection_icon:
      "https://lh3.googleusercontent.com/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec=s100",
    description:
      "Karafuru is home to 5,555 generative arts where colors reign supreme. Leave the drab reality and ent...",
  },
  {
    nft: "https://lh3.googleusercontent.com/CokKEUCsWv-jOVSg3chn-NucrrAVkDgwd9hjJR13ncKaWFKjHJ6Qmnpzi3_Xt9yE6r046Vp9xS5fLyHOzbMaLsHnblAUw8DuApjBGg=h200",
    collection_name: "Voyagers: Unknown Genesis",
    owner: "B90327",
    collection_icon:
      "https://lh3.googleusercontent.com/5C3O6Mm2cjVhG2qK6stlEeXTOjbq7LWdWfeioHDEZRMOpqL89U89U80Hu1u0vVG2qKTm9eraZd1vcv8akPKLypXas-ujcmDrvFO5sKo=s100",
    description:
      "A world without boundaries. The official OpenSea genesis collection for Voyagers: Unknown. ",
  },
];

const Explore = () => {
  const [key, setKey] = useState("trending");
  return (
    <div className="explore container-fluid">
      <h2 className="explore_heading my-5">Explore Collections</h2>

      <div className="explore_tabs">
        <Tabs
          id="controlled-tab-example"
          defaultActiveKey="trending"
          activeKey={key}
          onSelect={(k: any) => setKey(k)}
          className="mb-3 explore-tab"
        >
          <Tab tabClassName="tab" eventKey="trending" title="Trending"></Tab>
          <Tab tabClassName="tab" eventKey="top" title="Top"></Tab>
          <Tab tabClassName="tab" eventKey="art" title="Art"></Tab>
          <Tab
            tabClassName="tab"
            eventKey="collectibles"
            title="Collectibles"
          ></Tab>
          <Tab
            tabClassName="tab"
            eventKey="Domain_names"
            title="Domain Names"
          ></Tab>
          <Tab tabClassName="tab" eventKey="music" title="Music"></Tab>
          <Tab
            tabClassName="tab"
            eventKey="Photography"
            title="Photography"
          ></Tab>
          <Tab tabClassName="tab" eventKey="sports" title="Sports"></Tab>
          <Tab
            tabClassName="tab"
            eventKey="trading"
            title="Trading Cards"
          ></Tab>
          <Tab tabClassName="tab" eventKey="utility" title="Utility"></Tab>
          <Tab
            tabClassName="tab"
            eventKey="virtual_worlds"
            title="Virtual Worlds"
          ></Tab>
        </Tabs>
      </div>

      <div className="row">
        {dummydata.map((collection, index) => {
          return <CollectionNFTCard key={index} {...collection} />;
        })}
      </div>
    </div>
  );
};

export default Explore;
