import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";
import Chat from 'chat/Chat';

import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const App = () => <Container>
    <p>
        lorem ipsum
    </p>
    <h1>Chat!</h1>
    <Chat />
    <p>lorem ipsum</p>
</Container>;

ReactDOM.render(<App />, document.getElementById("app"));
