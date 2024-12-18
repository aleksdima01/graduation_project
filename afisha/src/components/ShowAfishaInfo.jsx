import { useSelector } from "react-redux";
import EachCard from "./EachCard";


const ShowAfishaInfo = () => {
    const { afisha, loading, error } = useSelector((state) => state.afisha);
    console.log(afisha);
    return (
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

    )
}
export default ShowAfishaInfo
