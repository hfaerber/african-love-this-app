import React, {Component}  from 'react';
import './StudyForm.css';
import { connect } from 'react-redux';
import { updateSelectedFilter } from '../actions';

export class StudyForm extends Component {
  constructor() {
    super();
      this.state = {
        selectedFilter: 'All'
      }
  }

  handleSelection = (event) => {
    this.setState({ selectedFilter: event.target.value });
    this.props.updateSelectedFilter( event.target.value );
  }

    // user action/dispatch to update the selectedFilter key in STORE
    // map in StudyContainer will rely on conditional to render based on selectedFilter key in state
    // selectedCards key in STORE will be passed to StudyContainer and .map()
    // will be run on that array so its creating and displaying cards for the selection
// WILL IT RERENDER WITH SELECTEDFILTER LOCAL STATE AS ALL DEFAULT?
// MAYBE THAT SHOULD ALSO BE A KEY IN STORE THAT IS PASSED AS PROP SO IT DOESN'T
// DEFAULT BACK TO ALL ON EACH RE-RENDER???

  render() {
    return(
      <label forhtml="display-cards-options" className='label-show'>Show:
        <select name="show" id="display-cards-options" className='select-show'
          value={this.state.selectedFilter}
          onChange={(event) => this.handleSelection(event)}>
          <option value="All">All</option>
          <option value="Still Learning">Still Learning</option>
          <option value="Got It!">Got It!</option>
        </select>
      </label>
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
