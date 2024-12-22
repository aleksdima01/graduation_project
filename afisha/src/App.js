
import './App.css';

import ShowAfishaInfo from './components/ShowAfishaInfo';
import Header from './components/Header';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import FetchEachEvent from './components/FetchEachEvent';
function App() {


  return (
    <>
      <div className="App bg-slate-100 ">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<ShowAfishaInfo city={'spb'} />} />
            <Route path="/msk" element={<ShowAfishaInfo city={'msk'} />} />
            <Route path="/krd" element={<ShowAfishaInfo city={'krd'} />} />
            <Route path="/sochi" element={<ShowAfishaInfo city={'sochi'} />} />
            <Route path="/:id" element={<FetchEachEvent />} />
          </Routes>
        </BrowserRouter>

      </div >

    </>
  );
}

export default App;
