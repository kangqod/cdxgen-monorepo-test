import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd";

export const Button = ({ ...props }: AntdButtonProps) => {
  return <AntdButton style={{ backgroundColor: "red" }} {...props} />;
};
