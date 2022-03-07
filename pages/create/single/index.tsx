import CustomSwitch from "@atoms/CustomSwitch";
import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Button } from "react-bootstrap";
import useWidth from "src/hooks/useWidth";

const TabSlide = (props: any) => {
  const { title, image } = props;
  return (
    <div className="tab_slide d-flex flex-column justify-content-center align-items-center">
      <img src={image} alt="" />
      <span>{title}</span>
    </div>
  );
};

const singleCreate = () => {
  const [toPutOnMarketplace, setToPutOnMarketplace] = useState(false);
  const [isOpenUnlockContent, setIsOpenUnlockContent] = useState(false);
  const [isFreeMinting, setIsFreeMinting] = useState(false);
  const [price, setPrice] = useState<any>(0);

  const width = useWidth();

  return (
    <div className="wrapper">
      <div className="single container p-3 p-md-4">
        <h1 className="single_heading">Create Single Item on Ethereum</h1>
        <div className="row">
          <div className="col-12 col-md-7 p-3 p-md-4">
            <div className="upload_label mb-3">Upload File</div>
            <div className="inputfile_container d-flex flex-column justify-content-center align-items-center">
              <div className="format_text">
                PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
              </div>
              <label className="fileinput_label d-flex align-items-center justify-content-center ">
                <input type="file" />
                <span>Choose File</span>
              </label>
            </div>
            <div className="puton_marketplace d-flex align-items-center justify-content-between my-5 ">
              <div className="text_container d-flex flex-column align-items-start">
                <span className="puton_marketplace_heading">
                  Put on Marketplace
                </span>
                <span className="puton_marketplace_subheading">
                  Set a period of time for which buyers can place bids
                </span>
              </div>
              <CustomSwitch
                changeHandler={() => setToPutOnMarketplace(!toPutOnMarketplace)}
                ischecked={toPutOnMarketplace}
              />
            </div>
            <Tabs
              defaultActiveKey="fixed_price"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab
                eventKey="fixed_price"
                title={
                  <TabSlide
                    title="Fixed Price"
                    image="https://rarible.com/a70775ecfb4b9fdd65df.svg"
                  />
                }
              >
                <>
                  <h3 className="price_text">Price</h3>
                  <div className="priceinput_container d-flex align-items-center my-3">
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="number"
                      placeholder="Enter price for one piece"
                    />
                  </div>
                  <p className="rate_text">
                    Service Fee <span>2.5</span>
                  </p>
                  <p className="rate_text">
                    You will receive <span>{price-(price*2.5)/100} ETH</span>
                  </p>
                </>
              </Tab>
              <Tab
                eventKey="opens_for_bids"
                title={
                  <TabSlide
                    title="Opens for bids"
                    image="https://rarible.com/c2591088c540f586c38f.svg"
                  />
                }
              ></Tab>
              <Tab
                eventKey="timed_auction"
                title={
                  <TabSlide
                    title="Timed Auction"
                    image="https://rarible.com/1ceeb76a2562d908004f.svg"
                  />
                }
              >
                <h3 className="price_text">Minimum Bid</h3>
                <div className="priceinput_container d-flex align-items-center my-3">
                  <input type="text" placeholder="Enter minimum bid" />
                </div>
                <p className="rate_text">
                  Bids below this amount won't be allowed.
                </p>
              </Tab>
            </Tabs>
            <div className="puton_marketplace d-flex align-items-center justify-content-between my-4 ">
              <div className="text_container d-flex flex-column align-items-start">
                <span className="puton_marketplace_heading">
                  Unlock once Purchased
                </span>
                <span className="puton_marketplace_subheading">
                  Content will be unlocked after sucessfull transaction
                </span>
              </div>
              <CustomSwitch
                changeHandler={() =>
                  setIsOpenUnlockContent(!isOpenUnlockContent)
                }
                ischecked={isOpenUnlockContent}
              />
            </div>
            {isOpenUnlockContent && (
              <div className="unlockable_content">
                <div className="priceinput_container d-flex align-items-center my-3">
                  <input
                    type="text"
                    placeholder="Digital key, code to redeem or link to a file"
                  />
                </div>
                <p className="rate_text">Markdown is supported</p>
              </div>
            )}
            <div className="puton_marketplace d-flex align-items-center justify-content-between my-4 ">
              <div className="text_container d-flex flex-column align-items-start">
                <span className="puton_marketplace_heading">
                  Free minting
                </span>
                <span className="puton_marketplace_subheading">
                  Buyer will pay gas fees for minting
                </span>
              </div>
              <CustomSwitch
                changeHandler={() =>
                  setIsFreeMinting(!isFreeMinting)
                }
                ischecked={isFreeMinting}
              />
            </div>
          </div>
          { width > 768 && <div className="col-12 col-md-5 p-3 p-md-4">
          <div className="upload_label mb-3">Preview</div>
          <div className="preview_section d-flex align-items-center justify-content-center p-4">
            <div className="preview_text">Upload File to preview your brand new nft</div>
            </div> 
          </div>}
        </div>
      </div>
    </div>
  );
};

export default singleCreate;
