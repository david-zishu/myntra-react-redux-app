import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addInitialItem } from "../features/items/itemsSlice";
import {
  markFetchDone,
  markFetchingFinished,
  markFetchingStarted,
} from "../features/items/fetchStatusSlice";

export const FetchItems = () => {
  const fetchStatus = useSelector((state) => state.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(markFetchDone());
        dispatch(markFetchingFinished());
        dispatch(addInitialItem(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return <></>;
};
