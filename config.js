/* Shared config for standalone HTML pages.
 * Edit API_BASE to point to your Lovable backend (no trailing slash).
 * When opened from the same domain as the backend, leave it as "" to use relative URLs.
 */
window.AI_CONFIG = {
  // Default: same-origin (works when files are served from your Lovable app).
  // Replace with full URL like "https://yourapp.lovable.app" when hosting elsewhere.
  API_BASE: "",
  CHAT_MODELS: [
    { id: "meta-llama/Llama-3.3-70B-Instruct", label: "Llama 3.3 70B" },
    { id: "Qwen/Qwen2.5-72B-Instruct", label: "Qwen 2.5 72B" },
    { id: "mistralai/Mistral-Nemo-Instruct-2407", label: "Mistral Nemo" },
  ],
};
