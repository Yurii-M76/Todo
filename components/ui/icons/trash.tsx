import { TIcon } from "@/types";

const TrashIcon = ({ width, height, fill, stroke, strokeWidth }: TIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      stroke={fill ? fill : stroke || "currentColor"}
      strokeWidth={strokeWidth || "1.2"}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
      <path d="M3 6h18" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
};

export default TrashIcon;
