import EachEvent from "@/Components/Custom/EachEvent";
import { fetchEvent } from "@/Store/eventReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const FetchEvent = ({ id }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchEvent({ id: id }))
    }, [dispatch, id])
    return (
        <>
            <EachEvent />
        </>
    )
}
export default FetchEvent
