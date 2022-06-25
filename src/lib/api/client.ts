import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

const headersConfig: Readonly<Record<string, string | boolean>> = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

class CustomAxios {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create({
      baseURL: process.env.BASE_API,
      headers: headersConfig,
      timeout: 30000,
    });

    // Interceptors configuration:
    // Document: https://github.com/axios/axios#interceptors
    http.interceptors.request.use(this.handleBeforeRequesting);
    http.interceptors.response.use(this.handleSuccess, this.handleError);

    this.instance = http;
    return http;
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }

  private handleError(error: AxiosError | any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.resolve(error.response);
  }

  private handleBeforeRequesting(
    config: AxiosRequestConfig,
  ): AxiosRequestConfig {
    // Do something before request is sent
    const newConfig: any = config;
    const token = "put access token here";
    newConfig.headers["Authorization"] = token;
    return newConfig;
  }

  // Use this if use want to you use axios.request
  // https://github.com/axios/axios#request-method-aliases
  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const res = this.http.get<T, R>(url, config);
    return res;
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  patch<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.patch<T, R>(url, data, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export default new CustomAxios();
