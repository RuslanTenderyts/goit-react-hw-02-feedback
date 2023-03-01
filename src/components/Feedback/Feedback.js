
import React, { Component } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  valueIncrement = (value) => {
    this.setState((prevState) => {
      return {
        [value]: prevState[value] + 1,
      }
      
    })
    this.countTotalFeedback()
    this.countPositiveFeedbackPercentage()
  };
  
  countTotalFeedback = () => {
    const {good, neutral, bad} = this.state

      return good + neutral + bad
  };
  
  countPositiveFeedbackPercentage = () => {
    const {good} = this.state
    const total = this.countTotalFeedback()

    return  Math.round(good / total * 100)
  };
 
  render() {
    return (
          
          <div>

            <Section title="Please leave feedback">
            
              <FeedbackOptions  onLeaveFeedback={this.valueIncrement} />
            
            </Section>

            <Section title="Statistics">           
              {this.countTotalFeedback() ? 
                <Statistics 
                    good={this.state.good} 
                    neutral={this.state.neutral} 
                    bad={this.state.bad} 
                    total={this.countTotalFeedback()} 
                    positivePercentage={this.countPositiveFeedbackPercentage()} /> :

                <Notification message="There is no feedback" /> }
            </Section>
                        
          </div>
  )}
}

export default Feedback


