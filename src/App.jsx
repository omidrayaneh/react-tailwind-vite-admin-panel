import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Layout from './shared/Layout';
function App() {
  return (
    <div className="flex">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Dashboard/>}/>
            <Route path='products' element={<Products/>}/>

          </Route>
          <Route path='login' element={<div>login</div>}/>
          <Route path='register' element={<div>register</div>}/>
        </Routes>
        </Router>
    
    </div>
  );
};
export default App;