import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';
import CreateStore from './Components/CreateStore';
import CreateItem from './Components/CreateItem';
import StoreDetail from './Components/StoreDetailPage';
import store from './Components/mock-data/store';
import item from './Components/mock-data/items';
import ItemDetail from './Components/ItemDetail';
import Comments from './Components/Comments';
import Cart from './Components/Cart';
import Chat from './Components/Chat';
import ChatList from './Components/ChatList';
import SearchDetail from './Components/SearchDetail';
import Profile from './Components/Profile';
import ProfileEdit from './Components/ProfileEdit';
import Driver from './Components/Driver';
import Analytics from './Components/Analytics';
import OrdersAll from './Components/OrdersAll';
import DriverOrders from './Components/DriverOrders';
import OwnerOrders from './Components/OwnerOrders';
import BuyerOrders from './Components/BuyerOrders';
import MyCollection from './Components/MyCollection';
import PrivateRoute from './Components/PrivateRoute';
import AllItems from './Components/AllItems';
import SpinnerModal from './Components/Shared/SpinnerModal';

function App() {
  return (
    <div>
      <Router>
        <SpinnerModal>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/sign-up" exact element={<SignUp />} />
            <Route path="/log-in" exact element={<Login />} />
            <Route exact path="/create-store" element={<PrivateRoute element={<CreateStore />} />} />
            <Route exact path="/create-item" element={<PrivateRoute element={<CreateItem />} />} />
            <Route path="/store-detail/:id" exact element={<StoreDetail store={store} />} />
            <Route path="/item-detail/:id" exact element={<ItemDetail item={item[0]} />} />
            <Route path="/see-all-comments" exact element={<Comments />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/chat" exact element={<Chat />} />
            <Route path="/chat-list" exact element={<ChatList />} />
            <Route path="/search-detail" exact element={<SearchDetail />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/profile-edit" exact element={<ProfileEdit />} />
            <Route path="/driver" exact element={<Driver />} />
            <Route exact path="/analytics/:store_id" element={<PrivateRoute element={<Analytics />} />} />
            <Route path="/orders-all" exact element={<OrdersAll />} />
            <Route path="/driver-orders" exact element={<DriverOrders />} />
            <Route path="/owner-orders" exact element={<OwnerOrders />} />
            <Route path="/buyer-orders" exact element={<BuyerOrders />} />
            <Route exact path="/my-collection" element={<PrivateRoute element={<MyCollection />} />} />
            <Route path="/all-items" exact element={<AllItems />} />
          </Routes>
          <Footer />
        </SpinnerModal>
      </Router>
    </div>
  );
}

export default App;
