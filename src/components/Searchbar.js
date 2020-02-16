import React from 'react';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.input);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" name="video" value={this.state.input} onChange={this.handleChange} autoComplete="off" />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;