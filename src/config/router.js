import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/home";
import SignUp from "../screens/signup";


function AppRouter() {
    return (
        <>

            <BrowserRouter>
                <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="/" element={<SignUp />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default AppRouter;