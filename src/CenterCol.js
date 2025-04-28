import logo from './logo.svg';
import './Default.css';
import './CenterCol.css';


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
      <Section  label="about" />
      <Section  label="members" />
      <Section  label="new events" />
      <Section label="past performances" />
      <Section label="placeholder" />
      <Section label="placeholder" />
      <Section label="placeholder" />
      <Section label="placeholder" />
      <Section label="placeholder" />
    </div>
  )
}

function Section({SectionContent, label}) {
  const content = {
    "about": "hi! we are sexy craig, stanford's premiere six-person band. our focus is on pop/jazz, with an emphasis on covers and arrangements.", 
    "members": "our members are: medha on vocals, emily on drums, eddy on keyboard, sunny on guitar, and issa on bass.",
    "new events": "our first live performance is coming up on may 24th, at tressider (on the side of the package center), from 7pm-8pm!",
    "past performances": "below is a list of our past performances, link1, link2. stay tuned for more, posted on our instagram and youtube!",
    "placeholder": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
  
  return(
    <div className="Section">
      <div className="SectionTitleDiv">
        <p className="SectionTitle">
          {label}
        </p>
      </div>
      <div className="SectionTextDiv">
        <div className="SectionText">
          {content[label]}
        </div>
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
