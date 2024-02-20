import styled from "styled-components";

export const DivUsersList = styled.div`
    background-color: red;

    /* display: flex; */
    /* justify-content: center; */
    flex: 1;
    box-sizing: border-box;

    font-size: larger;

    .container-lista-usuarios{
        background-color: blue;

        display: flex;
        flex-direction: column;
        flex: 1;

        .container-header{
            background-color: red;

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
            }
        }

        .container-search{
            background-color: yellow;

            display: flex;
            justify-content: center;
            align-items: center;

            top: 120px;

            height: 70px;

            div{
                background-color: white;

                display: flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;

                padding: 5px;
                border-radius: 5px;

                /* border: solid; */

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
            background-color: pink;

            box-sizing: border-box;

            height: calc(100vh - (60px + 60px + 10px + 60px));  
            // Posicionando a tabela, tudo acima dela fica grudado no topo, o header tem position: sticky
            // ** Essencial para o conceito de grudar no topo. **

            overflow: auto;  // Se passar da tela permite o scroll.
            // ** Essencial para o conceito de grudar no topo. **

            table{
                width: 100%;
                
                thead{
                    tr{
                        th{
                            background-color: blue;

                            // Grudando o thead no topo da tela, junto com os outros elementos.
                            position: sticky;
                            top: 0;
                            // ** Essencial para o conceito de grudar no topo. **

                            padding: 10px;
                        }
                    }
                }

                th, td{
                    border: solid;
                }
            }
        }
    }
`;