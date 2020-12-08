import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Albums from "./components/Albums";
import Photos from "./components/Photos";
import React, { useState, useEffect } from "react";

function App() {
  const [data_albums, setAlbums] = useState([null]);
  const [data_users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data_albums) => setAlbums(data_albums));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data_users) => setUsers(data_users));
  });

  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Albums data_albums={data_albums} data_users={data_users} />
          </Route>
          <Route path="/pics/:topic" component={Photos}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
