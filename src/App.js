import "./App.css"
import AddRole from "./layouts/forms/addRole";
import Header2 from "./layouts/headers/header2";

function App() {
    return (
        <div className="App">
            <Header2></Header2>
            <div className="container">
                <AddRole></AddRole>
            </div>
        </div>
    );
}

export default App;
