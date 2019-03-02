class Home extends React.Component {

    state = {
        rooms: [],
        selectedRoom: null
    };

    async getRooms() {

        let response = await fetch(Environment.apiPath + Environment.apiRoutes.rooms, {
            headers: Environment.getHeaders(LoginManager.getToken())
        });

        let rooms = await response.json();

        this.setState({rooms: rooms});
    }

    componentWillMount() {
        // noinspection JSIgnoredPromiseFromCall
        this.getRooms();
    }


    getContent() {
        if (this.state.selectedRoom) {
            return <Room room={this.state.selectedRoom} back={() => this.setState({selectedRoom: null})}/>
        }

        return (
            <div className="card">
                {this.renderRooms()}
            </div>);
    }

    renderRooms() {
        return this.state.rooms.map(room => (
            <div key={room.id}>
                <h2 onClick={() => this.setState({selectedRoom: room})}>{room.name}</h2>
                <img src={room.image}/>
            </div>
        ));
    }

    render() {
        if (!this.state.rooms.length) {
            return <Loading/>;
        }

        return this.getContent();
    }
}