class App extends React.Component {
    state = {
        renderingElement: <Home/>,
        isLogged: false
    };

    wasLogged() {
        this.setState({isLogged: true});
    }

    getContent() {
        let content = <Login onLogin={() => this.wasLogged()}/>;

        if (this.state.isLogged) {
            content = this.state.renderingElement;
        }

        return content;
    }

    roomSelected(room) {
        this.setState(room);
    }

    render() {
        return (
            <div className="App">
                <NavBar selected={element =>
                    this.setState({renderingElement: element})}/>

                {this.getContent()}
            </div>
        );
    }

    navbarItemSelected(element) {
        this.setState({renderingElement: element});
    }
}
