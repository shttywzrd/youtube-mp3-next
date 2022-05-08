import styles from "./RangeInput.module.scss";
import clsx from "clsx";
import React from "react";

interface RangeProps {
  className: string;
  value: number;
  step: number;
  min: number;
  max: number;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const RangeInput = (props: RangeProps) => {
  return (
    <input
      type="range"
      value={props.value}
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={props.onChange}
      className={clsx(
        styles.range,
        props.className,
        "h-5 cursor-pointer appearance-none rounded bg-transparent"
      )}
    />
  );
};

export default RangeInput;
