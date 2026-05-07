import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Favorites from './components/Favorites';
import OrderLists from './components/OrderLists';
import ProductStock from "./components/ProductStock"


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/OrderLists" element={<OrderLists/>}/>
         <Route path="/ProductStock" element={<ProductStock/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;