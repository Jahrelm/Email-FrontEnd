import Main from "./Main";
import SideNav from "./SideNav";

export default function MainLayout() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-10/12 h-screen flex h-[90vh] bg-blue-200">
        <SideNav />
        <Main />
      </div>
    </div>
  );
}
