import { Feedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, click }) => {
  return (
    <Feedback>
      {/* <button onClick={()=>{click("g")}} type="button">Good</button>
            <button onClick={()=>{click("n")}} type="button">Neutral</button>
            <button onClick={()=>{click()}} type="button">Bad</button> */}
      {options.map(option => (
        <button
          key={option}
          name={option}
          onClick={e => {
            click(e.target.name);
          }}
          type="button"
        >
          {option}
        </button>
      ))}
    </Feedback>
  );
};
