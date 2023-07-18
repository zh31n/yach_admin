import './App.scss'
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Cities from "./pages/Cities/Cities";
import City from "./pages/City/City";
import Yachta from "./pages/Yachta/Yachta";
import {useState} from "react";


const App = (props: any) => {

    const [isAuth, setIsAuth] = useState(false);

    return (
        <div className='App'>
            <Routes>
                <Route path={'/'} element={<Login isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                <Route path={'/cities'} element={<Cities isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                <Route path={'/cities/:townId'} element={<City isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
                <Route path={'/yachts/*'} element={<Yachta isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
            </Routes>
        </div>
    )
}

export default App
