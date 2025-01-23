import { onIntegrate } from '@/actions/integrations';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: { code: string }; // Change this to the resolved type, not a Promise
};

const Page = async ({ searchParams }: Props) => {
  const { code } = searchParams; // Access the resolved object directly

  if (code) {
    console.log(code);
    try {
      const user = await onIntegrate(code.split('#_')[0]);
      if (user.status === 200) {
        redirect(
          `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
        );
        return null; // Ensure the component renders nothing after redirection
      }
    } catch (error) {
      console.error('Integration failed:', error);
    }
  }
  
  redirect('/sign-up');
  return null; // Ensure the component renders nothing after redirection
};

export default Page;
