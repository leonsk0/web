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
import Report from "./pages/Reports";
import LiberationRequest from "./pages/LiberationRequest";
import SendDocuments from "./pages/SendDocuments";
import ConfirmationDocuments from "./pages/ConfirmationDocuments";
import ConfirmationReports from "./pages/ConfirmationReports";
import ConfirmationSchool from "./pages/ConfirmationSchool";
import Demand from "./pages/Demand";
import ConfirmationRegister from "./pages/ConfirmationRegister";
import RegisterStudent from "./pages/RegisterStudent";
import ConfirmationStudent from "./pages/ConfirmationStudent";
import Release from "./pages/Release";
import LiberationReason from "./pages/LiberationReason";
import ConfirmationRelease from "./pages/ConfirmationRelease";
import ConfirmationReport from "./pages/ConfirmationReport";

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />

            <Route path="/responsible" component={CreateResponsible} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/school-list" component={ListSchool} />
            <Route path="/details" component={DetailsSchool} />
            <Route path="/request" component={RequestConfirmation} />
            <Route path="/documents-school" component={SendDocuments} />
            <Route path="/confirmation-documents" component={ConfirmationDocuments} />
            <Route path="/liberation" component={RequestLiberation} />
            <Route path="/liberation-request" component={LiberationRequest} />
            <Route path="/liberation-confirmation" component={LiberationConfirmation} />
            <Route path="/report" component={Report} />
            <Route path="/confirmation-report" component={ConfirmationReports} />

            <Route path="/school" component={CreateSchool} />
            <Route path="/confirmation-school" component={ConfirmationSchool} />
            <Route path="/demand" component={Demand} />
            <Route path="/confirmation-register" component={ConfirmationRegister} />
            <Route path="/register-student" component={RegisterStudent} />
            <Route path="/confirmation-student" component={ConfirmationStudent} />
            <Route path="/release" component={Release} />
            <Route path="/liberation-reason" component={LiberationReason} />
            <Route path="/confirmation-reason" component={ConfirmationRelease} />
            <Route path="/send-report" component={ConfirmationReport} />
        </BrowserRouter>
    );
}

export default Routes;