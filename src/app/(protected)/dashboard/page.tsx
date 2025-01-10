import { onBoardUser } from '@/actions/user';
import { redirect } from 'next/navigation';

const Page = async () => {
  const user = await onBoardUser();

  if (user.status === 200 || user.status === 201) {
    redirect(`/dashboard/${user.data?.firstname}${user.data?.lastname}`);
  } else {
    redirect('/sign-in');
  }

  // This is only here as a fallback; the component will redirect before rendering.
  return null;
};

export default Page;
