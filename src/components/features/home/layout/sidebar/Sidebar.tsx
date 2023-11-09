import TwootLogo from '@/components/ui/Logo/TwootLogo';
import SidebarOptions from './SidebarOptions';
import PostButton from './PostButton';
import { Home, Search, Bell, Mail, User2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ModeToggle } from '@/theme/mode-toggle';

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
      <div className="flex mt-40 items-center px-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="px-4 md:block hidden leading-none">
          <h3>Goktug Yildiz</h3>
          <h5>@gktgyldz08</h5>
        </div>
        <ModeToggle />
      </div>
    </>
  );
};

export default Sidebar;
