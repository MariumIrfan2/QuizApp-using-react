import { useLocation } from "react-router-dom";


function Home() {
    
    const location = useLocation();
    console.log(location.state.lastName)
    const firstName = location.state.firstName
    const lastName = location.state.lastName
    const Email = location.state.Email
    const Password = location.state.Password

    return (
        <>

            <h3>First Name: {firstName}</h3>
            <h3>Last Name: {lastName}</h3>
            <h3>Email: {Email}</h3>
            <h3> Password: {Password}</h3>
        </>
    )
}

export default Home;