import Header from "@/Layouts/Header";
import { useSelector } from "react-redux";
import FavoritesButton from "./FavoritesButton";

function EachEvent() {
    const { event, loading, error } = useSelector((state) => state.event);

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
            <Header />
            {loading && loading && <div role="status" className="flex items-center justify-center bg-gray-100 !shadow-none">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>}
            {error && <p>Ошибка {error}</p>}
            {Object.keys(event).length !== 0 ?
                <div className="each_event p-4 bg-gray-100   ">
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
                    {filter(event).slice(0, 4).length === 0 ?
                        <div><p className="text-left mb-6 font-serif tracking-wide leading-loose">Событие прошло</p></div>
                        :
                        <>
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
                            }</>
                    }

                    <div className="flex justify-between">
                        <a href={event.site_url} className="text-blue-600 visited:text-purple-600  pointer-events-auto hover:text-orange-600">Перейти на сайт мероприятия</a>
                        <FavoritesButton id={event.id} />
                    </div>
                </div> :
                null}
        </>);
}

export default EachEvent;