import styled from "styled-components";
import ImagemFundo from '../../../assets/login-background.jpg'

export const DivLogin = styled.div`
    /* background-image: url(${ImagemFundo}); */
    /* background-size: cover; ajusta o tamanho da imagem para cobrir todo o elemento */
    /* background-position: center; posiciona a imagem no centro do elemento */
    /* background-repeat: no-repeat; evita a repetição da imagem */

    height: 100vh;

    display: flex;
    /* justify-content: center; */
    /* align-items: center; */

    font-size: 1.3em;

    *{
        font-family: Arial, Helvetica, sans-serif;
    }
    font-weight: bold;

    // Animação de pulso, aumentando e diminuindo o tamanho do elemento.
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.01);
        }
        100% {
            transform: scale(1);
        }
    }

    .container-imagem{
        /* background-color: red; */
        /* flex: 1; */

        display: flex;
        justify-content: center;
        align-items: center;

        width: 64%;

        .div-imagem{
            /* background-color: orange; */

            display: flex;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;

            height: 90%;

            padding: 15px;

            img{
                width: 100%;
                height: 100%;

                border-radius: 15px;

                animation: pulse 2s infinite;  // Definindo a animação / tempo total dela / quantas vezes vai repetir
            }
        }
    }

    .container-formulario{
        /* background-color: pink; */

        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;

        height: 100%;
        /* width: 320px; */
        width: 36%;


        .div-formulario{
            /* background-color: orange; */

            display: flex;
            justify-content: center;
            box-sizing: border-box;

            height: 450px;
            width: 320px;

            /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.9); */
            border-radius: 5px;
            padding: 20px;
            gap: 0.2rem;

            form{
                /* background-color: red; */
                
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                
                gap: 2rem;
    
                width: 100%;

                .div-titulos{
                    /* background-color: blue; */

                    display: flex;
                    flex-direction: column;
                    box-sizing: border-box;

                    h2{
                        text-align: center;

                        margin-top: 5px;
                        margin-bottom: 15px;
    
                        box-sizing: border-box;

                        text-transform: uppercase;
                    }
    
                    h3{
                        text-align: center;

                        margin-top: 0px;
    
                        box-sizing: border-box;
    
                        color: gray;
    
                        font-size: 1em;
                        font-weight: lighter;
                    }
                }
                

                .div-input{
                    /* background-color: orange; */

                    display: flex;
                    flex-direction: column;

                    box-sizing: border-box;

                    label{
                        color: gray;

                        margin-bottom: 5px;

                        font-weight: lighter;
                    }

                    input{
                        padding: 10px;
                        font-size: 0.9em;

                        height: 20px;

                        border-radius: 5px;
                        border: solid 1px gray;
                        outline: none;
                    }
                }
    
    
                button{
                    background-color: #497240;

                    margin-top: 10px;
    
                    transition: all ease 0.5s;

                    border-radius: 10px;
    
                    &:hover{
                        background-color: #2B7930;
                    }
                }
            }
        }
    }

    @media (max-width: 600px){
        justify-content: center;
        align-items: center;

        .container-imagem{
            display: none;
        }

        .container-formulario{
            /* background-color: red; */
            width: 100%;

            .div-formulario{
                /* background-color: orange; */

                display: flex;

                width: 100%;
                height: 70%;

                /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.9); */

                form{
                    /* background-color: pink; */


                    gap: 3rem;
                }
            }
        }
    }

    @media (min-width: 601px) and (max-width: 1024px){
        justify-content: center;
        align-items: center;

        .container-imagem{
            display: none;
        }

        .container-formulario{
            /* background-color: red; */
            width: 100%;

            .div-formulario{
                /* background-color: orange; */

                display: flex;
                justify-content: center;
                align-items: center;

                width: 100%;
                height: 70%;

                /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.9); */

                form{
                    /* background-color: pink; */

                    box-sizing: border-box;


                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80%;
                    /* gap: 1rem; */

                    .div-titulos{
                        box-sizing: border-box;
                        margin-bottom: 10%;
                    }

                    .div-input{
                        /* background-color: blue; */

                        width: 55%;
                    }

                    button{
                        width: 55%;
                    }
                }
            }
        }
    }
`;