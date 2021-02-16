import styled from "styled-components";

const Div = styled.div`
    min-width: 320px;
    width: 100%;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    @media screen and (min-width: 1280px) {
        width: 1280px;
    }
`;

export default Div;
