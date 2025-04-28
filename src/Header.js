import './Default.css';

function HeaderLink({pageDirect, linkName}) {
  return (
    <a
    className="HeaderLink"
    href={pageDirect}
    target="_blank"
    rel="noopener noreferrer"
    >
    {linkName}
    </a>
  )
}

function Socials() {
  return (
    <div 
    className="PageLinks"
    >
      <ul>
        <li><HeaderLink pageDirect="https://www.instagram.com/ehmeeli.t" linkName="instagram"/></li>
        <li><HeaderLink pageDirect="https://www.youtube.com/@sexycraig" linkName="youtube"/></li>
      </ul>
    </div>
  )
}

function Header() {
  return (
    <div className="Page-header">
    <a
      className="BandTitle"
      href="./index.html"
      >
        <h1>Sexy Craig</h1>
      </a>
    <Socials />
    </div>
  )
}



export default Header;
