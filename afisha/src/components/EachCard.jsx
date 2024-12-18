function EachCard({ event }) {
    const upperTitle = event.title.charAt(0).toUpperCase() + event.title.slice(1);
    const ev = event.dates.filter(el => ((Date.now() > el.start * 1000 && Date.now() < el.end * 1000) || (Date.now() < el.start * 1000)));
    //console.log(Date.now())
    return (
        <div className="each_event p-4">
            <div className="h-10 mb-10 italic text-lg "><p >{upperTitle}</p></div>

            <div className="grid justify-items-center" ><img style={{ height: '240px' }} src={event.images[0].image} alt="event_image" /></div>

            <div>Ближайшие даты проведения: {ev.slice(0, 4).map((el, index) => (
                <div key={index}>
                    <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}-{new Date(el.end * 1000).toLocaleDateString("ru-RU")}</p>
                </div>


            ))}</div>
            {/* <p>ID: {event.id}</p> */}
            <a href={event.site_url} className="text-blue-600 visited:text-purple-600">Перейти на сайт мероприятия</a>
        </div>);
}

export default EachCard;