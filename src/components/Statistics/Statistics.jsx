import propTypes from 'prop-types';
import { Statistic } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <Statistic>
            <li>
                <p>Good: </p>
                <span>{good}</span>
            </li>
            <li>
                <p>Neutral: </p>
                <span>{neutral}</span>
            </li>
            <li>
                <p>Bad: </p>
                <span>{bad}</span>
            </li>
            <li>
                <p>Total: </p>
                <span>{total}</span>
            </li>
            <li>
                <p>Positive feedback: </p>
                <span>{positivePercentage}%</span>
            </li>
        </Statistic>
    );
};

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.number.isRequired,
    positivePercentage: propTypes.number.isRequired,
  };