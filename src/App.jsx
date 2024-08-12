import Blogs from "./components/Blogs/Blogs"
import DisplayBlog from "./components/DisplayBlog/DisplayBlog"
import AddBlog from "./components/AddBlog/AddBlog"

import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<Blogs />} />
        <Route path="/view" element={<DisplayBlog />} />
        <Route path="/add" element={<AddBlog />} />
      </Routes>
    </Router>
  )
}

export default App;
