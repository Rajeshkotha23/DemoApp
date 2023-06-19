import Navbar from './Navbar';
import Apple from './Components/Apple/Apple';
import TechCrunch from './Components/TechCrunch/TechCrunch';
import US from './Components/US/US';
import Tesla from './Components/Tesla/Tesla';
import StreetJournals from './Components/StreetJournals/StreetJournals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function Home() {
  return (
  <div>
    <BrowserRouter>
   <Navbar/>
     <Routes>
        <Route path='/' exact Component={Apple} />
        <Route path='/streetjournals' exact Component={StreetJournals} />
        <Route path='/techcrunch' exact Component={TechCrunch} />
        <Route path='/tesla' exact Component={Tesla} />
        <Route path='/us' exact Component={US}/>
     </Routes>
    </BrowserRouter>
 </div>
  );
 
}

export default Home;
