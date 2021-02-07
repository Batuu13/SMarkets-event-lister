export function boolToString(value) {
  return value ? "Yes" : "No";
}
export function filtersToParams(filters) {
  let params = "";
  Object.keys(filters).forEach((key) => {
    if (params !== "") {
      params += "&";
    }
    params += `${key}=${encodeURIComponent(filters[key])}`;
  });
  return params;
}
export function paramsToFilter(params) {
  const filter = {};
  const paramArray = Array.from(new URLSearchParams(params).entries());
  paramArray.forEach(param => {
      filter[param[0]] = param[1];
  })
  return filter;
}
