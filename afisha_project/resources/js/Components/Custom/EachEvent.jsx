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
    function cleanTextFromTags(text) {
        return text.replace(/<[^>]*>/g, '');
    }
    function filter(event) {
        return event.dates.filter(el => ((Date.now() > el.start * 1000 && Date.now() < el.end * 1000) || (Date.now() < el.start * 1000)));
    }

    return (
        <>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка {error}</p>}
            {Object.keys(event).length !== 0 ?
                <div className="each_event p-4  ">
                    <div className="h-10 mb-10 italic text-4xl font-serif "><p>{!loading && capitalizeFirstLetter(event)}</p></div>
                    <div className="grid justify-items-center pt-3 pb-4" ><img src={event.images[0].image} alt="event_image" /></div>
                    <div className="text-left mb-6 font-serif tracking-wide leading-loose  font-semibold italic">
                        {cleanTextFromTags(event.description)}
                    </div>
                    <div className="text-left mb-6 font-serif tracking-wide leading-loose" dangerouslySetInnerHTML={{ __html: event.body_text }}>
                    </div>
                    <div className="text-left mb-6 font-serif tracking-wide leading-loose  font-semibold italic">
                        {event.age_restriction === 0 || event.age_restriction === null ? <p>
                            Возрастное ограничение: Без ограничений
                        </p> :
                            <p>
                                Возрастное ограничение: {event.age_restriction}
                            </p>
                        }

                    </div>
                    <div className="text-left mb-6 font-serif tracking-wide leading-loose  font-semibold italic">
                        {event.is_free ? <p>Стоимость: Бесплатное мероприятие</p>
                            :
                            <p>Стоимость: {event.price}</p>
                        }
                    </div>
                    {
                        filter(event).slice(0, 4)[0].start <= 0 ?
                            <div className="text-left mb-6 font-serif tracking-wide leading-loose "><p className="mt-3">Проводится постоянно</p></div>
                            :
                            <div className="text-left mb-6 tracking-wide leading-loose text-lg">Ближайшие даты проведения: {filter(event).slice(0, 4).map((el, index) => (
                                <div key={index}>
                                    {(new Date(el.start * 1000).toLocaleDateString("ru-RU")) === (new Date(el.end * 1000).toLocaleDateString("ru-RU")) ? <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}</p>
                                        : <p> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}-{new Date(el.end * 1000).toLocaleDateString("ru-RU")}</p>}
                                </div>
                            ))}</div>
                    }

                    <div className=" text-left">
                        <a href={event.site_url} className="text-blue-600 visited:text-purple-600 ">Перейти на сайт мероприятия</a>
                    </div>
                </div> :
                null}
        </>);
}

export default EachEvent;