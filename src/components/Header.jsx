import logo from "/book.svg";
import search from "/search.svg";
import bars from "/bars.svg";
const Header = () => {
  return (
    <div className="header row">
        <img src={logo} className="logo" alt="Framescape"/> 
        <h2 className="custom_font navtext">Home</h2>
        <h2 className="custom_font navtext">Feed</h2>
        <h2 className="custom_font navtext">About</h2>
        <div className="searchbar row">
            <input type="text" className="searchinput" placeholder="Search" />
            <img src={search} alt="search" className="searchicon" />
        </div>
        <img src={bars} alt="bars" className="bars" />
    </div>
  )
}

export default Header