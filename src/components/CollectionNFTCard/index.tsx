import React from "react";

interface IpropsCollectionNFTCard {
  nft: string;
  collection_name: string;
  owner: string;
  collection_icon: string;
  description: string;
}

const CollectionNFTCard: React.FC<IpropsCollectionNFTCard> = (
  props: IpropsCollectionNFTCard
) => {
  const { nft, collection_name, owner, collection_icon, description } = props;

  return (
    <div className="collection_nftcard col-12 col-md-6 col-lg-4 p-4">
      <div className="card w-100 h-100">
        <div className="image_container w-100">
          <img className="nft h-100 w-100" src={nft} alt="" />
          <div className="icon_wrapper">
            <img
              className="icon_image w-100 h-100"
              src={collection_icon}
              alt=""
            />{" "}
          </div>
        </div>
        <div className="detail_container d-flex flex-column justify-content-center align-items-center mt-5 mb-3">
          <div className="collection_name">{collection_name}</div>
          <div className="owner">
            by <span> {owner} </span>
          </div>
          <p className="description mt-4 ">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionNFTCard;
