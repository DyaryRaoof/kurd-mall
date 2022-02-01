import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/log-in" exact element={<Login />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
