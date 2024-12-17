function EachCard({ event }) {
    return (<div className="each_event p-4">
        <p>ID: {event.id}</p>
        <p>Title: {event.title}</p>
        <p>Slug: {event.slug}</p>
    </div>);
}

export default EachCard;