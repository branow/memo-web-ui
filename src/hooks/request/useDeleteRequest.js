import useRequest from "./useRequest";

function useDeleteRequest(setData, request, callback) {
  callback.success.addAtMiddle(() => setData(null));
  return {
    state: useRequest(request, callback),
  };
}

export default useDeleteRequest;
