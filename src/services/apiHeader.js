export function authHeader() {
  const token = JSON.parse(localStorage.getItem('access_token'));

  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    };
  }
  return {};
}

export function Header() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };
}
