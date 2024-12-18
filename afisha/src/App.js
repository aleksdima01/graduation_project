import { useEffect } from 'react';
import './App.css';
import { useDispatch } from "react-redux";
import { fetchAfisha } from './store/afishaReducer';
import ShowAfishaInfo from './components/ShowAfishaInfo';
import Pagination from './components/Pagination';

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAfisha())
  }, [dispatch])
  return (
    <>
      <div className="App">
        <ShowAfishaInfo />
      </div >
      <footer>
        <Pagination />
      </footer>
    </>
  );
}

export default App;
