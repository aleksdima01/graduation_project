import { Link } from "react-router-dom";

function EachCard({ event }) {
    const upperTitle = event.title.charAt(0).toUpperCase() + event.title.slice(1);
    const ev = event.dates.filter(el => ((Date.now() > el.start * 1000 && Date.now() < el.end * 1000) || (Date.now() < el.start * 1000)));
    //console.log(Date.now())
    return (
        <>
            <Link to={`/${event.id}`}>
                <div className="each_event pt-4 pr-4 pl-4 hover:bg-slate-200">
                    <div className="h-10 mb-10 italic text-lg "><p>{upperTitle}</p></div>
                    <div className="grid justify-items-center pt-3" ><img style={{ height: '240px' }} src={event.images[0].image} alt="event_image" /></div>
                    {
                        ev.slice(0, 4)[0].start <= 0 ?
                            <div><p className="mt-3">Проводится постоянно</p></div>
                            :
                            <div>Ближайшие даты проведения: {ev.slice(0, 4).map((el, index) => (
                                <div key={index}>
                                    {(new Date(el.start * 1000).toLocaleDateString("ru-RU")) === (new Date(el.end * 1000).toLocaleDateString("ru-RU")) ? <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}</p>
                                        : <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}-{new Date(el.end * 1000).toLocaleDateString("ru-RU")}</p>}
                                </div>
                            ))}</div>
                    }
                    <div className="p-4">
                        <Link to={event.site_url} className="text-blue-600 visited:text-purple-600 hover:bg-slate-300 pointer-events-auto">Перейти на сайт мероприятия</Link>
                    </div>
                </div>
            </Link>

        </>);
}

export default EachCard;