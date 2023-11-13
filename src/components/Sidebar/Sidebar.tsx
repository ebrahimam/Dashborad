import style from "./sidebar.module.scss";
import {
  BsCardHeading,
  BsHeart,
  BsStar,
  BsPerson,
  BsGear,
  BsMicrosoft,
  BsUnindent,
} from "react-icons/bs";
const Sidebar = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.inner}>
          <ul>
            <li>
              <a href="#">
                <BsMicrosoft size={22} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsCardHeading size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsHeart size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsStar size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsPerson size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsGear size={20} />
              </a>
            </li>
            <li>
              <a href="#">
                <BsUnindent size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
