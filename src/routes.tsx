import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateSchool from "./pages/CreateSchool";
import Confirmation from "./pages/Confirmation";
import CreateResponsible from "./pages/CreateResponsible";
import { ListSchool } from "./pages/ListSchools";
import DetailsSchool from "./pages/DetailsSchool";
import RequestConfirmation from "./pages/RequestConfirmation";
import RequestLiberation from "./pages/RequestLiberation";
import LiberationConfirmation from "./pages/LiberationConfirmation";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/school" component={CreateSchool} />
            <Route path="/responsible" component={CreateResponsible} />
            <Route path="/confirmation" component={Confirmation} />


            <Route path="/school-list" component={ListSchool} />

            <Route path="/details" component={DetailsSchool} />
            <Route path="/request" component={RequestConfirmation} />

            <Route path="/liberation" component={RequestLiberation} />
            <Route path="/liberation-confirmation" component={LiberationConfirmation} />
        </BrowserRouter>
    );
}

export default Routes;