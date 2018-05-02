import React from "react";
import Page from "./components/page/Page";

export default class App extends React.Component {

    render() {
        return (
            <Page/>
        )
    }
}

// import Header from "./Header";
// import { createButton } from "./Buttons/FunctionalButton";
// import ButtonForm from './Buttons/ButtonForm';

// export default class App extends React.Component {

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <ButtonForm/>
//                 {createButton("AAA")}
//             </div>
//         )
//     }
// }