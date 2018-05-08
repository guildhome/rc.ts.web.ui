import * as React from 'react';
import axios from 'axios'
import UserService from '../UserService'

class Login extends React.Component<any, any> {
    public state: any;

    constructor(props: any){
        super(props);
        this.state = {
            email: '',
            pw: ''
        };
        
    } 

    onPwChange(e:any) {
        if(e.target != null && e.target.value != null)
        this.setState({pw: e.target.value})
    }

    onEmailChange(e:  any) {
        if(e.target != null && e.target.value != null)
        this.setState({email: e.target.value})
    }
    public render() {
        return (
            <div className="col-6 container center">
                <form onSubmit={e => this.login(e)}>
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" value={this.state.email} className="form-control" placeholder="Email address" required={true} autoFocus={true} onChange={e => this.onEmailChange(e)} />
                    <label htmlFor="inputPassword"  className="sr-only">Password</label>
                    <input type="password" value={this.state.pw} id="inputPassword" className="form-control" placeholder="Password" required={true} onChange={e => this.onPwChange(e)} />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018 {UserService.USER.token + "dd"}</p>
                </form>
            </div>
        );
    }

    private login(event: any) {
       axios.post("/v1/login", {
           username: this.state.email,
           password: this.state.pw
       }, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
      })
       .then(response => {
            new UserService().saveUser(response.data)
       }).catch(error => {
           UserService.USER.token = "error"
       })

       event.preventDefault(); 
    }
}

export default Login;
