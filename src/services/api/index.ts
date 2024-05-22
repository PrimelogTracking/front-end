import axios from 'axios';

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER ?? "http://localhost:3001/api";
const API_CLIENT = process.env.NEXT_PUBLIC_API_CLIENT ?? "http://localhost:3000/api";
const TOKEN = process.env.NEXT_PUBLIC_TOKEN ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJyb2xlIjoiYWRtaW4iLCJ5ZWFyIjoyMDI0LCJpYXQiOjE3MTYxNTAzMTB9.CCR4m7AciGkL4L59Ea7stbMy7_ltkMSOwNHGVpMnIxs";

const apiServer = async () => {
	const instance = axios.create({ baseURL: API_SERVER });

	instance.interceptors.request.use(async request => {
		if (TOKEN) {
			request.headers.Authorization = `Bearer ${TOKEN}`;
		}

		return request;
	});

	return instance;
};

const apiClient = async () => {
  const instance = axios.create({ baseURL: API_CLIENT });

  instance.interceptors.request.use(async (request: any) => {
    if (TOKEN) {
      request.headers.Authorization = `Bearer ${TOKEN}`;
    }

    return request;
  });

  instance.interceptors.response.use(
    response => {
      return response;
    },
    async error => {
      if (error?.response?.data) {
        return await Promise.reject(error.response.data);
      }
      return await Promise.reject(error.message);
    }
  );

  return instance;
};

export {
  apiClient,
  apiServer,
}