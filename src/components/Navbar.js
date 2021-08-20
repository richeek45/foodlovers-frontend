import React, { Component, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import "tachyons";
import Searchbox from "./Searchbox";
import Dropdown from "./Dropdown";
import SignIn from "./SignIn";

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      searchfield: "",
      display: false,
      open: false,
    };
  }
  dropdown = React.createRef();

  // clears dropdown display

  async getData() {
    try {
      const url = `http://127.0.0.1:8000/api/v1/meals?page=1&limit=15`;
      const response = await fetch(url);
      const { data } = await response.json();
      this.setState({ items: data.meals });
      // console.log(this.state.items);
    } catch (err) {
      console.error(err);
    }
  }

  async componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.getData();
  }

  // to offset the searchfield input delay by one element
  componentDidUpdate() {
    if (this.state.searchfield.length === 1) this.setState({ searchfield: "" });
  }

  // clears dropdown display
  componentWillUnmount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  // to turn off the display of dropdown outside of the component
  handleClickOutside = (event) => {
    if (
      this.dropdown.current &&
      !this.dropdown.current.contains(event.target)
    ) {
      this.setState({ open: false });
    }
  };

  // filters foodItems according to the searchfield
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
    const { items, searchfield } = this.state;
    console.log(searchfield, items);

    const searchFoods = items.filter((item) => {
      return item.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // passing the selected food items to the parent app.js
    this.props.onSelect(searchFoods);
  };

  // filters foodItems according to the dropdownlist from Category
  onSelectCategory = (food) => {
    const searchFoods = this.state.items.filter((item) => {
      return item.name.toLowerCase().includes(food);
    });
    this.props.onSelect(searchFoods);
  };

  // open the dropdownlist on the category of navbar
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <nav className="dt w-100 pa3 ph6-ns bg-navy flex items-center">
          {/* <div className="dtc v-mid"> */}
            <div
              className="dtc white link dim mr4 "
              onClick={this.props.clearState}
            >
              {/* <img
              src="http://tachyons.io/img/logo.jpg"
              className="dib w2 h2 br-100"
              alt="Site Name"
            /> */}
              <p className="f3">FOODLOVERS</p>
            </div>

            <div className="dtc v-mid w-34 dib ml5 mr5">
              <Searchbox onSearchChange={this.onSearchChange} />
            </div>
            <div
              className="dtc dib mr5 link white f6 f5-ns dib mr3 mr4-ns"
              onClick={this.handleButtonClick}
              ref={this.dropdown}
            >
              Category
              {this.state.open && (
                <Dropdown onSelectCategory={this.onSelectCategory} />
              )}
            </div>
            <div
              className="link dim white f6 f5-ns dib pr3"
            >
              SHOP
            </div>

            {this.props.isLoggedIn ? (
              <Fragment>
                <div className="f6 dib pv2 ph3">
                  <NavLink
                    to="/userprofile"
                    activeClassName="f6 dib white bg-animate hover-bg-green  no-underline pv2 ph4 br-pill ba b--white-20"
                  >
                    Welcome
                  </NavLink>
                <p className="dim white f6 f5-ns dib pr3 ml3">
                  {this.props.user.split(" ")[0]},
                </p>
                </div>

                <div
                  className="f6 dib pv2 ph4"
                  title="SignOut"
                  onClick={this.props.clearState}
                >
                  <NavLink
                    to="/"
                    onClick={this.props.refreshPage}
                    activeClassName="f6 dib white bg-animate hover-bg-green  no-underline pv2 ph4 br-pill ba b--white-20"
                  >
                    Sign Out
                  </NavLink>
                </div>
              </Fragment>
            ) : (
              <div
                className="f6 dib pv2 ph4 "
                title="SignIn"
                onClick={this.props.toggleDisplay}
              >
                <NavLink
                  to="/signin"
                  activeClassName="f6 dib white bg-animate hover-bg-green  no-underline pv2 ph4 br-pill ba b--white-20"
                >
                  Sign In/Sign Up
                </NavLink>
              </div>
            )}
        </nav>
        
      </Fragment>
    );
  }
}

export default Navbar;
