import { Outlet } from 'react-router-dom';
import useUser from '@hooks/useUser';
import Header from '@components/Header';

function Home() {
  const {username, fetchMyName, fetchLogIn, fetchLogOut, fetchPreregister} = useUser();
  
  return (
    <>
      <Outlet context={{fetchLogIn, fetchLogOut, fetchPreregister}} />
      <Header props={{username, fetchMyName}} />
    </>
  );
}

export default Home;
