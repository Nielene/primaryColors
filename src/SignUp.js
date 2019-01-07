import React from "react";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      favorite_flavor:
        "strawberry"
    };
    this.handleChange = this.handleChange.bind(
      this
    );
  }

  //set state is asynchronouse. so put debugger under setStae - it may not have already happened.

  handleChange(
    event
  ) {
    this.setState(
      {
        [event
          .target
          .name]:
          event
            .target
            .value
      }
    );
  } // setState: updates the state and then in calls render (it rerenders)

  //form: event delegation or event bubbling. so ca but an event on a parent and let it delegate to a child.

  render() {
    console.log(
      this.state
    );
    return (
      <React.Fragment>
        <h1>
          Sign
          Up!
        </h1>

        <form
          onChange={
            this
              .handleChange
          }
        >
          <label htmlFor="name">
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={
              this
                .state
                .name
            }
            id="name"
          />
          <br />
          <label htmlFor="email">
            Email
          </label>
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            value={
              this
                .state
                .email
            }
            id="email"
          />
          <br />
          <br />
          Favorite
          Flavors
          <select
            name="favorite_flavor"
            value={
              this
                .state
                .favorite_flavor
            }
          >
            <option value="strawberry">
              {" "}
              strawberry{" "}
            </option>
            <option value="chocolate">
              {" "}
              chocolate{" "}
            </option>
            <option value="vanilla">
              {" "}
              vanilla{" "}
            </option>
          </select>
        </form>
      </React.Fragment>
    );
  }
}

export default SignUp;
