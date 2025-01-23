import { onIntegrate } from '@/actions/integrations';
import { redirect } from 'next/navigation';
import React from 'react';

// Type definition for the props
type Props = {
  searchParams: { code?: string }; // `code` is optional to handle cases where it might be missing
};

// Async Server Component
const Page = async ({ searchParams }: Props) => {
  const code = searchParams?.code; // Safely access `code`

  if (code) {
    try {
      // Extract the actual code before calling `onIntegrate`
      const cleanCode = code.split('#_')[0];

      // Call the integration function
      const user = await onIntegrate(cleanCode);

      if (user?.status === 200) {
        // Redirect to the appropriate dashboard URL
        redirect(
          `/dashboard/${user.data?.firstname}${user.data?.lastname}/integrations`
        );
        return null; // Ensure no content is rendered after redirection
      }
    } catch (error) {
      console.error('Integration failed:', error);
      // Optionally, redirect to an error page or handle error UI
      redirect('/error');
      return null;
    }
  }

  // Redirect to sign-up if `code` is missing or integration fails
  redirect('/sign-up');
  return null; // Ensure no content is rendered after redirection
};

export default Page;
