import Posts from "./components/posts/Posts";
import Autorization from "./components/autorization/Autorization";
import {Routes, Route} from 'react-router-dom'
import './App.css';

function App() {

    return (
        <Routes>
            <Route path="/" element={<Autorization/>}/>
            <Route path="/main" element={<Posts/>}/>
        </Routes>
    )
}

export default App;
