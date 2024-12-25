import { useSelector } from "react-redux";
import EachCard from "../Components/Custom/EachCard";
import { useDispatch } from "react-redux";
import { fetchAfisha } from '../Store/afishaReducer';
import { useEffect } from 'react';
import Pagination from "../Components/Custom/Pagination";
import Header from "@/Layouts/Header";

export default function ShowAfishaInfo({ city }) {
    const { afisha, loading, error } = useSelector((state) => state.afisha);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAfisha({ page: 1, city: city }))
    }, [dispatch, city])


    return (
        <>
            <Header />
            {/* <Head title="Welcome" /> */}
            <div>
                <h2 className="text-4xl mb-10 pt-8">Afisha info</h2>
                {loading && <p>Загрузка...</p>}
                {error && <p>Ошибка {error}</p>}
                {Object.keys(afisha).length !== 0 ? <div className="grid gap-4 grid-cols-3 p-3">
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
    );
}




