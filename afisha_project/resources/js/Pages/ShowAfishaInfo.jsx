import { useSelector } from "react-redux";
import EachCard from "../Components/Custom/EachCard";
import { useDispatch } from "react-redux";
import { fetchAfisha } from '../Store/afishaReducer';
import { useEffect } from 'react';
import Pagination from "../Components/Custom/Pagination";
import Header from "@/Layouts/Header";
import { Link } from '@inertiajs/react';
import FavoritesButton from "@/Components/Custom/FavoritesButton";

export default function ShowAfishaInfo({ city }) {
    const { afisha, loading, error } = useSelector((state) => state.afisha);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAfisha({ page: 1, city: city }))
    }, [dispatch, city])
    //console.log(afisha)

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
                            <div className="border-8 relative">
                                <Link href={el.id}
                                    className="  hover:bg-slate-200 h-full flex"
                                    key={el.id}>
                                    <EachCard event={el} />
                                </Link>
                                <FavoritesButton id={el.id} />
                                <a href={el.site_url} className="px-4 absolute bottom-1 text-blue-600 visited:text-purple-600 pointer-events-auto">Перейти на сайт мероприятия</a>
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




