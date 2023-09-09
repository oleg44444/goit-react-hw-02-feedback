import React, { Component } from 'react';
import styles from './Statistics.module.css';
class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.statistic}>
        <p className={styles.text}>Good: {good}</p>
        <p className={styles.text}>Neutral: {neutral}</p>
        <p className={styles.text}>Bad: {bad}</p>
        <p className={styles.text}>Total: {total}</p>
        <p className={styles.text}>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
