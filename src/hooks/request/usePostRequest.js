
import { ValidatorFunctionWrapper } from "../../utils/function-wrapper";
import useRequest from "./useRequest";

function usePostRequest(setData, request, callback, buildValidator) {
  callback.success.addAtMiddle((response) => setData(response.data));
  const wrappedRequest = ({ data, callback }) => {
    const wrapper = new ValidatorFunctionWrapper(
      () => request(data, callback),
      buildValidator(data),
    );
    wrapper.wrap().apply();
  };
  return {
    state: useRequest(wrappedRequest, callback),
  };
}

export default usePostRequest;