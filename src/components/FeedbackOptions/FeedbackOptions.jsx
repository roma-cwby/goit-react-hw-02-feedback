import { Feedback } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({click}) => {
    return(
        <Feedback>
            <button onClick={()=>{click("g")}} type="button">Good</button>
            <button onClick={()=>{click("n")}} type="button">Neutral</button>
            <button onClick={()=>{click()}} type="button">Bad</button>
        </Feedback>
    );
}