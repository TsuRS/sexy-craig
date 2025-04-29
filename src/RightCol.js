import logo from './logo.svg';
import './Default.css';
import './RightCol.css';


function LanguageToggle() {
  return(
    <select className="ChangeLang">
      <option value="lang=en&setlang=1">english</option>
    </select>
  )
}

function LocationsList() {
  return(
    <div className="LocationsList">
      <div>tressider</div>
      <div>arbor</div>
      <div>oncall</div>
      <div>white plaza</div>
      <div>palm drive</div>
    </div>
  )
}

function RightCol() {
  return(
    <div className="RightCol">
      <LanguageToggle />
      <div className="LocationDiv">
        <div className="LocationHeader">nearby</div>
        <LocationsList />
      </div>
    </div>
  )
}

export default RightCol;
