import { useRef, useEffect } from 'react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';     
import '../../styles/AdminLoginstyle.css'; 


function AdminLogin({ setJwt }) {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        await Login(emailRef.current.value, passwordRef.current.value, setJwt)
        return window.location.reload()
    }

    // useEffect(() => {
    //     localStorage.clear();
    // }, [])

    return (

        <div className="container-fluid adminloginbg">
            <div className="navbar mt-3">
                <a className="navbar-brand m-auto" href='/' style={{ fontSize: '2rem' }}>GoodReads</a>
            </div>
            <div className="adminlogincart col-sm-4 col-xl-4 m-auto ">
                <h2 className="mb-5 mt-5">Admin - sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 mx-auto">
                        <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                        <input type="text"
                            className="form-control border rounded-4"
                            id="formGroupExampleInput"
                            ref={emailRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                        <input type="password"
                            className="form-control border rounded-4"
                            id="formGroupExampleInput2"
                            ref={passwordRef} />
                    </div>
                    <button type="submit" className="btn ms-3 px-5 als" id='als'>Login</button>
                </form>
            </div>
        </div>
    )
};

export default AdminLogin;