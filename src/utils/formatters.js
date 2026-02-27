/** Format a number as Indian currency */
export const formatINR = (amount) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(amount);

/** Truncate text with ellipsis */
export const truncate = (str, maxLength = 100) =>
  str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

/** Generate initials from a full name */
export const getInitials = (name) =>
  name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
