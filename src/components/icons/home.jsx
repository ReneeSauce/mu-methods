const Home = ({ className, width = "16", height = "16", active }) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6786 0.26548C11.2954 -0.0884931 10.7046 -0.0884933 10.3214 0.26548L0.321413 9.50398C0.116517 9.69327 0 9.95955 0 10.2385V20.9957C0 21.548 0.447715 21.9957 1 21.9957H7C7.55228 21.9957 8 21.548 8 20.9957V14.8659C8 14.3136 8.44772 13.8659 9 13.8659H13C13.5523 13.8659 14 14.3136 14 14.8659V20.9957C14 21.548 14.4477 21.9957 15 21.9957H21C21.5523 21.9957 22 21.548 22 20.9957V10.2385C22 9.95955 21.8835 9.69327 21.6786 9.50398L11.6786 0.26548Z"
        fill="#F6F6F6"
        fillOpacity={active ? "1" : "0.7"}
      />
    </svg>
  );
};

export default Home;
