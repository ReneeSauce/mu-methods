const FMolecule = ({ className, width = "16", height = "16" }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.56215 4.25V11.5H6.58215V8.21H10.0621V7.33H6.58215V5.13H10.2721V4.25H5.56215Z"
        fill="#F6F6F6"
        fillOpacity="0.7"
      />
      <circle cx="8" cy="8" r="7.5" stroke="#F6F6F6" strokeOpacity="0.7" />
    </svg>
  );
};
export default FMolecule;
