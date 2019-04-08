var baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3100';
} else {
  baseURL = 'http://localhost:3100';
}
const apiUrl = {
  test: baseURL + '/api/userinfo',
  token: baseURL + '/users/token',
}
export default apiUrl