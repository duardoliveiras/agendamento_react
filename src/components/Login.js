import React, {Component} from "react";


class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            email: '',
            password: ''
        }
        this.validaSenha = this.validaSenha.bind(this);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }

    validaSenha(){
        const {email, password} = this.state;
        const url = `http://localhost:8080/cliente/validaSenha?email=${email}&senha=${password}`;

        fetch(url)
        .then(response => {
            if(!response.ok){
                alert("erro");
            }else{
                alert("Sucesso");
            }
        })
        .then((data) => {
            this.setState({data});
        })
        .catch((error) => {
            console.error('Erro na solicitação', error);
        });
    }

    handleSubmit(event){
        event.preventDefault();
    }


render() {
    return(
        <div>
            <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Email:</label>
                <input 
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange} />
            </div>
            <div>
                <label>Password</label>
                <input
                    type="password"
                    name="password" 
                    value={this.state.password}
                    onChange={this.handleInputChange}
/>
            </div>
            <button onClick={this.validaSenha}>Enviar</button>


        </form>
        </div>
    );
}
}

export default Login;