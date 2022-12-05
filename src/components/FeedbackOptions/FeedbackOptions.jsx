import { Feedback } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, click }) => {
  return (
    <Feedback>
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
