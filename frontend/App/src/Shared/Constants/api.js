export const PROXY_API_ROOT_DEV = "http://localhost:8080/proxy";
export const PROXY_API_ROOT_PROD = "http://localhost/api/proxy";
export const PROXY_API_ROOT =
  process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
    ? PROXY_API_ROOT_DEV
    : PROXY_API_ROOT_PROD;
