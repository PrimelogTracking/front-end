import axios from 'axios';

const API_SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const API_CLIENT = process.env.NEXT_PUBLIC_API_CLIENT;
const TOKEN = process.env.NEXT_PUBLIC_TOKEN;

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
