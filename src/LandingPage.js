import logo from './logo.svg';
import Header from './Header.js';
import './Default.css';

function LandingPage() {
  return (
    <div className="content">
      <Header />
      <div>
        <h2>hi</h2>
        <p>we are <h2>sexy craig</h2></p>
        <p>
          our members are: 
          <ul>
            <li>emily on drums</li>
            <li>medha on vocals</li>
            <li>sunny on guitar</li>
            <li>eddy on keyboard</li>
            <li>minoo on something</li>
            <li>issa on bass</li>
          </ul>
        </p>
        <p>we perform at stanford</p>
        <p>please contact us through instagram at: </p>
        <a
          href="https://www.instagram.com/ehmeeli.t"
        >
          Sexy Craig
        </a>
        
      </div>
    </div>
  )
}

export default LandingPage;
