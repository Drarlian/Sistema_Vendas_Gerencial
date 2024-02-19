import styled from "styled-components";

export const DivRegister = styled.div`
    /* background-color: red; */

    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    flex: 1;

    font-size: larger;

    .container-register{
        /* background-color: blue; */

        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */

        form{
            /* background-color: yellow; */

            display: grid;
            grid-template-columns: 1fr 1fr;

            padding: 5px;
            gap: 15px;

            input{
                /* background-color: red; */
                width: 20rem;
            }

            .container-botao{
                /* background-color: red; */

                display: flex;
                justify-content: center;
                grid-column: span 2;

                gap: 1rem;

                button{
                    background-color: #497240;
                    
                    transition: all ease 0.5s;

                    &:hover{
                        background-color: #2B7930;
                    }
                }
            }
        }
    }
`;