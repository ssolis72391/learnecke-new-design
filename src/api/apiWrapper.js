export const apiWrapper = async (input, { headers, ...init } = {}) => {
  const response = await fetch(process.env.REACT_APP_API_ENDPOINT + input, { ...init, headers });

  if (response.status >= 400) return Promise.reject(response);
  return response;
};

export const authorizedJsonHeader = {
  // 'Authorization': 'Bearer ' + sessionStorage.getItem('longToken'),
  'Content-Type': 'binary',
  // 'cache-control': 'no-cache',
};
export const unauthorizedJsonHeader = {
  'Content-Type': 'application/json',
  'cache-control': 'no-cache',
};
