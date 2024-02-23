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
        box-sizing: border-box;

        padding-top: 30px;

        .container-icone{
            background-color: purple;
            color: white;

            margin-bottom: 0px;

            display: flex;
            box-sizing: border-box;

            padding: 7px;
            border-radius: 30px;
        }

        h1{
            margin-top: 10px;

            font-weight: normal;
        }

        form{
            /* background-color: yellow; */

            display: grid;
            grid-template-columns: 1fr 1fr;

            padding: 5px;
            gap: 15px;

            :nth-child(3), :nth-child(4){
                grid-column: span 2;
            }

            input{
                /* background-color: red; */
                width: 18rem;
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