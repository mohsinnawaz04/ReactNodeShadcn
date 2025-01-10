export function storeTokenLS(token) {
  localStorage.setItem("token", token);
  return localStorage.getItem("token");
}
