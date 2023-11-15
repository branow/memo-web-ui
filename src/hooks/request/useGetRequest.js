import { useEffect, useState } from "react";
import useRequest from "./useRequest";


function useGetRequest(request, callback) {
  const [data, setData] = useState(null);

  callback.error.addAtMiddle(() => setData(null));
  callback.fail.addAtMiddle(() => setData(null));
  callback.success.addAtMiddle((response) => setData(response.data));

  const state = useRequest(request, callback);

  useEffect(() => {
    const abort = new AbortController();
    state.run(abort.signal);
    return () => abort.abort();
  }, [])

  return {
    dataState: { data: data, setData: setData },
    state: {
      error: state.error,
      pending: state.pending,
    }
  };
}

export default useGetRequest;