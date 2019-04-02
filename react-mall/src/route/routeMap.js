//routerMap.js

import Home from '../views/home/index.js';
import Personal from '../views/personal/index.js';
import Login from '../views/login/index.js';

export default [
  { path: "/", name: "Home", component: Home },
  { path: "/personal", name: "Personal", component: Personal, auth: true },
  { path: "/login", name: "Login", component: Login }
]