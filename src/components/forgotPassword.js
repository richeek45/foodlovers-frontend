import React from "react";
// import SignUp from './SignUp';
import "./SignIn.css";
import {Link} from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      email: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onSubmitSignIn = () => {
    // POST request using fetch() -> sending data to the backend
    fetch("http://127.0.0.1:8000/api/v1/users/forgotPassword", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        // this.setState({id})
        this.props.onUserLoggedIn(data.user.name);
        this.props.onRouteChange("home");
        console.log("Route changed from signIn to home");
        console.log({ data });
      })
      .catch((error) => console.error("Error: ", error));
  };

  render() {
    return (
      <div>
        <article
          id="disp"
          className=" br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"
        >
          <main className="pa3 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">
                  Forgot your Password?
                </legend>
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
              </fieldset>
              <div>
                <input
                  onClick={this.onSubmitSignIn}
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Enter you email"
                />
              </div>
              <div>
                <Link to='/signin' >Sign In</Link>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default SignIn;
