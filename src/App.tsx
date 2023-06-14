import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Cities from "./pages/Cities/Cities";
import City from "./pages/City/City";


const App = (props:any) => {

    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Login />}/>
                <Route path={'/cities'} element={<Cities />} />
                <Route path={'/cities/*'} element={<City />} />
            </Routes>
        </div>
    )
}

export default App
