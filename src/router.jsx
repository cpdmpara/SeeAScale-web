import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage/MainPage.jsx';
import NotFoundPage from '@pages/NotFoundPage/NotFoundPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <NotFoundPage />,
    },
]);

export default router;
