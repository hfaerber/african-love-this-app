import React, {Component}  from 'react';
import './StudyForm.css';
import { connect } from 'react-redux';
import { updateSelectedFilter, updateSearchQuery } from '../actions';
import PropTypes from 'prop-types';

export class StudyForm extends Component {
  constructor() {
    super();
      this.state = {
        selectedFilter: 'All',
        query: ''
      }
  }

  handleSelection = (event) => {
    const { updateSelectedFilter } = this.props;
    this.setState({ selectedFilter: event.target.value });
    updateSelectedFilter( event.target.value );
  }

  handleSearch = (event) => {
    this.setState({ query: event.target.value });
    this.props.updateSearchQuery(event.target.value);
  }

  clearSearch = () => {
    this.setState({ query: '' });
    this.props.updateSearchQuery('');
  }

  render() {
    return(
      <div className='div-filter-search-form'>
        <label forhtml="display-cards-options" className='label-show'>Show:
          <select name="show" id="display-cards-options" className='select-show'
            value={this.state.selectedFilter}
            onChange={(event) => this.handleSelection(event)}>
            <option value="All">All</option>
            <option value="Still Learning">Still Learning</option>
            <option value="Got It!">Got It!</option>
          </select>
        </label>
        <label forhtml="search-cards" className='label-search'>Search All:
          <input type='search' name='query' placeholder='Search By Name'
            className='input-search' value={this.state.query}
            onChange={(event) => this.handleSearch(event)}/>
        </label>
        <button className='button-clear-search' onClick={this.clearSearch}>
        Clear Search</button>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  updateSelectedFilter: filter => dispatch(updateSelectedFilter(filter)),
  updateSearchQuery: query => dispatch(updateSearchQuery(query))
})

export default connect(null, mapDispatchToProps)(StudyForm)

StudyForm.propTypes = {
  updateSelectedFilter: PropTypes.func,
  updateSearchQuery: PropTypes.func
}
