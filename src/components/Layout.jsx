import { Outlet } from 'react-router-dom';
import Sidebar from '../CommonComponents/Sidebar';
import Header from '../CommonComponents/Header';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-[#F5F6FA] font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="p-4 lg:p-8 overflow-y-auto">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;