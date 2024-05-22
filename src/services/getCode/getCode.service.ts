import { toast } from "react-toastify";

import { apiClient } from "../api/index";

export const getCodeService = async (code: string) => {
  try {
    const api = await apiClient();
    const params = new URLSearchParams();
    params.append('code', code); 
    
    const response = await api.get('/tracking', { params }); 
    return response.data;
  } catch (e) {
    toast.error("Código não encontrado.");
    throw e; 
  }
}

export default getCodeService;
