import { fetchAddToFavorites } from "@/Store/addToFavorites";
import { fetchDeleteFromFavorites } from "@/Store/deleteFromFavorites";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { useDispatch } from "react-redux";


function FavoritesButton({ id, addClasses }) {
    const userProps = usePage().props.auth.user;
    let favorites = '';
    if (userProps) {
        favorites = usePage().props.auth.user.favorites;
    }
    if (favorites !== null) {
        favorites = Object.values(favorites);
    }

    const [inFavoritesTrue, setInFavoritesTrue] = useState(true);
    const [inFavoritesFalse, setInFavoritesFalse] = useState(true);
    const dispatch = useDispatch();
    function addToFavorites(flag) {
        dispatch(fetchAddToFavorites({ id: id, user: userProps.id }));
        if (flag) {
            setInFavoritesFalse(!inFavoritesFalse);
        }
        else {
            setInFavoritesTrue(!inFavoritesTrue);
        }
    }
    function deleteFromFavorites(flag) {
        dispatch(fetchDeleteFromFavorites({ id: id, user: userProps.id }));
        if (flag) {
            setInFavoritesFalse(!inFavoritesFalse);
        }
        else {
            setInFavoritesTrue(!inFavoritesTrue);
        }

    }

    return (
        <>
            {userProps &&
                <button className={`transition duration-150 ${addClasses} `}
                >
                    {favorites === null ? <span onClick={() => inFavoritesFalse ? addToFavorites(true) : deleteFromFavorites(true)}
                        className={`${inFavoritesFalse ? 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[6px] sm:text-xs/[10px]  font-medium text-green-700 ring-1 ring-inset ring-green-600/40 hover:text-green-900 hover:bg-green-100' : 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[6px] sm:text-xs/[10px]  font-medium text-orange-700 ring-1 ring-inset ring-red-800/50 hover:text-red-900 hover:bg-red-100'}`}>
                        {inFavoritesFalse ? <>В избранное</> : <>Убрать из избранного</>}

                    </span> :

                        <>
                            {(!(favorites.includes(String(id)))) ?
                                <span onClick={() => inFavoritesFalse ? addToFavorites(true) : deleteFromFavorites(true)}
                                    className={`${inFavoritesFalse ? 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[6px] sm:text-xs/[10px]  font-medium text-green-700 ring-1 ring-inset ring-green-600/40 hover:text-green-900 hover:bg-green-100' : 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[6px] sm:text-xs/[10px]  font-medium text-orange-700 ring-1 ring-inset ring-red-800/50 hover:text-red-900 hover:bg-red-100'}`}>
                                    {inFavoritesFalse ? <>В избранное</> : <>Убрать из избранного</>}

                                </span> : <span

                                    onClick={() => inFavoritesTrue ? deleteFromFavorites(false) : addToFavorites(false)}
                                    className={`${inFavoritesTrue ? "favorite inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[6px] sm:text-xs/[10px]  font-medium text-orange-700 ring-1 ring-inset ring-red-800/50 hover:text-red-900 hover:bg-red-100" : 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-[6px] sm:text-xs/[10px] font-medium text-green-700 ring-1 ring-inset ring-green-600/40 hover:text-green-900 hover:bg-green-100'}`}>
                                    {inFavoritesTrue ? <>Убрать из избранного</> : <>В избранное</>}
                                </span>}</>}
                </button >
            }
        </>
    );
}
export default FavoritesButton;