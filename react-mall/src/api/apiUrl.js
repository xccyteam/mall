const baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001';
} else {
  baseURL = '';
}
const apiUrl = {
  test: baseURL + '/api/test',
}
export default apiUrl