import "./App.css"
import { BrowserRouter } from 'react-router-dom'
import Router from './router';
import BaseLayout from './layouts/base';
import stores from "./stores/stores";
import { Provider } from "react-redux";

function App() {
    return (
        <div className="App">
            <Provider store={stores}>
                <BrowserRouter>
                    <BaseLayout>
                        <Router />
                    </BaseLayout>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
