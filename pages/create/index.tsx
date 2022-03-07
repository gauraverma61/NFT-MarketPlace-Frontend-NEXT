import React from "react";
import { useRouter } from "next/router";

const Create: React.FC = () => {
    const router = useRouter();

    const pushToSingleHandler = ()=>{
        router.push("/create/single")
    }
    const pushToMultipleHandler = ()=>{
        router.push("/create/multiple")
    }
  return (
    <div className="create">
      <div className="create_container container p-2 p-md-4 p-lg-5">
        <h2 className="create_heading">Choose Type</h2>
        <p className="create_subheading">
          Choose “Single” for one of a kind or “Multiple” if you want to sell
          one collectible multiple times
        </p>
        <div className="row my-5">
          <div className="col-12 col-md-6 p-3 p-md-2 ">
            <div onClick={pushToSingleHandler} className="inside_container d-flex align-items-center flex-column justify-content-center p-5">
              <img
                className="image"
                src="https://rarible.com/76cc69b5fe227546330c.png"
                alt=""
              />
              <h3 className="select_text py-3">Single</h3>
              <p className="select_subtext">
                If you want to highlight the uniqueness and individuality of
                your item
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 p-3 p-md-2 ">
            <div onClick={pushToMultipleHandler} className="inside_container d-flex align-items-center flex-column justify-content-center p-5">
              <img
                className="image"
                src="https://rarible.com/610e4a1f9d1023afaf33.png"
                alt=""
              />
              <h3 className="select_text py-3">Multiple</h3>
              <p className="select_subtext">
                If you want to share your item with a large number of community
                members
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
