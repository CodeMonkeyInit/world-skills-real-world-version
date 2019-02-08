
//React.Component вместо Component после import React, {Component} from 'react';
class App extends React.Component {

    render() {
        return (
            <div className="App">
                <NavBar/>
            </div>
        );
    }
}


//не нужен "export default App;"