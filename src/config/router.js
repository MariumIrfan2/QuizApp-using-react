import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import Home from "../screens/home";


function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <ol>
                        <li>
                            <Link to='home'>Home</Link>
                        </li>

                        <li>
                            <Link to='signup'>SignUp</Link>
                        </li>

                        <li>
                            <Link to='login'>Login</Link>
                        </li>

                    </ol>
                </nav>
                <Routes>
                    <Route path='signup' element={<SignUp />} />
                    <Route path='login' element={<Login />} />
                    <Route path="home" element={<Home />} />
                </Routes>

            </BrowserRouter>


        </>
    )
}

export default AppRouter;