/**
 * hooks/useContactForm.js
 * Custom hook to manage contact form state and submission.
 */

import { useState } from "react";
import { submitContactForm } from "../services/contactService";

const initialState = { name: "", email: "", phone: "", message: "" };

const useContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      await submitContactForm(form);
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  };

  return { form, status, error, handleChange, handleSubmit };
};

export default useContactForm;
