import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import "./index.css";

import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
    <Router>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <App/>
        </DevSupport>
    </Router>
);

