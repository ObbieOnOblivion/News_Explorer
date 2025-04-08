import "../header/Header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="header__title">Header</h1>
      <h1 className="header__title">Header</h1>
      <h1 className="header__title">Header</h1>
      <button
        className="header__title"
        onClick={console.log(document.querySelectorAll("*"))}
      >
        Header
      </button>
    </div>
  );
}

export default Header;
