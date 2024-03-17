import { NavLink } from "react-router-dom"; 

const Nav = () => {
  return(
    <nav className=" header-nav"> 
      <NavLink to="/main">Main</NavLink>
      <NavLink to="/profile">Profile</NavLink>
        <img  src="img/pro-img.png"alt="pro-img"/>
      
    </nav>
  ) 
};
export default Nav;
