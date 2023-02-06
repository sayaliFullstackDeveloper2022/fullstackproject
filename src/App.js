import './App.css';
import CustomerIndex from './components/CustomerIndex';
import Home from './components/Home';
import Login from './components/Login';
import NewCustomer from './components/NewCustomer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <NewCustomer/>
    // <Home/>
    <BrowserRouter>
    <CustomerIndex />
   </BrowserRouter>
    // <Login/>
  );
}

export default App;
