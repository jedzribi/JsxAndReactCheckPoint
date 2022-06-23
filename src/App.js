import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';

function App() {
  return (
    <div className='app'>
    <div className='Profile'>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
      <p className='NB'>NB:You can't select or copy any information</p>
    </div>
    </div>
  );
}
export default App;