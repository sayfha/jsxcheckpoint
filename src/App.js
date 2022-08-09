
import './App.css';
import Adress from './components/profile/Adress';
import FullName from './components/profile/FullName';
import ProfilPhoto from './components/profile/ProfilPhoto.jsx';

function App() {
  return (
    <div className="App">
    <ProfilPhoto/>
    <FullName/>
    <Adress/>
    </div>
  );
}

export default App;
