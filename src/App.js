
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Footer from './Footer';
import Main from './Main';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div>
         <Header />
        <Routes>
          <Route path='/main/*' element={<Main data={props.data.PostPage}/>}/>
          <Route path='/profile/*' element={<Profile/>}/>
       
        </Routes>
         <Footer/>
     </div>
    </BrowserRouter>


  );
}

export default App;
