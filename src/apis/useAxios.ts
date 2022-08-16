import { Axios } from "./index";
import { useEffect, useRef, useState } from "react";

type RestType = {
  params?: unknown;
  body?: unknown;
  skip?: boolean;
};

const useAxios = <InitialState>(
  path: string,
  initialState: InitialState,
  rest: RestType = {}
) => {
  const { params, skip, body } = rest;
  const check = useRef(false);

  const [response, setResponse] = useState(initialState);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const axiosFetch = async (apiParams: unknown, apiBody: unknown) => {
    try {
      check.current = true;
      setLoading(true);

      if (apiBody) {
        const res = await Axios.post(path, apiBody);
        setResponse(res?.data || []);
      } else {
        const res = await Axios.get(path, {
          params: apiParams,
        });
        setResponse(res?.data || []);
      }
    } catch (err) {
      setError(err);
    } finally {
      check.current = false;
      setLoading(false);
    }
  };

  useEffect(() => {
    if (path && !check.current && !skip) {
      axiosFetch(params, body);
    }
  }, [path]);

  const refetch = ({ params, body }: RestType) => {
    axiosFetch(params, body);
  };

  return { response, loading, refetch, error };
};

// refetch({ params: { id: 123 } });
// const { response, loading } = useAxios<SongList[]>("/songs", [], {});

export default useAxios;
