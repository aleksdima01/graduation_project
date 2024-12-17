import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from './store/userReducer';
import { fetchShowUsers, toggleShow } from './store/showReducer';
import { fetchAfisha } from './store/afishaReducer';
import ShowAfishaInfo from './components/ShowAfishaInfo';

function App() {
  const { users, loading, error } = useSelector((state) => state.users);

  const handleShowInfo = (id) => {
    dispatch(fetchShowUsers(id))
    dispatch(toggleShow(id))
  }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers())
    dispatch(fetchAfisha())
  }, [dispatch])
  return (
    <div className="App">
      <ShowAfishaInfo />
    </div >
  );
}

export default App;
