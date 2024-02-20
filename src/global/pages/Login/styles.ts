import styled from "styled-components";
import ImagemFundo from '../../../assets/login-background.jpg'

export const DivLogin = styled.div`
    background-image: url(${ImagemFundo});
    background-size: cover; /* ajusta o tamanho da imagem para cobrir todo o elemento */
    background-position: center; /* posiciona a imagem no centro do elemento */
    background-repeat: no-repeat; /* evita a repetição da imagem */

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    *{
        font-family: 'Courier New', Courier, monospace;
    }
    font-weight: bold;

    .container-login{
        background-color: white;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.9);

        display: flex;
        /* flex-direction: column; */
        box-sizing: border-box;

        height: 400px;
        width: 320px;

        border-radius: 5px;
        padding: 20px;
        gap: 0.2rem;

        
        form{
            /* background-color: red; */
            
            display: flex;
            flex-direction: column;
            /* justify-content: space-evenly; */
            
            gap: 1rem;

            width: 100%;
            
            h2{
                text-align: center;
    
                /* font-family: 'Courier New', Courier, monospace; */
            }

            label{
                margin-bottom: 0;
                margin-top: 0;
            }

            button{
                background-color: #497240;
                margin-top: 4%;

                transition: all ease 0.5s;

                &:hover{
                    background-color: #2B7930;
                }
            }
        }

        /* form div:nth-child(4){
            // background-color: red;
            
            flex: 1;
            justify-content: center;
        } */
    }
`;