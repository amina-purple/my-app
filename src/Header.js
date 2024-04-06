import Nav from "./Nav";

const Header = () => {
  return(
    <header>
      <div className="container">
        <div className="header-inner">
        
      <a href="/">     <img src="img/loGO.png" alt="logo"/></a>
          <Nav/>
        </div>
      </div>
    </header>
  ) 
};
export default Header;
