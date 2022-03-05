import React from "react";

interface IProps {
  clickHandler: any;
}

const SearchIcon = (props: IProps) => {
  const { clickHandler } = props;
  return (
    <div
      onClick={clickHandler}
      className="search_icon d-flex align-items-center justify-content-center mx-1"
    >
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchIcon;
