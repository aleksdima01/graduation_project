import { useSelector } from "react-redux";
import EachCard from "./EachCard";
import { useDispatch } from "react-redux";
import { fetchAfisha } from '../store/afishaReducer';
import { useEffect } from 'react';
import Pagination from "./Pagination";

const ShowAfishaInfo = ({ city }) => {
    const { afisha, loading, error } = useSelector((state) => state.afisha);
    console.log(afisha);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAfisha({ page: 1, city: city }))
    }, [dispatch, city])
    return (
        <>
            <div>
                <h2 className="text-4xl mb-10">Afisha info</h2>
                {loading && <p>Загрузка...</p>}
                {error && <p>Ошибка {error}</p>}
                {afisha.results ? <div className="grid gap-4 grid-cols-3 p-3">
                    {
                        afisha.results.map(el => (
                            <div key={el.id} className="border-8">
                                <EachCard event={el} />
                            </div>
                        ))
                    }
                </div>
                    : null}
            </div >
            <footer className={loading ? "hidden" : ''}>

                <Pagination city={city} />

            </footer>
        </>
    )
}
export default ShowAfishaInfo
