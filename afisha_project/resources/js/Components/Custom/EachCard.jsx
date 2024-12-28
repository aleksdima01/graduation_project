
function EachCard({ event }) {

    function capitalizeFirstLetter(event) {
        return event.title.charAt(0).toUpperCase() + event.title.slice(1);
    }
    function filter(event) {
        return event.dates.filter(el => ((Date.now() > el.start * 1000 && Date.now() < el.end * 1000) || (Date.now() < el.start * 1000)));
    }

    return (
        <>
            <div className="each_event pt-4 pr-4 pl-4 bg-gray-100 w-full hover:bg-slate-200">
                <div className="h-10 mb-14 sm:mb-12 lg:mb-10 italic text-gray-600 text-[8px] sm:text-base lg:text-lg "><p>{capitalizeFirstLetter(event)}</p></div>
                <div className="justify-items-center pt-3 w-full h-[10vh] sm:h-[20vh] lg:h-[30vh]" >
                    <img className="w-auto h-full object-cover" src={event.images[0].image} alt="event_image" />
                </div>

                {filter(event).slice(0, 4).length === 0 ?
                    <div><p className="mt-3 mb-12 text-xs sm:text-sm lg:text-base not-italic">Событие прошло</p></div>
                    :
                    <>
                        {
                            filter(event).slice(0, 4)[0].start <= 0 ?
                                <div><p className="mt-3 mb-12 text-xs sm:text-sm lg:text-base not-italic">Проводится постоянно</p></div>
                                :
                                <div className='mt-3 mb-16 italic text-[8px] sm:text-sm lg:text-base'>Ближайшие даты проведения: {filter(event).slice(0, 4).map((el, index) => (
                                    <div key={index}>
                                        {(new Date(el.start * 1000).toLocaleDateString("ru-RU")) === (new Date(el.end * 1000).toLocaleDateString("ru-RU")) ? <p className="text-[8px] sm:text-sm lg:text-base not-italic"> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}</p>
                                            : <p className="text-[8px] sm:text-sm lg:text-base not-italic  "> {new Date(el.start * 1000).toLocaleDateString("ru-RU")}-{new Date(el.end * 1000).toLocaleDateString("ru-RU")}</p>}
                                    </div>
                                ))}</div>
                        }</>
                }
            </div >
        </>);
}

export default EachCard;