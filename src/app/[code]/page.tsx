'use client';

import React, { useEffect, useState } from 'react';
import '@/lib/env';

import useCode from '@/hooks/useCode';

import LoadingSpinner from '@/components/LoadingSpinner';
import Logo from '@/components/Logo/inde';
import SectionAboutUs from '@/components/SectionAboutUs/inde';
import Timeline from '@/components/Timeline';
import UnderlineLink from '@/components/UnderlineLink';

const CodePage = () => {
  const [code, setCode] = useState<string>('');

  useEffect(() => {
    const url = new URL(window.location.href);
    const codeFromUrl = url.pathname.split('/').pop();
    if (codeFromUrl) {
      setCode(codeFromUrl);
      handleSearchCode(codeFromUrl);
    }
  }, []);

  const {
    handleSearchCode,
    dataCode,
    loading
  } = useCode();

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchCode(code);
    }
  };

  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center py-12'>
          <Logo />
          <h1 className='mt-6'>Entregas rápidas, resultados mais ágeis</h1>
          <p className='text-sm text-gray-800 mt-5'>
            Sua mercadoria em movimento constante conosco!
          </p>
          <div className="flex w-full mt-4 border-gray-500">
            <input 
              onChange={(e) => setCode(e.target.value)}
              onKeyPress={handleKeyPress}
              value={code}
              className="flex w-full h-[50px] rounded-l-md rounded-r-none border border-gray-500 px-3 py-2 ring-offset-background file:bg-transparent placeholder:text-muted-foreground xs:text[14px] sm:text[16px] md:text-[18px] font-normal leading-[22.4px] text-black focus:border-green-500 focus:ring-2 focus:ring-green-500" 
              id="code" 
              type="text" 
              placeholder="Digite o código de rastreio" 
            />
            <button
              onClick={() => handleSearchCode(code)}
              className="h-[50px] px-4 text-white bg-green-500 hover:bg-green-600 rounded-tr-md rounded-br-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Pesquisar
            </button>
          </div>
          <div className="w-full mt-[50px] mb-[50px]">
          {
            loading ? <LoadingSpinner /> :
              <> 
                {
                  dataCode && Object.keys(dataCode)?.length > 0 ? (<Timeline history={dataCode?.history} />) : <SectionAboutUs />
                }
            </>
            }
          </div>
          <footer className="absolute bottom-2 text-gray-700">
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href="https://primelogtracking.com" target="_blank">
              Primelog Tracking
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default CodePage;
