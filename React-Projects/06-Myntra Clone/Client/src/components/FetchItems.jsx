import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchingStatusActions } from "../store/fetchingStatusSlice";
import { useEffect } from "react";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchingStatusActions.markCurrentlyFetching());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingStatusActions.markFetchDone());
        dispatch(fetchingStatusActions.markFetchingFinished());
        dispatch(itemsAction.fetchInitialState(data.items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};

export default FetchItems;
