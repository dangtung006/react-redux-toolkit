import AboutContainer from "../pages/about/about.container";
import HomeContainer from "../pages/home/home.container";
import LoginContainer from "../pages/login/login.container";
import UserContainer from "../pages/users/user.container";

export const ROUTECONFIGS = {
    HOME: '/',
    LOGIN: '/login',
    USERS: '/user',
    ABOUT: '/about',
}

const routes = [
    {
        path: ROUTECONFIGS.HOME,
        element: <HomeContainer />,
    },

    {
        path: ROUTECONFIGS.USERS,
        element: <UserContainer />,
    },

    {
        path: ROUTECONFIGS.ABOUT,
        element: <AboutContainer />,
    },

    {
        path: ROUTECONFIGS.LOGIN,
        element: <LoginContainer />,
    }
]

export default routes;
