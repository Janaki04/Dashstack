import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Favorites from './components/Favorites';
import OrderLists from './components/OrderLists';
import ProductStock from "./components/ProductStock";
import Calendar from "./components/Calender";
import Pricing from "./components/Pricing";
import TodoList from "./components/Todolist";
import Contact from "./components/Contact";
import Invoice from "./components/Invoice";
import UIElements from "./components/UIElements";
import Team from "./components/Team";
import TablePage from "./components/TablePage";
import Inbox from "./components/Inbox";
import GeneralSettings from "./components/GeneralSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/OrderLists" element={<OrderLists />} />
          <Route path="/ProductStock" element={<ProductStock />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/ui-elements" element={<UIElements />} />
          <Route path="/team" element={<Team />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/settings" element={<GeneralSettings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;