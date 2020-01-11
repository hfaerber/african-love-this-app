import React, {Component}  from 'react';
import './StudyForm.css';
import { connect } from 'react-redux';
import { updateSelectedFilter } from '../actions';

export class StudyForm extends Component {
  constructor() {
    super();
      this.state = {
        selectedFilter: 'All',
        query: ''
      }
  }

  handleSelection = (event) => {
    this.setState({ selectedFilter: event.target.value });
    this.props.updateSelectedFilter( event.target.value );
  }

  handleSearch = (event) => {
    this.setState({ query: event.target.value });
  }

  handleClick = () => {

  }

  clearSearch = () => {

  }

  render() {
    return(
      <div>
        <label forhtml="display-cards-options" className='label-show'>Show:
          <select name="show" id="display-cards-options" className='select-show'
            value={this.state.selectedFilter}
            onChange={(event) => this.handleSelection(event)}>
            <option value="All">All</option>
            <option value="Still Learning">Still Learning</option>
            <option value="Got It!">Got It!</option>
          </select>
        </label>
        <label forhtml="search-cards" className='label-search'>Search:
          <input type='search' name='query' placeholder='Search Country By Name'
            className='input-search' value={this.state.query}
            onChange={(event) => this.handleSearch(event)}/>
        </label>
        <button className='button-search' onClick={this.handleClick}>
        Search</button>
        <button className='button-clear-search' onClick={this.clearSearch}>
        Clear Search</button>
      </div>
    )
  }
}

// export const mapStateToProps = state => ({
//
// })

export const mapDispatchToProps = dispatch => ({
  updateSelectedFilter: filter => dispatch(updateSelectedFilter(filter))
})

export default connect(null, mapDispatchToProps)(StudyForm)
