import { TIcon } from "@/types";

const WatchIcon = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  style,
}: TIcon) => {
  const styles = {
    flexShrink: 0,
    transition: "transform 0.3s ease",
  };

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
      style={Object.assign(styles, style)}
    >
      <path d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};

export default WatchIcon;
