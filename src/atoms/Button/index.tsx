import React from "react";

interface IProps {
  text: string;
  variant: string;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { text, variant } = props;
  return <button className={`button ${variant}`}>{text}</button>;
};

export default Button;
