/* eslint-disable react-hooks/exhaustive-deps */
import { onIntegrate } from '@/actions/integrations';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation'; 
import React, { useEffect } from 'react';

const Page = () => {
  const searchParams = useSearchParams(); 
  const router = useRouter();
  const code = searchParams.get('code'); 

  useEffect(() => {
    const handleIntegration = async () => {
      if (code) {
        console.log(code);
        const user = await onIntegrate(code.split('#_')[0]);
        if (user.status === 200) {
          router.push(
            `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
          ); 
        } else {
          // Handle integration errors (e.g., redirect to an error page)
          router.push('/error'); 
        }
      } else {
        // Handle missing 'code' parameter (e.g., redirect to an error page)
        router.push('/error'); 
      }
    };

    handleIntegration(); 
  }, [code, router, code.split('#_')[0]]); 

  return null; 
};

export default Page;
