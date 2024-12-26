import EachCard from '@/Components/Custom/EachCard';
import FavoritesButton from '@/Components/Custom/FavoritesButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Header from '@/Layouts/Header';
import { fetchFavorites } from '@/Store/favoritesReducer';
import { Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
    const page = usePage();
    const { favorites, loading, error } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFavorites({ userId: page.props.auth.user.id }))
    }, [dispatch])
    console.log(favorites)
    return (
        <>
            <Header />
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Избранное
                    </h2>
                }
            >
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            {!(page.props.auth.user.favorites) ?
                                <div className="p-6 text-gray-900">
                                    В избранном пока пусто!
                                </div> :
                                <>
                                    <div>
                                        {loading && <p>Загрузка...</p>}
                                        {error && <p>Ошибка {error}</p>}
                                        {Object.keys(favorites).length !== 0 ? <div className="grid gap-4 grid-cols-3 p-3">
                                            {
                                                favorites.results.map(el => (
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
                                </>
                            }

                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
