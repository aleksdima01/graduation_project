import { fetchAddToFavorites } from "@/Store/addToFavorites";
import { fetchDeleteFromFavorites } from "@/Store/deleteFromFavorites";
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { useDispatch } from "react-redux";


function FavoritesButton({ id }) {
    const userProps = usePage().props.auth.user;
    const favorites = usePage().props.auth.user.favorites;

    const [inFavorites, setInFavorites] = useState(false);
    console.log(inFavorites)
    const dispatch = useDispatch();
    function addToFavorites() {
        dispatch(fetchAddToFavorites({ id: id, user: userProps.id }));
        setInFavorites(!inFavorites);
    }
    function deleteFromFavorites() {
        dispatch(fetchDeleteFromFavorites({ id: id, user: userProps.id }));
        setInFavorites(!inFavorites);
    }

    return (
        <>


            <button className='transition duration-150  absolute bottom-10 right-4'
            >
                {!(favorites.includes(String(id))) ?
                    <span onClick={() => !inFavorites ? addToFavorites() : deleteFromFavorites()}
                        className={`${!inFavorites ? 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/40 hover:text-green-900 hover:bg-green-100' : 'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-red-800/50 hover:text-red-900 hover:bg-red-100'}`}>
                        {!inFavorites ? <>В избранное</> : <>Убрать из избранного</>}
                    </span> : <span className="favorite inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-red-800/50 hover:text-red-900 hover:bg-red-100 ">
                        Убрать из избранного
                    </span>}
            </button >

        </>
    );
}
export default FavoritesButton;