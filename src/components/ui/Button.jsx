const Button = ({ children, className = "", variant, type = "button", ...props }) => (
  <button
    type={type}
    className={`px-4 py-2 rounded-xl border transition hover:opacity-90 ${
      variant === "outline" ? "bg-white" : "bg-gray-900 text-white"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
