import Posts from "./components/posts/Posts";
import Autorization from "./components/autorization/Autorization";
import Users from "./components/users/Users";
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (

        <Routes>
            <Route path="/" element={<Autorization/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/users" element={<Users/>}/>
        </Routes>

  )
}

export default App;
