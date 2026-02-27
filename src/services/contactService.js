/**
 * services/contactService.js
 * All API calls related to the contact form and consultation bookings.
 * Replace BASE_URL with your actual backend endpoint.
 */

const BASE_URL = process.env.REACT_APP_API_URL || "https://api.sharmainterior.com";

export const submitContactForm = async (formData) => {
  const response = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error("Failed to submit form");
  return response.json();
};

export const submitReferral = async (referralData) => {
  const response = await fetch(`${BASE_URL}/refer`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(referralData),
  });
  if (!response.ok) throw new Error("Failed to submit referral");
  return response.json();
};

export const submitJobApplication = async (applicationData) => {
  const response = await fetch(`${BASE_URL}/careers/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(applicationData),
  });
  if (!response.ok) throw new Error("Failed to submit application");
  return response.json();
};
