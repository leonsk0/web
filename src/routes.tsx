import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateSchool from "./pages/CreateSchool";
import Confirmation from "./pages/Confirmation";
import CreateResponsible from "./pages/CreateResponsible";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/school" component={CreateSchool} />
            <Route path="/responsible" component={CreateResponsible} />
            <Route path="/confirmation" component={Confirmation} />
        </BrowserRouter>
    );
}

export default Routes;