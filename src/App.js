import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/log-in" exact element={<Login />} />
          <Route path="/create-store" exact element={<CreateStore />} />
          <Route path="/create-item" exact element={<CreateItem />} />
          <Route path="/store-detail" exact element={<StoreDetail store={store} />} />
          <Route path="/item-detail" exact element={<ItemDetail item={item[0]} />} />
          <Route path="/see-all-comments" exact element={<Comments />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/chat" exact element={<Chat />} />
          <Route path="/chat-list" exact element={<ChatList />} />
          <Route path="/search-detail" exact element={<SearchDetail />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/profile-edit" exact element={<ProfileEdit />} />
          <Route path="/driver" exact element={<Driver />} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
