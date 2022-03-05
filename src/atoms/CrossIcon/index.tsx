import React from "react";

interface IProps {
  clickHandler?: any;
}

const CrossIcon = (props: IProps) => {
  const { clickHandler } = props;
  return (
    <div
      onClick={clickHandler}
      className="cross_icon d-flex align-items-center justify-content-center"
    >
      <i className="fas fa-times"></i>
    </div>
  );
};

export default CrossIcon;
