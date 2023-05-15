import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateSchool from "./pages/CreateSchool";
import Confirmation from "./pages/Confirmation";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/school" component={CreateSchool} />
            <Route path="/confirmation" component={Confirmation} />
        </BrowserRouter>
    );
}

export default Routes;