import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SearchScreen from './screens/SearchScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import MapScreen from './screens/MapScreen';
import ForgetPasswordScreen from './screens/ForgetPasswordScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/product/:slug',
    publicOnly: true,
    component: ProductScreen,
  },
  {
    path: '/cart',
    publicOnly: true,
    component: CartScreen,
  },
  {
    path: '/search',
    publicOnly: true,
    component: SearchScreen,
  },
  {
    path: '/signin',
    publicOnly: true,
    component: SigninScreen,
  },
  {
    path: '/signup',
    publicOnly: true,
    component: SignupScreen,
  },
  {
    path: '/forget-password',
    publicOnly: true,
    component: ForgetPasswordScreen,
  },
  {
    path: '/reset-password/:token',
    publicOnly: true,
    component: ResetPasswordScreen,
  },
  {
    path: '/profile',
    private: true,
    component: ProfileScreen,
  },
  {
    path: '/map',
    private: true,
    component: MapScreen,
  },
  {
    path: '/placeorder',
    publicOnly: true,
    component: PlaceOrderScreen,
  },
  {
    path: '/order/:id',
    private: true,
    component: OrderScreen,
  },
  {
    path: '/orderhistory',
    private: true,
    component: OrderHistoryScreen,
  },
  {
    path: '/shipping',
    publicOnly: true,
    component: ShippingAddressScreen,
  },
  {
    path: '/payment',
    publicOnly: true,
    component: PaymentMethodScreen,
  },
  {
    path: '/admin/dashboard',
    adminOnly: true,
    component: DashboardScreen,
  },
  {
    path: '/admin/orders',
    adminOnly: true,
    component: OrderListScreen,
  },

  {
    path: '/admin/users',
    adminOnly: true,
    component: UserListScreen,
  },
  {
    path: '/admin/products',
    adminOnly: true,
    component: ProductListScreen,
  },
  {
    path: '/admin/product/:id',
    adminOnly: true,
    component: ProductEditScreen,
  },
  {
    path: '/admin/user/:id',
    adminOnly: true,
    component: UserEditScreen,
  },
  {
    path: '/',
    publicOnly: true,
    component: HomeScreen,
  },
];
