import logo from './logo.svg';
import './Default.css';
import './LeftCol.css';


function Title() {
  return(
    <div className="SiteTitle">👦Sexy Craig</div>
  )
}

function EmailButton() {
  return(
    <div className="EmailButtonDiv">
      <button className ="EmailButton">Email Sexy Craig</button>
    </div>
  )
}

function SearchBar() {
  return(
    <input type="text" placeholder="search past gigs" autoComplete="off" autoCapitalize="none"></input>
  )
}

function EventCalendar() {
  //script to create calendar
}

function PageLinks() {
  return (
    <div 
    className="PageLinks"
    >
      <HeaderLink pageDirect="https://www.instagram.com/sexy_craig" linkName="instagram"/>
      <HeaderLink pageDirect="https://www.youtube.com/@sexycraig" linkName="youtube"/>
    </div>
  )
}

function HeaderLink({pageDirect, linkName}) {
  return (
    <div>
      <a
      className="HeaderLink"
      href={pageDirect}
      target="_blank"
      rel="noopener noreferrer"
      >
      {linkName}
      </a>
    </div>
  )
}

function LeftCol() {
  return(
    <div className="LeftCol">
      <Title />
      <EmailButton />
      <SearchBar />
      <EventCalendar />
      <PageLinks />
    </div>
  )
}

export default LeftCol;
