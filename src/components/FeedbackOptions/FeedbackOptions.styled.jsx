import styled from '@emotion/styled'

export const Feedback = styled.div`
    button {
        padding: 3px 5px;
        borden: none;
        border-radius: 10px;
        cursor: pointer;
        transition: scale 300ms linear;
    }

    button:hover, 
    button:focus{
        scale: 1.1;
    }

    button:not(:last-of-type) {
        margin-right: 10px;
    }
`;