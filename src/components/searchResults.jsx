import React, {
  Component
} from 'react';
import './styles.css';
import {
  connect
} from 'react-redux';

class SearchResults extends Component {

  render() {
    const {
      issues
    } = this.props;
    return (
      <div >
      <ul className="issues">
      {issues.map(issue =>
      <li key={issue.id} className="issues__issue-wrapper">
        <div className="issue">
           <div className="float-left">
              <span className={issue.state === 'closed'? 'State State--red': 'State State--green'}>{issue.state}</span>
              <span className="issue__title">{issue.title}</span>
           </div>
           <div className="float-right">
              <span className="issue__number">#{issue.number}</span>
              <span>By {issue.user.login}</span>
              <span>{issue.state === 'closed'? ' closed on ' : ' opened it on '}</span>
              <span>{issue.state === 'closed'? issue.closed_at : issue.created_at }</span>
          </div>
        </div>
      </li>
    )}
  </ul>
  </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    issues: state.GithubReducer.issues
  };
}

export default connect(mapStateToProps)(SearchResults);
