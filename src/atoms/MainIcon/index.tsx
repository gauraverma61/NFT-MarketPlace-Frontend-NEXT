import React from "react";

interface IProps{
  size?: string;
}

const MainIcon:React.FC<IProps> = (props) => {
  const { size } = props;
  return <div className={size ? size : 'main_icon'}>S</div>;
};

export default MainIcon;
