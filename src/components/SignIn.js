import React from "react";
// import SignUp from './SignUp';
import "./SignIn.css";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: "",
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    // POST request using fetch() -> sending data to the backend
    fetch("http://127.0.0.1:8000/api/v1/users/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        // this.setState({id})
        console.log(this.props)
        this.props.onUserLoggedIn(data.user.name);
        this.props.toggleDisplay();
        console.log(data.user.name);
      })
      .catch((error) => console.error("Error: ", error));
  };

  render() {
    console.log(this.props.display);
    const signin = (
      <div>
        <article
          id="disp"
          className=" br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"
        >
          <main className="pa3 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer">
                  <input type="checkbox" /> Remember me
                </label>
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign in"
                />
              </div>
              <div className="lh-copy mt3">
                <a
                  href="#0"
                  className="f6 link dim black db pointer"
                >
                  <Link to="/signup">Register</Link>
                </a>
                <div href="#0" className="f6 link dim black db">
                  <div>
                    <Link to="/forgotPassword">Forgot your password?</Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
    return this.props.display ? signin : "";
  }
}

export default SignIn;
