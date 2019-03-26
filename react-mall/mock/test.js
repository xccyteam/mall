const Mock = require('mockjs');
// Mock.mock('/api/userinfo/', {
//     status: 200,
//     data: {
//         username: 'chenying',
//         sex: '女'
//     }
// })

export default {
    'POST /api/userinfo': {
      '/': Mock.mock({
        'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
      }),
    },
  };