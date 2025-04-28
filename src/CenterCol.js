import logo from './logo.svg';
import './Default.css';


function NavBar() {
  return(
    <div className="NavBar">
      <div className="NavLeftButtons">
        <div className="PageTitle">
          <span>🔥PageTitle</span>
        </div>
        <div className="NavigationList">
          <span>pl1</span>
          <span>pl1</span>
          <span>pl1</span>
          <span>pl1</span>
          <span>pl1</span>
        </div>
      </div>
      <div className="NavRightButtons">
        <span>
          Email
        </span>
        <span>
          Acct
        </span>
      </div>
    </div>
  )
}

function InformationSections() {
  return(
    <div class="InfoCols">
      <Section  label="About" />
      <Section  label="Members" />
      <Section  label="New Events" />
    </div>
  )
}

function Section({SectionContent, label}) {
  const content = {
    "About": "about me info stuff about me info stuff about me info stuff about me info stuff about me info stuff about me info stuff ", 
    "Members": "member info stuffmember info stuffmember info stuffmember info stuffmember info stuffmember info stuffmember info stuff",
    "New Events": "new event info stuffmember info stuffmember info stuffmember info stuffmember info stuff",
  }
  
  return(
    <div className="Section">
      <div className="SectionTitleDiv">
        <p className="SectionTitle">
          {label}
        </p>
      </div>
      <div className="SectionTextDiv">
        <p className="SectionText">
          {content[label]}
        </p>
      </div>
    </div>
  )
}
function CenterCol() {
  return(
    <div className="CenterCol">
      <NavBar />
      <InformationSections />
    </div>
  )
}

export default CenterCol;
