import { onIntegrate } from '@/actions/integrations';
import { redirect } from 'next/navigation';
import React from 'react';

// Type definition for props
type PageProps = {
  searchParams?: Record<string, string | string[]>; // Updated to match Next.js expectations
};

// Async Server Component
const Page = async ({ searchParams }: PageProps) => {
  // Safely extract the `code` parameter
  const code = typeof searchParams?.code === 'string' ? searchParams.code : undefined;

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
      redirect('/error'); // Redirect to an error page
      return null;
    }
  }

  // Redirect to sign-up if `code` is missing or integration fails
  redirect('/sign-up');
  return null;
};

export default Page;
