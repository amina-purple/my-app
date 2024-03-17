import Nav from "./Nav";

const Header = () => {
  return(
    <header>
      <div className="container">
        <div className="header-inner">
          <img src="img/loGO.png" alt="logo"/>
         
          <Nav/>
        </div>
      </div>
    </header>
  ) 
};
export default Header;
