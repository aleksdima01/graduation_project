import { useSelector } from "react-redux";

function EachEvent() {
    const { event, loading, error } = useSelector((state) => state.event);
    //const upperTitle = event.title.charAt(0).toUpperCase() + event.title.slice(1);
    // const ev = event.dates.filter(el => ((Date.now() > el.start * 1000 && Date.now() < el.end * 1000) || (Date.now() < el.start * 1000)));
    //const cleanText = event.body_text.replace(/<[^>]*>/g, '');
    //console.log(Date.now())
    console.log(event)

    function capitalizeFirstLetter(event) {
        return event.title.charAt(0).toUpperCase() + event.title.slice(1);
    }
    function cleanTextFromTags(event) {
        return event.body_text.replace(/<[^>]*>/g, '');
    }
    function filter(event) {
        return event.dates.filter(el => ((Date.now() > el.start * 1000 && Date.now() < el.end * 1000) || (Date.now() < el.start * 1000)));
    }

    return (
        <>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка {error}</p>}
            {Object.keys(event).length !== 0 ?
                <div className="each_event pt-4 pr-4 pl-4">
                    <div className="h-10 mb-10 italic text-lg "><p>{!loading && capitalizeFirstLetter(event)}</p></div>
                    <div className="grid justify-items-center pt-3" ><img style={{ height: '240px' }} src={event.images[0].image} alt="event_image" /></div>
                    <div className="text-left mb-6">
                        <p>{!loading && cleanTextFromTags(event)}</p>
                    </div>
                    {
                        filter(event).slice(0, 4)[0].start <= 0 ?
                            <div className="text-left"><p className="mt-3">Проводится постоянно</p></div>
                            :
                            <div className="text-left">Ближайшие даты проведения: {filter(event).slice(0, 4).map((el, index) => (
                                <div key={index}>
                                    {(new Date(el.start * 1000).toLocaleDateString("ru-RU")) === (new Date(el.end * 1000).toLocaleDateString("ru-RU")) ? <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}</p>
                                        : <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}-{new Date(el.end * 1000).toLocaleDateString("ru-RU")}</p>}
                                </div>
                            ))}</div>
                    }

                    {/* <p>ID: {event.id}</p> */}
                </div> :
                null}
        </>);
}

export default EachEvent;