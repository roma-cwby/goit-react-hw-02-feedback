import {Component} from "react";
import { Section } from "components/Section/Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from "components/Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good * 100 / this.countTotalFeedback());
  }
  
  incrementFeedback = (type = null) => {
    this.setState(prevState => {
      if(type === "g")
      return {
        good: prevState.good + 1,
      };
      else if (type === "n")
      return {
        neutral: prevState.neutral + 1,
      };
      else 
      return {
        bad: prevState.bad + 1,
      };
    });
  }

  render(){
    const {good, neutral, bad} = this.state;

    return <Section>
      <Section title="Please leave feedback">
      <FeedbackOptions click={this.incrementFeedback}/>
      </Section>
      <Section title="Statistics">
      {this.countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/> : <Notification message="There is no feedback"/>}
      </Section>
      </Section>
  }
};
