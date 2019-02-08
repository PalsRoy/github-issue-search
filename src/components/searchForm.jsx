import React, {Component} from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Select from 'react-select';
import {getIssues,getLabels,getUsers,getMilestones} from '../actions/githubActions';
import FetchFailure from './fetchFailure';

class SearchForm extends Component{

  constructor(){
    super();

  this.state={
    selectedAuthor:'',
    selectedLabel:'',
    selectedStatus:'',
    selectedAssignee:'',
    selectedMilestone:''
  };

  this.handleAuthorChange= this.handleAuthorChange.bind(this);
  this.handleLabelChange= this.handleLabelChange.bind(this);
  this.handleAssigneeChange= this.handleAssigneeChange.bind(this);
  this.handleSelectedStatus= this.handleSelectedStatus.bind(this);
  this.handleMilestone= this.handleMilestone.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleMilestone(selectedOption){
  this.setState({selectedMilestone: selectedOption});
  }

  handleAuthorChange(selectedOption){
  this.setState({ selectedAuthor: selectedOption });
  }

  handleLabelChange(selectedOption){
  this.setState({ selectedLabel: selectedOption });
  }

  handleAssigneeChange(selectedOption){
  this.setState({ selectedAssignee: selectedOption });
  }

  handleSelectedStatus(e){
  this.setState({ selectedStatus: e.target.value });
  }

  handleSubmit(e){
  e.preventDefault();
  var queryParameters = '';
  const author = this.state.selectedAuthor.value;
  const label = this.state.selectedLabel.value;
  const assignee = this.state.selectedAssignee.value;
  const status = this.state.selectedStatus;
  const milestone = this.state.selectedMilestone.value;

  //Note: v3 api creator doesn't work
  if(author) queryParameters += "author:"+author+"+";
  if(status) queryParameters += "state:"+status+"+";
  if(assignee) queryParameters += "assignee:"+assignee+"+";
  if(milestone) queryParameters += "milestone:"+milestone+"+";
  if(label) queryParameters += "label:"+label;

  this.props.getIssues(queryParameters);
  }

  componentDidMount(){
    this.props.getUsers();
    this.props.getLabels();
    this.props.getMilestones();
  }

  render(){
    const { hasFailedToFetch, issueLabels , hasFailedToLabel, usersData, milestoneData } = this.props;
    const { selectedAuthor,selectedLabel,selectedStatus,selectedAssignee,selectedMilestone } = this.state;

  return(
    <div>
    <div>
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="AuthorInput">Author</label>
          <Select value={selectedAuthor}
                  onChange={this.handleAuthorChange}
                  options={usersData} />
        </div>
        <div className="form-group">
        <label htmlFor="labelSelect">Label</label>
          <Select value={selectedLabel}
                 onChange={this.handleLabelChange}
                 options={issueLabels} />
        </div>
        <div className="form-group">
          <label htmlFor="AssigneeInput">Assignee</label>
          <Select value={selectedAssignee}
                 onChange={this.handleAssigneeChange}
                 options={usersData} />
        </div>
        <div className="form-group">
          <label htmlFor="MilestoneSelect">Milestones</label>
          <Select value={selectedMilestone}
                 onChange={this.handleMilestone}
                 options={milestoneData} />
        </div>
        <div className="form-group">
        <label htmlFor="statusSelect">Issue Status</label>
          <select value={selectedStatus}
                  onChange={this.handleSelectedStatus}
                  className="form-control"
                  id="statusSelect">
            <option value="">Select your status</option>
            <option value="open">open</option>
            <option value="closed">closed</option>
          </select>
        </div>
         <button type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
    {(hasFailedToFetch || hasFailedToLabel) && (
    <FetchFailure stylingProperty="fetchFailureClass"/>
    )}
    </div>
    );
  }
}

function mapDispatchToStore(dispatch){
  return bindActionCreators({getIssues,getLabels,getUsers,getMilestones},dispatch);
}

function mapStateToProps(state){
console.log(state);
  return{
  issueLabels: state.GithubReducer.issueLabels,
  hasFailedToFetch: state.GithubReducer.fetchFailure,
  hasFailedToLabel: state.GithubReducer.labelFailure,
  usersData: state.GithubReducer.usersData,
  milestoneData: state.GithubReducer.milestoneData
  };
}

export default connect(mapStateToProps,mapDispatchToStore)(SearchForm);
