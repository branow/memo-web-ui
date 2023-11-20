
import { useState } from "react";

function useRequest(request, callback) {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  callback.success.addAtBeginning(() => setError(null));
  callback.fail.addAtBeginning((response) => setError(response));
  callback.error.addAtBeginning((error) => setError(error));
  callback.success.addAtMiddle(() => setPending(false));
  callback.fail.addAtMiddle(() => setPending(false));
  callback.error.addAtMiddle(() => setPending(false));

  const run = (data, signal) => { 
    try {
      setPending(true);
      request({ data, callback, signal })
    } catch (error) {
      setPending(false);
      setError(error.message);
    }
  };

  return { error, pending, run };
}

export default useRequest;