import { useState } from 'react';

import getCodeService from '@/services/getCode/getCode.service';

import { Code } from '@/types/code';

export const useCode = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const[dataCode, setDataCode] = useState<Code | null>(null);

  const handleSearchCode = async (code: string) => { 

    if (!code) {
      setDataCode(null);
      return;
    };

    setLoading(true);
    try {
      const response = await getCodeService(code);
      setDataCode(response);
    } catch (e) {
      setDataCode(null);
    } finally {
      setLoading(false);
    }
  }

  console.log('dataCode', dataCode)

  return {
    handleSearchCode,
    dataCode,
    loading
  }
}

export default useCode;