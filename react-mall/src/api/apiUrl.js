var baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = '';
}
const apiUrl = {
  test: baseURL + '/api/userinfo/',
}
export default apiUrl