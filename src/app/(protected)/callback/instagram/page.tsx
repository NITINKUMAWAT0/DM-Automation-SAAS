import { onIntegrate } from '@/actions/integrations';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: Promise<{ code: string }>;
};

const Page = async ({ searchParams }: Props) => {
  const { code } = await searchParams;

  if (code) {
    console.log(code);
    const user = await onIntegrate(code.split('#_')[0]);
    if (user.status === 200) {
      redirect(
        `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
      );
      return null;  // Make sure to return null after redirection
    }
  }
  redirect('/sign-up');
  return null;  // Make sure to return null after redirection
};

export default Page;
