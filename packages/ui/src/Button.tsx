import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd";
import clsx from "clsx";
// import "./Button.module.scss";
import styles from "./Button.module.scss";

type VSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends Omit<AntdButtonProps, "size"> {
  vSize?: VSize;
}

const antdSizeMap: Partial<Record<VSize, "small" | "middle" | "large">> = {
  sm: "small",
  md: "middle",
  lg: "large",
};

export const Button = ({ vSize = "md", className, ...props }: ButtonProps) => {
  const antdSize = antdSizeMap[vSize];
  const isCustomSize = vSize === "xs" || vSize === "xl";

  return (
    <AntdButton
      size={antdSize}
      className={clsx(
        "custom-button",
        isCustomSize && `${styles[`vsize-${vSize}`]}`,
        className
      )}
      {...props}
    />
  );
};
