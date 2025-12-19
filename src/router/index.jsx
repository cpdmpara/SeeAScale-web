import { createBrowserRouter } from 'react-router-dom';
import Home from '@pages/Home';
import { LogIn, LogOut, Preregister } from '@components/Modal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/login',
        element: <LogIn />
      },
      {
        path: '/logout',
        element: <LogOut />
      },
      {
        path: '/preregister',
        element: <Preregister />
      },
    ]
  }
]);

export default router;
