import validator from "validator";
/** Handle form validation for the login form
 * @param username - user's auth username
 * @param password - user's auth password
 * @param setError - function that handles updating error state value
 */
export const validateLoginForm = (
  username: string,
  password: string,
  setError: (error: string | null) => void
): boolean => {
  // Check for undefined or empty input fields
  if (!username || !password) {
    setError("Please enter a valid username and password.");
    return false;
  }
  // Validate username
  if (!validator.isEmail(username)) {
    setError("Please enter a valid username.");
    return false;
  }
  return true;
};

// NOT IN USE
/**
 * API Request handler
 * @param url - api endpoint
 * @param method - http method
 * @param bodyParams - body parameters of request
 */
export const apiRequest = async (
  url: string,
  method: string,
  bodyParams?: { username: string; password: string }
): Promise<any> => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: bodyParams ? JSON.stringify(bodyParams) : undefined,
  });
  return await response.json();
};
