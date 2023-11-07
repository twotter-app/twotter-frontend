import Feed from '@/components/features/home/layout/feed/Feed';
import Sidebar from '@/components/features/home/layout/sidebar/Sidebar';
import Widget from '@/components/features/home/layout/widget/Widget';
import { useUserAuth } from '@/features/auth/hooks/useUserAuth';
import { useEffect } from 'react';
export const HomePage = () => {
  const { checkIfUserAuthenticated } = useUserAuth();

  useEffect(() => {
    checkIfUserAuthenticated();
  }, [checkIfUserAuthenticated]);

  return (
    <div className="flex h-screen max-w-7xl ml-auto mr-auto">
      <div className="border-r ml-5 basis-1/4 mt-0">
        <Sidebar />
      </div>
      <Feed />
      <div>
        <Widget />
      </div>
    </div>
  );
};
