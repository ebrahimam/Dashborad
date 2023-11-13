import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar";
import style from "./Layout.module.scss"
const Layout = ({ children }) => {
  return (
    <div>
      
      {children}
      <div className={style.sidebar}>
      <Sidebar/>
      </div>
    </div>
  );
};

export default Layout;