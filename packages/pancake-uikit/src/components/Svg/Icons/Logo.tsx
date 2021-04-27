import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 30 30" {...props}>
      <path
        d="M2 8a6 6 0 006 6h14a8 8 0 11-8 8v-3a1 1 0 112 0v3a6 6 0 106-6H8a8 8 0 118-8v3a1 1 0 11-2 0V8A6 6 0 002 8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM8 25a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        fill="#FD9316"
      />
      <path
        d="M7.47 4.47a.748.748 0 01.23-.158l.013-.005a.748.748 0 01.285-.057h.004c.191 0 .382.074.528.22l2.5 2.5a.75.75 0 11-1.06 1.06L8.75 6.81v3.69a.75.75 0 01-1.5 0V6.81L6.03 8.03a.75.75 0 01-1.06-1.06l2.5-2.5zM22.53 18.47a.748.748 0 00-.23-.158l-.013-.005a.748.748 0 00-.285-.057h-.004a.748.748 0 00-.528.22l-2.5 2.5a.75.75 0 101.06 1.06l1.22-1.22v3.69a.75.75 0 001.5 0v-3.69l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5z"
        fill="#4CAF50"
      />
    </Svg>
  );
};

export default Icon;
