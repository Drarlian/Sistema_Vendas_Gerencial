import styled from "styled-components";

export const DivRegister = styled.div`
    /* background-color: violet; */

    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    flex: 1;
    box-sizing: border-box;

    height: calc(100vh - 70px);
    max-width: 100%;
    padding: 0px 10px;

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
                /* background-color: pink; */

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

    @media (max-width: 600px){
        font-size: large;
         /* height: calc(100vh - 70px); */
         /* width: 100vw; */

         .container-register{
            form{
                input{
                    width: auto;
                };
            }
        }
    }
`;