import styled from "styled-components";

export const DivMenu = styled.div`
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    h1, h2{
        margin-top: 0;
        margin-bottom: 0;

        font-weight: normal;
    }

    h1{
        font-size: 3.8em;
    }

    h2{
        font-size: 3em;
    }

    @media (max-width: 600px){
        h1 {
            font-size: 2.8em;
        }

        h2{
            font-size: 2.5em;
        }
    }
`;