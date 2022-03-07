import React from "react";
import Switch from "react-switch";

const CustomSwitch = (props: any) => {
  const { changeHandler, ischecked } = props;
  return (
    <Switch
      activeBoxShadow={"0 0 0px 0px #3bf"}
      onColor={"#ffffff"}
      onHandleColor={"#202022"}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={changeHandler}
      checked={ischecked}
    />
  );
};

export default CustomSwitch;
