import EachCard from '@/Components/Custom/EachCard';
import FavoritesButton from '@/Components/Custom/FavoritesButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Header from '@/Layouts/Header';
import { fetchFavorites } from '@/Store/favoritesReducer';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
    const page = usePage();
    const { favorites, loading, error } = useSelector((state) => state.favorites);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchFavorites({ userId: page.props.auth.user.id }))
    }, [dispatch])
    return (
        <>
            <Head title="Избранное" />
            <Header />
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Избранное
                    </h2>
                }
            >
                <div className="py-12 ">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 ">
                        {loading && <div role="status" className="flex items-center justify-center bg-gray-100 shadow-none">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>}
                        {error && <p>Ошибка {error}</p>}
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg bg-gray-100">
                            {!(page.props.auth.user.favorites) ?
                                <div className="p-6 text-gray-900">
                                    В избранном пока пусто!
                                </div> :
                                <>
                                    <div>
                                        {Object.keys(favorites).length !== 0 ? <div className=" bg-gray-100 grid gap-4 grid-cols-3 p-3">
                                            {
                                                favorites.results.map(el => (
                                                    <div key={el.id} className="border-8 relative">
                                                        <Link href={el.id}
                                                            className="  hover:bg-slate-200 h-full flex"
                                                        >
                                                            <EachCard event={el} />
                                                        </Link>
                                                        <FavoritesButton id={el.id} addClasses={'absolute bottom-8   px-4'} />
                                                        <a href={el.site_url} className="px-4 absolute bottom-1 text-blue-600 visited:text-purple-600 pointer-events-auto hover:text-orange-600 text-[7px] sm:text-sm/[10px]  lg:text-base">Перейти на сайт мероприятия</a>
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
