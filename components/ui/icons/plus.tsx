import { TIcon } from "@/types";

const PlusIcon = ({ width, height, fill, stroke, strokeWidth }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "100%"}
      height={height || "100%"}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      stroke={fill ? fill : stroke || "currentColor"}
      strokeWidth={strokeWidth || "1.2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
};

export default PlusIcon;
