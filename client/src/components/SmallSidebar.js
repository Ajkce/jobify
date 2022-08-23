import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/appContext";

import Logo from "./Logo";

const SmallSidebar = () => {
  const {showSidebar, toggleSidebar} = useGlobalContext();


  return (
    <Wrapper>
      <div className={showSidebar ?  `sidebar-container show-sidebar` : `sidebar-container`}>
        <div className="content">
          <button
            className="close-btn"
            type="button"
            onClick={toggleSidebar}
          >
            <FaTimes></FaTimes>
          </button>
          <header>
            <Logo></Logo>
          </header>
          
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
