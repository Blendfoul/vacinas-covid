import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {useCallback, useEffect, useState} from "react";

type ErrorState = Error | undefined;
type ResponseState = AxiosResponse | undefined;

interface UseAxiosResponse {
  response: ResponseState;
  error: ErrorState;
  loading: boolean;
}

const useAxios = (url: string, requestConfig: AxiosRequestConfig = {}, dependency: any[] = []): UseAxiosResponse => {
  const [response, setResponse] = useState<ResponseState>(undefined);
  const [error, setError] = useState<ErrorState>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const source = axios.CancelToken.source();

  const requestData = useCallback(async (urlToApi: string, params: AxiosRequestConfig) => {
    try {
      const response = await axios({
        url: urlToApi,
        ...params,
        cancelToken: source.token
      });
      setResponse(response);
    } catch (e) {
      if(!axios.isCancel(e)) {
        setError(e);
        console.error(e);
      }
    } finally {
      setLoading(false);
    }

    return () => source.cancel('Request cancelled!');
  }, [source, url, requestConfig]);

  useEffect(() => {
    requestData(url, requestConfig);

    return () => setLoading(false);
  }, dependency);

  return {response, error, loading};
}

export default useAxios;
