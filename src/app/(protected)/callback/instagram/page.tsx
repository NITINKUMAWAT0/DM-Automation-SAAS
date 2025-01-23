import { onIntegrate } from '@/actions/integrations';
import { redirect } from 'next/navigation';
import { useSearchParams } from 'next/navigation'; 
import React, { useEffect } from 'react';

const Page = () => {
  const [searchParams] = useSearchParams(); 
  const code = searchParams.get('code'); 

  useEffect(() => {
    const handleIntegration = async () => {
      if (code) {
        console.log(code);
        const user = await onIntegrate(code.split('#_')[0]);
        if (user.status === 200) {
          redirect(
            `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
          ); 
        } else {
          // Handle integration errors (e.g., redirect to an error page)
          redirect('/error'); 
        }
      } else {
        // Handle missing 'code' parameter (e.g., redirect to an error page)
        redirect('/error'); 
      }
    };

    handleIntegration(); 
  }, [code]); 

  return null; 
};

export default Page;