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

            display: flex;
            box-sizing: border-box;

            /* width: 50%; */
            overflow-y: auto;

            table{
                width: 100%;
                box-sizing: border-box;
                

                th, td{
                    box-sizing: border-box;
                    border: solid;
                }
            }
        }
    }
`;