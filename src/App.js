
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Footer from './Footer';
import Main from './Main';
import Page from './Page';


import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div>
         <Header />
        <Routes>
        <Route path='/' element={<Page/>}/>
          <Route path='/main/*' element={<Main data={props.data.PostPage}/>}/>
          <Route path='/profile/*' element={<Profile/>}/>
       
        </Routes>
        <hr/>
         <Footer/>
     </div>
    </BrowserRouter>


  );
}

export default App;
