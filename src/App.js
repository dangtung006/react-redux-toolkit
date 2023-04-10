import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import Router from './router';
import BaseLayout from './layouts/base';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <BaseLayout>
                    <Router />
                </BaseLayout>
            </BrowserRouter>
        </div>
    );
}

export default App;
