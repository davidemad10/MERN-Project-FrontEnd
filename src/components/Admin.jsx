import { useState, useEffect } from 'react';
import AdminLogin from './AdminPanelTableComponents/AdminLogin';
import AdminPanel from './AdminPanelTableComponents/AdminPanel';
import checker from './AdminPanelTableComponents/checker';

function Admin() {
  const storedjwt = localStorage.getItem('jwt');
  // console.log("jwt from Admin: ", storedjwt)
  const [jwt, setJwt] = useState(storedjwt);
  // console.log("jwt from Admin: ", jwt)
  const [isValid, setIsValid] = useState(false);
  const validateToken = async () => {
    const result = await checker();
    // console.log(result)
    if (result.valid) {
      setIsValid(true);
    } else {
      setIsValid(false);
      // setJwt(null); // Clear JWT if invalid
      // localStorage.removeItem('jwt');
    }
  };
  useEffect(() => {
    validateToken();
  }, []);

  return (
    <>
      {isValid ? <AdminPanel /> : <AdminLogin setJwt={setJwt} />}
    </>
  );
}

export default Admin;
