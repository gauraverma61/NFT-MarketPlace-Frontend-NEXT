import React, {useState} from "react";
import { useSelector } from "react-redux";
import { selectUserAddress } from "@redux/slices/user/selector";
import { walletNameTrimmer } from "src/Helpers/walletNameTrimmer";
import { Dropdown } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const Account = () => {
  const account = useSelector(selectUserAddress);
  const [key, setKey] = useState("trending");
  return (
    <div className="account">
      <div className="intro">
        <div className="profile_banner w-100">
          <label className="banner_label w-100 h-100">
            <input type="file" accept="images/*" />
          </label>
        </div>
        <div className="button_section d-flex align-items-center justify-content-end p-3">
          <div className="button_container">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <i className="fas fa-share-alt"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="detail_section">
          <div className="profileimage_container">
            <label
              style={{
                backgroundImage:
                  "url(https://storage.googleapis.com/opensea-static/opensea-profile/20.png)",
              }}
              className="profileimage_label h-100 w-100 d-flex align-items-center justify-content-center "
            >
              <input type="file" accept="images/*" />
              <div className="backdrop"></div>
              <i className="far fa-edit"></i>
            </label>
          </div>
          <h2 className="user_name">Josheph</h2>
          <div className="address d-flex align-items-center">
            <img
              className="coin_icon"
              src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
              alt=""
            />
            <div className="wallet_number"> {walletNameTrimmer(account)} </div>
          </div>
          <p className="joined_date">Joined December 2021</p>
        </div>
      </div>
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
  );
};

export default Account;
