const BASE = import.meta.env.VITE_API_URL;

async function get(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const getServices = () => get("/services/");
export const getGallery = () => get("/gallery/");
export const getBeforeAfter = () => get("/before-after/");
export const getTestimonials = () => get("/testimonials/");
export const getFaqs = () => get("/faq/");
export const getSiteSettings = () => get("/site-settings/");

export async function submitInquiry(formData) {
  // Do not set Content-Type: the browser adds the multipart boundary
  const res = await fetch(`${BASE}/contact/`, {
    method: "POST",
    body: formData,
  });

  if (res.status === 429) {
    throw new Error(
      "Too many requests. Please call or WhatsApp us instead."
    );
  }

  if (res.status === 400) {
    const errors = await res.json();
    const first = Object.values(errors).flat()[0];
    throw new Error(first || "Please check the form and try again.");
  }

  if (!res.ok) throw new Error("Something went wrong. Please try again.");
  return res.json();
}