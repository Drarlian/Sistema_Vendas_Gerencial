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

        display: flex;
        /* flex-direction: column; */
        box-sizing: border-box;

        height: 250px;

        border-radius: 5px;
        padding: 10px;
        gap: 0.2rem;

        
        form{
            /* background-color: red; */
            
            display: flex;
            flex-direction: column;
            /* justify-content: space-evenly; */
            
            gap: 1rem;
            
            h2{
                text-align: center;
    
                /* font-family: 'Courier New', Courier, monospace; */
            }
            
            div{
                /* background-color: green; */
                
                display: flex;
                flex-direction: column;

                input{
                    background-color: #497240;
                    color: white;

                    border-radius: 5px;
                    border: none;
                    outline: none;  // Tirar a borda do input quando ele for selecionado.

                    padding: 3px;

                    font-family: Arial, Helvetica, sans-serif;

                    &::placeholder{  // Alterando as propriedades do Place Holder.
                        color: white;
                        opacity: 80%;
                    }
                    
                }

                button{
                    background-color: #497240;
                    color: white;

                    cursor: pointer;

                    border-style: none;
                    border-radius: 5px;
                    padding: 3px;

                    font-weight: bold;

                    transition: all ease 0.6s;

                    &:hover{
                        opacity: 83%;
                    }
                }
            }
            
        }

        form div:nth-child(4){
            /* background-color: red; */
            
            flex: 1;
            justify-content: center;
        }
    }
`;