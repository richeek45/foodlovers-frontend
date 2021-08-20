import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Navbar from "./components/Navbar";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import UserProfile from "./components/userProfile";
import ForgotPassword from "./components/forgotPassword";

const initialState = {
  selectedFood: null,
  display: false,
  loading: true,
  page: 0,
  limit: 5,
  offset: 0,
  data: [],
  perPage: 3,
  currentPage: 0,
  isLoggedIn: false,
  user: "",
  route: 'homepage'
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
    this.receivedData = this.receivedData.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  // after searching the required food items
  onSearch = (anyFood) => {
    let meals;
    //if returned searched array more than 3(perPage) then return same page array
    if (anyFood.length > 3) {
      meals = anyFood.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      // if searched array is 3 or less
    } else {
      meals = anyFood.slice(0, this.state.perPage);
    }
    console.log(this.state.offset);
    this.setState({
      pageCount: Math.ceil(anyFood.length / this.state.perPage),
      selectedFood: meals,
      loading: false,
      currentPage: 0,
    });
    // this.setState({selectedFood: anyFood})
    console.log(this.state.selectedFood);
  };

  // To change the state to its initial state
  clearState = () => {
    this.setState({ ...initialState });
  };

  async receivedData() {
    try {
      const url = `http://127.0.0.1:8000/api/v1/meals?page=1&limit=15`;
      const response = await fetch(url);
      const { data } = await response.json();
      this.setState({ data });

      const meals = data.meals.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      this.setState({
        pageCount: Math.ceil(data.meals.length / this.state.perPage),
        // selectedFood: data.meals,
        selectedFood: meals,
        loading: false,
      });
      console.log(this.state.selectedFood);
    } catch (err) {
      console.error(err);
    }
  }

  toggleDisplay = () => {
    this.setState({ display: !this.state.display });
  };

  // handles the pagination clicking on the page
  handlePageClick = (event) => {
    const selectedPage = event.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  saveStateToLocalStorage() {
    // for every item in react state
    for(let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]));
      this.setState({key: this.state[key]})
    }
  }

  onUserLoggedIn = (user) => {
    this.setState({ user, isLoggedIn: true });
    console.log(this.state.user);
    this.saveStateToLocalStorage()
  };

  refreshPage = () => {
    window.location.reload();
    console.log('page to reload');
  }

  componentDidMount() {
    this.receivedData();

    // add event listener to save state to localStorage 
    // when user leaves / refreshes a page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

  }

  async componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if a component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  render() {
    console.log(this.state.selectedFood);
    const app = (
      <div className="App">
        <Navbar
          offset={this.state.offset}
          perPage={this.state.perPage}
          isLoggedIn={this.state.isLoggedIn}
          user={this.state.user}
          clearState={this.clearState}
          onSelect={this.onSearch}
          toggleDisplay={this.toggleDisplay}
          refreshPage={this.refreshPage}
        />
        <header className="App-header">
          <h1>Welcome to FOODLOVERS!</h1>
          <p>Here we serve our customers the freshest food out of oven!</p>
        </header>
        {/* {this.state.selectedFood.length ? (
          <CardList foodItems={this.state.item} />
        ) : (
          <NotFound />
        )} */}
        {this.state.loading ? (
          <div>loading ...</div>
        ) : this.state.selectedFood.length ? (
          <CardList meals={this.state.selectedFood} />
        ) : (
          <NotFound />
        )}
        <ReactPaginate
          pageCount={this.state.pageCount}
          pageRange={2}
          marginPagesDisplayed={2}
          onPageChange={this.handlePageClick}
          containerClassName={"container"}
          previousLinkClassName={"page"}
          breakClassName={"page"}
          nextLinkClassName={"page"}
          pageClassName={"page"}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
        <Footer />
      </div>
    );

    return (
      <Router >
        <Route exact path="/" >
          {app}
        </Route>
        <Route path="/signin">
          <SignIn
            onUserLoggedIn={this.onUserLoggedIn}
            display={this.state.display}
            toggleDisplay={this.toggleDisplay}
          />
          {app}
        </Route>
        <Route path="/signup">
          <SignUp
            onUserLoggedIn={this.onUserLoggedIn}
            display={this.state.display}
            toggleDisplay={this.toggleDisplay}
          />
          {app}
        </Route>
        <Route path="/userprofile">
          <UserProfile /> 
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
          {app}
        </Route>
      </Router>
    );
  }
}

export default App;
