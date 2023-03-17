import Users from "./Users";
import classes from "./UserFinder.module.css";
import { Component } from "react";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm !== prevState.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    return (
      <div className={classes.finder}>
        <input type="search" onChange={this.searchChangeHandler} />
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default UserFinder;
