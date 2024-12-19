
import './App.css';

import ShowAfishaInfo from './components/ShowAfishaInfo';
import Pagination from './components/Pagination';
import Header from './components/Header';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
function App() {


  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<ShowAfishaInfo city={'spb'} />} />
            <Route path="/msk" element={<ShowAfishaInfo city={'msk'} />} />
            <Route path="/krd" element={<ShowAfishaInfo city={'krd'} />} />
            <Route path="/sochi" element={<ShowAfishaInfo city={'sochi'} />} />
          </Routes>
        </BrowserRouter>

      </div >

    </>
  );
}

export default App;
