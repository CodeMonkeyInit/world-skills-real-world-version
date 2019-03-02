
class Login extends React.Component {
    state = {
        login: "",
        password: ""
    };

    handleInput = ({target: {name, value}}) => this.setState({[name]: value});

    async login() {
        let loginManager = new LoginManager();

        if (await loginManager.login(this.state['login'], this.state['password'])) {
            this.props.onLogin();
        }

        return false;
    }

    render() {
        return (
            <div className='login-form card'>
                <Input type="text"
                       placeholder="Логин"
                       name="login" onChange={this.handleInput} value={this.state.login}/>
                <Input type="password"
                       placeholder="Пароль"
                       name="password"
                       onChange={this.handleInput}
                       value={this.state.password}/>

                <button className="app-button" onClick={() => this.login()}>Отправить</button>
            </div>
        );
    }
}
