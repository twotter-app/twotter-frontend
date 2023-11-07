// SKY
// here is where sidebaroptions created from
// options:  Home, Search, Notify, Message, Profile

interface SidebarOptionsProps {
  children: React.ReactNode;
  text: string;
}

const SidebarOptions: React.FC<SidebarOptionsProps> = ({ children, text }) => {
  return (
    <div className="flex items-center cursor-pointer p-4 hover:bg-blue-300 rounded-2xl">
      <div className="hover:bg-violet-600 rounded-3xl h-10 w-10 flex items-center justify-center">
        {children}
      </div>
      <h2 className="mr-5 pl-5 text-lg font-semibold md:block hidden">
        {text}
      </h2>
    </div>
  );
};

export default SidebarOptions;
