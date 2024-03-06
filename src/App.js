
import './App.css';
import Category from './components/Category/Category';
import Subcategory from './components/Subcategory/Subcategory';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Home/Home';
import Categorydetails from './components/Category/Categorydetails';
import Subcategorydetails from './components/Subcategory/Subcategorydetails';
import Home from './components/Adminpanel/Home';
import Item from './components/item/Item';
import Itemdetails from './components/item/Itemdetails';

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Routes>
        <Route path={'/'}element={<Login/>}></Route>
        <Route path={'/Home'}element={<Home/>}></Route>
      
        <Route path={'/viewdetails'}element={<Categorydetails method='get'/>}></Route>
        <Route path={'/sview'}element={<Subcategorydetails method='get'/>}></Route>
        <Route path={'/itview'}element={<Itemdetails method='get'/>}></Route>
        
       <Route path='/s'element={<Subcategory method='post'/>}/>
      <Route path='/c'element={<Category method='post'/>}/>
      <Route path='/i'element={<Item method='post'/>}/>
      </Routes>
     </BrowserRouter>
     
      
    </div>
  );
}

export default App; 
