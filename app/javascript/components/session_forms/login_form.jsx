import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {user: Object.assign({}, this.state)};
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <h2 id="login-title">Log In</h2>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Log In
          <br/>
          {this.renderErrors()}
          <br/>
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="login-input"
            placeholder="Your email"
          />
          <br/>
          <input type="password"
            value={this.state.password}
            onChange={this.update('password')}
            className="login-input"
            placeholder="Password"
          />
          <br/>
          <input type="submit"
            className="session-submit"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);