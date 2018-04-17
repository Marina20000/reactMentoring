import React from "react";
import Header from "./Header";
import { createButton } from "./Buttons/FunctionalButton";
import ButtonForm from './Buttons/ButtonForm';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <ButtonForm/>
                {createButton("AAA")}
            </div>
        )
    }
}

