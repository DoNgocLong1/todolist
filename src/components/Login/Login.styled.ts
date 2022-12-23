import styled from "styled-components";
export const Container = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #00CC90;
`

export const FormWrapper = styled.div`
    width: 30em;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 0.5em;
    gap: 5em;
    border-radius: 2em;
    .ant-btn-primary{
        background-color: #00CC90;
        font-size: 1.2em;
        height: 100%;
        padding: 0.5em 1em;
    }
`

  

export const Logo = styled.img`
    width: 15em;

`