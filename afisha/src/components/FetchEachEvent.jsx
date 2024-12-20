import { useDispatch } from "react-redux";
import { useEffect } from 'react';
import EachEvent from "./EachEvent";
import { fetchEvent } from "../store/eventReducer";
import { useParams } from "react-router-dom";

const FetchEachEvent = () => {
    const { id } = useParams();
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
export default FetchEachEvent
