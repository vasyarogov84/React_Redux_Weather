import React, { Component } from 'react';
import { fetchWeather } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


 class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term : ""};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(e) {
        this.setState({ term : e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState(() => ({ term: ""}));
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input value={this.state.term}
                       placeholder="Search for your City Weather"
                       className="form-control"
                       onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null,mapDispatchToProps)(SearchBar);