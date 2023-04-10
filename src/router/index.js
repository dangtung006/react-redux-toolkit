import { Route, Routes } from 'react-router-dom'
import routes from './routes'

const Router = () => {
    <Routes>
        {
            routes.map(route => {
                return <Route key={route.path}  {...route} />
            })
        }
    </Routes>
}

export default Router;