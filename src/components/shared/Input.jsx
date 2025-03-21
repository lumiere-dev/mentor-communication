const Input = ({ label, type = "text", ...rest }) => {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        {...rest}
        type={type}
        className="w-full outline-none border border-gray-300 rounded-lg px-4 h-[45px] text-sm text-gray-800 mt-1"
      />
    </div>
  );
};

export default Input;
