export default [
  {
    path: '/home',
    // component: '../layouts/UserLayout',
    routes: [
      { path: '/home/', component: './Home/index' },
    ],
  },
  {
    path: '/login',
    // component: '../layouts/UserLayout',
    routes: [
      { path: '/login/', component: './Login/index' },
      { path: '/login/register/', component: './Login/Register/index' },
      { path: '/login/forget/', component: './Login/Forget/index' },
      { path: '/login/connect', component: './Login/Connect/index' },
    ],
  },
  {
    path: '/personal',
    // component: '../layouts/UserLayout',
    routes: [
      { path: '/personal/', component: './Personal/ShoppingPage/index' },
      { path: '/personal/modify/', component: './Personal/index' },
      { path: '/personal/shoppingCar/', component: './Personal/ShoppingCar/index' },
      { path: '/personal/addressManage/', component: './Personal/AddressManage/index' },
      { path: '/personal/deviceManage/', component: './Personal/DeviceManage/index' },
      { path: '/personal/orderManage/', component: './Personal/OrderManage/index' },
    ],
  },
  {
    path: '/product',
    // component: '../layouts/UserLayout',
    routes: [
      { path: '/product/', component: './Product/index' },
      { path: '/product/detail/:id', component: './Product/ProductDetail/index' },
    ],
  },
  {
    path: '/exception',
    component: './Exception/404',
    routes: [
      { path: '/exception/404/', component: './Exception/404' },
      { path: '/exception/403/', component: './Exception/403' },
      { path: '/exception/500/', component: './Exception/500' },
    ],
  },
  {
    path: '/',
    component: './Test/index',
  },
];
