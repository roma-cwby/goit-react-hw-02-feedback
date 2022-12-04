import propTypes from 'prop-types';
import { MainSection } from "./Section.styled";

export const Section = ({title, children}) => {
    return (
        <MainSection>
            {title && <h2>{title}</h2>}
            {children}
        </MainSection>
    );
}

Section.propTypes = {
    title: propTypes.string,
}