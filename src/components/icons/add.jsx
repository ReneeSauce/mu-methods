const Add = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="6"
        y="14"
        width="14"
        height="2"
        rx="1"
        transform="rotate(-90 6 14)"
        fill="#F6F6F6"
      />
      <rect y="6" width="14" height="2" rx="1" fill="#F6F6F6" />
    </svg>
  );
};
export default Add;
