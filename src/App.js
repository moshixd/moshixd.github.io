import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./components/Home";


function App() {
    const [people, setPeople] = useState([]);


    useEffect(() => {
       async function fetchPeople() {
           let res = await fetch('https://swapi.dev/api/people/?format=json')
           let data = await res.json();
           setPeople(data.results);
       }


       fetchPeople();
    }, [])
    return <>
        <Router>
            <Navbar/>
                    <Switch>
                        <Route exact path='/'>
                            <Home data={ people }/>
                        </Route>
                    </Switch>
        </Router>

    </>
}
export default App;