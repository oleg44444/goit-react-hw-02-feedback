import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercent = (good / totalFeedback) * 100;
    return positivePercent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercent = (good / totalFeedback) * 100;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h1>Please leave feedback</h1>
          <button type="button" onClick={() => this.leaveFeedback('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.leaveFeedback('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.leaveFeedback('bad')}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercent}</p>
        </div>
      </div>
    );
  }
}

export default App;
