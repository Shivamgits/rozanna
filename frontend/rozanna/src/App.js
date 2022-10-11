import { Route, Routes } from 'react-router-dom';
import './App.css';
import HelpCenter from './Components/HelpCenter';
import Home from './Components/Home';
import LoginForm from './Components/Login';
import Main from './Components/Main';
import Navbar from './Components/Navbar'
import Register from './Components/Register';
import DataProvider from './Context/DataProvider';

function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/help"  element={<HelpCenter />}></Route>
      <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/login" element={<LoginForm/>}></Route>

 
   
    </Routes> */}
<DataProvider>

    <Main/>
</DataProvider>
    </>
  );
}

export default App;
