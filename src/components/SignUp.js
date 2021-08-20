import React from "react";
import "./SignIn.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onPasswordConfirmChange = (event) => {
    this.setState({ passwordConfirm: event.target.value });
  };

  onSubmitRegister = () => {
    fetch("http://127.0.0.1:8000/api/v1/users/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        passwordConfirm: this.state.passwordConfirm,
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        console.log({ data });
        // this.props.onUserLoggedIn(data.user.name);
        this.props.toggleDisplay();
      })
      .catch((error) => console.error("Error: ", error));
  };

  render() {
    console.log(this.props.display)
    const signup = (
      <div>
        <article
          id="disp"
          className=" br3 ba b--black-10 mv4 w-100 w-50-m w-25-l shadow-5 mw6 center"
        >
          <main className="pa3 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign Up</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
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
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">
                    Password Confirm
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    onChange={this.onPasswordConfirmChange}
                  />
                </div>
                <label className="pa0 ma0 lh-copy f6 pointer">
                  <input type="checkbox" /> Remember me
                </label>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Register"
                  onClick={this.onSubmitRegister}
                />
              </div>
              <div className="lh-copy mt3">
                <a
                  href="#0"
                  className="f6 link dim black db pointer"
                  // onClick={() => onRouteChange("signin")}
                >
                  <Link to="/signin">Sign In</Link>
                </a>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
    return (this.props.display) ? signup  : "";
  }
}

export default SignUp;
