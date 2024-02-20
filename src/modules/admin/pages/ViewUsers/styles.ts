import styled from "styled-components";

export const DivViewUsers = styled.div`
    /* background-color: red; */

    display: flex;
    /* justify-content: center; */
    flex: 1;
    box-sizing: border-box;

    height: calc(100vh - 70px);

    font-size: larger;

    .container-lista-usuarios{
        /* background-color: blue; */

        display: flex;
        flex-direction: column;
        flex: 1;

        .container-header{
            background-color: #eeee;

            display: flex;
            justify-content: space-between;
            box-sizing: border-box;

            top: 60px;

            height: 60px;
            /* width: 100%; */
            padding-right: 10px;
            padding-left: 10px;

            div{
                display: flex;
                justify-content: center;
                align-items: center;

                button{
                    background-color: #497240;
                    
                    transition: all ease 0.5s;

                    &:hover{
                        background-color: #2B7930;
                    }
                }
            }
        }

        .container-search{
            /* background-color: gray; */

            display: flex;
            justify-content: center;
            align-items: center;

            top: 120px;

            height: 70px;

            padding: 10px 0px;

            div{
                background-color: white;

                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;

                padding: 5px;
                border-radius: 5px;

                border: solid;

                span{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    box-sizing: border-box;

                    *{
                        font-size: larger;
                        padding: 5px;
                    }
                }

                input{
                    display: flex;

                    width: 40rem;
                    height: 35px;

                    border: none;
                    outline: none;
                    font-size: larger;
                }
            }
        }

        .container-table{
            /* background-color: pink; */

            box-sizing: border-box;

            height: calc(100vh - (60px + 60px + 10px + 60px));  
            // Posicionando a tabela, tudo acima dela fica grudado no topo, o header tem position: sticky
            // ** Essencial para o conceito de grudar no topo. **

            overflow: auto;  // Se passar da tela permite o scroll.
            // ** Essencial para o conceito de grudar no topo. **

            padding: 0px 20px;
            width: 100vw;

            font-size: 1.2em;

            table{
                width: 100%;
                
                thead{
                    tr{
                        :nth-child(1),
                        :nth-child(3),
                        :nth-child(5){
                            z-index: 1;
                            @media (max-width: 600px){
                                display: none;
                            }
                        }

                        :nth-child(3){
                            @media (min-width: 601px) and (max-width: 1020px){
                                display: none;
                            }
                        }

                        th{
                            background-color: #eeee;

                            box-sizing: border-box;
                            font-size: larger;

                            // Grudando o thead no topo da tela, junto com os outros elementos.
                            position: sticky;
                            top: 0;
                            // ** Essencial para o conceito de grudar no topo. **

                            padding: 15px;

                            /* @media (max-width: 600px){
                                padding: 8px
                            } */
                        }

                    }
                }

                tbody{
                    tr{
                        :nth-child(1),
                        :nth-child(3),
                        :nth-child(5){
                            @media (max-width: 600px){
                                display: none;
                            }
                        }

                        :nth-child(3){
                            @media (min-width: 601px) and (max-width: 1020px){
                                display: none;
                            }
                        }
                        
                        :nth-child(5),
                        :nth-child(6),
                        :nth-child(7){
                            text-align: center;

                            button{
                                display: inline;
                                box-sizing: border-box;

                                *{
                                    display: inline;
                                }

                                cursor: pointer;
                                background-color: transparent;
                                border: none;

                                font-size: 1em;
                            }
                        }

                        :nth-child(6),
                        :nth-child(7){
                            padding: 0px;
                        }

                        td{
                            box-sizing: border-box;
                            padding: 15px;
                            font-size: larger;

                            /* @media (max-width: 600px){
                                padding: 8px
                            } */
                        }
                    }
                }
            }

            tr:nth-child(even){
                background-color: #eeee;
            }

            @media (max-width: 600px){
                padding: 0px 10px;

                font-size: 1em;

                table{
                    thead{
                        tr{
                            th{
                                padding: 10px;
                            }
                        }
                    }
                    
                    tbody{
                        tr{
                            td{
                                padding: 10px;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 600px){
        .container-lista-usuarios{
            .container-search{
                div{
                    input{
                        width: auto;
                    }
                }
            }
        }
    }

    /* scrollbar-width: thin; */
    *::-webkit-scrollbar {
        width: 8px;  /* largura da barra de rolagem */
    }

    *::-webkit-scrollbar-track {
        background: transparent;  /* cor do fundo da barra de rolagem */
    }

    *::-webkit-scrollbar-thumb {
        background: #888;  /* cor do indicador da barra de rolagem */
        border-radius: 6px;  /* borda arredondada do indicador */
        height: 5px;
    }
`;