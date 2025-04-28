import logo from './logo.svg';
import LeftCol from './LeftCol';
import CenterCol from './CenterCol';
import RightCol from './RightCol'
import './Default.css';

function LandingPage() {
  return (
    <div className="content">
      <LeftCol />
      <CenterCol />
      <RightCol />
    </div>
  )
}


export default LandingPage;
