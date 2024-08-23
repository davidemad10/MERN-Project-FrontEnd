import AdminLogin from './AdminPanelTableComponents/AdminLogin';
import AdminPanel from './AdminPanelTableComponents/AdminPanel';
import { useState, useEffect } from 'react';

function Admin() {

  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));

  useEffect(() => {
    const storedJwt = localStorage.getItem('jwt');
    setJwt(storedJwt);
  }, []);

  return (
    <>
      {jwt ? <AdminPanel/> : <AdminLogin setJwt={setJwt}/>}
    </>
  );
}

export default Admin;