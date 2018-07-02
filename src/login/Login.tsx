import * as React from 'react';
import axios from 'axios'
import UserService from '../UserService'
import { login } from '../actions'
import { connect } from 'react-redux'
import User from './User'

class Login extends React.Component<any, any> {

    private emailInput: any
    private passInput: any

    constructor(props: any){
        super(props);
    } 

    // the render portion of this should probably be broken into its own "presentational component"
    // and this class would be become a "container component" that handles updating state using the store
    public render() {
        return (
            <div className="col-6 container center">
                <form onSubmit={e => this.login(e)}>
                    <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required={true} autoFocus={true}
                     ref={node => this.emailInput = node } />
                    <label htmlFor="inputPassword"  className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required={true}
                      ref={node => this.passInput = node} />
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2018 {(this.props.token ? this.props.token : "") + "dd"}</p>
                </form>
            </div>
        );
    }

    private isBrandonTesting = false;

    private login(event: any) {
       let email = this.emailInput.value
       let pass = this.passInput.value

       // mock return if 'test' for now because I can't figure out how to connect to the API gateway
       if (!this.isBrandonTesting) {
         axios.post("/v1/login", {
             username: email,
             password: pass
         }, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8'
          },
        })
         .then(response => {
              // response.data currently looks like:
              // { token: '', id: '', username: '', handle: '', email: '', guildIds: ['',]}
              new UserService().saveUser(response.data)
              // this.props.persistLogin(TODO)
         }).catch(error => {
             console.log(error)
             UserService.USER.token = "error"
         })
       } else {
         // mock data
         let json = {
           token:'TEST_TOKEN',
           id:'1',
           username:'test@test.com',
           handle:'tester',
           email:'test@test.com',
           guildIds: []
         }
         // don't think we need this anymore
         new UserService().saveUser(json)

         this.props.persistLogin(User.fromJson(json), json.token)
       }

       event.preventDefault(); 
    }
}

const mapStateToProps = (state: any, props: any) => ({
  token: state.token
})

const mapDispatchToProps = (dispatch: any, props: any) => ({
  persistLogin: (user: User, token: string) => dispatch(login(user, token))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
