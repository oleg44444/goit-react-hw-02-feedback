import React, { Component } from 'react';
import css from './Feedback.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={css.buttonContainer}>
        {options.map(option => (
          <button
            key={option}
            type="button"
            className={css.feedbackButton}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
