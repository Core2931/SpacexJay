import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Homepage from "./components/Homepage";
import Launchespage from "./components/Launchespage";
import Rocketpage from "./components/Rocketpage";
import Navbar from "./components/Navbar/Navbar";
import Rocket from "./components/Detailpage/Rocket";
import Launches from "./components/Detailpage/Launches";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route } from "react-router-dom";
const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <div className="body">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/SpaceX_HW/" component={Homepage} />
        <Route exact path="/SpaceX_HW/Home" component={Homepage} />
        <Route exact path="/SpaceX_HW/Launches" component={Launchespage}/>
        <Route exact path="/SpaceX_HW/Rocket" component={Rocketpage} />
        <Route path="/SpaceX_HW/Rocket/:rocket_id" component={Rocket} />
        <Route path="/SpaceX_HW/Launches/:flight_number" component={Launches}/>
      </BrowserRouter>
    </div>
  </QueryClientProvider>,
  document.getElementById("root")
);