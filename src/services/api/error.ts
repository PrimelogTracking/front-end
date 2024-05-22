import { type AxiosError } from 'axios';

export const handleApiRouteError = (error: AxiosError, res: any) => {
  if (!error.response) {
    res.status(500).json({ message: 'Ocorreu um erro inesperado!' });
    return;
  }
  const response = error.response;
  res.status(response.status).json(response?.data);
};
