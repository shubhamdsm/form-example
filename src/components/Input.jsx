const Input = ({ type, placeholder, value, handler, required }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handler}
      required={required}
    />
  );
};
export default Input;
