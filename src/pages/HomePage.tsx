import Feed from "@/components/layout/feed/Feed";
import Sidebar from "@/components/layout/sidebar/Sidebar";

export const HomePage = () => {
  return (
    <div className="flex h-screen max-w-7xl ml-auto mr-auto">
      <div className="border-r mt-5 ml-5 mlr-5 basis-1/4">
        <Sidebar />
      </div>
      <Feed />
    </div>
  );
};
