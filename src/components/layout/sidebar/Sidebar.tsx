// SKY
// Import all options and other necessery files for sidebar here
import TwootLogo from "@/components/ui/Logo/TwootLogo";
import SidebarOptions from "./SidebarOptions";
import PostButton from "./PostButton";
import { Home, Search, Bell, Mail, User2 } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <TwootLogo />
      <SidebarOptions text="Home">
        <Home />
      </SidebarOptions>
      <SidebarOptions text="Search">
        <Search />
      </SidebarOptions>
      <SidebarOptions text="Notification">
        <Bell />
      </SidebarOptions>
      <SidebarOptions text="Messages">
        <Mail />
      </SidebarOptions>
      <SidebarOptions text="Profile">
        <User2 />
      </SidebarOptions>
      <PostButton />
    </>
  );
};

export default Sidebar;
