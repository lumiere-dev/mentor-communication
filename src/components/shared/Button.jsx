const Button = ({ text, ...rest }) => {
  return (
    <button
      {...rest}
      className="bg-primary text-white w-full px-5 h-[45px] text-center text-sm font-semibold rounded-lg cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;
