import { Route } from "wouter";
import "./App.css";
import Connect from "./components/Connect";
import HomePage from "./components/Home";
import Mentors from "./components/Mentors";
import Navbar from "./components/Navbar";
import Payment from "./components/Payment";
import Resources from "./components/Resources";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/" component={HomePage} />
      <Route path="/payment" component={Payment} />
      <Route path="/mentors" component={Mentors} />
      <Route path="/connect" component={Connect} />
      <Route path="/resources" component={Resources} />
    </>
  );
}

export default App;
