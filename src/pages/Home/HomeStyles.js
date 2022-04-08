import styled from "styled-components";

export const Wrapper = styled.section`
    background: var(--beige-60);
    width: 70%;
    height: fit-;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #f5f3ee;
    background-clip: border-box;
    border-radius: 0.4375rem;
    padding: 2rem;
    margin: 2rem auto;
    box-shadow: 0 4px 25px rgb(0 0 0 / 5%);
`

export const Header = styled.div`
    text-align: center;
`

export const InnerBody = styled.div`
    background: var(--beige-110);
    width: 80%;
    height: 100%;
    border-radius: 0.4375rem;
    padding: 2rem;
    margin: 0 auto 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const Button = styled.button`
    width: 60%;
    padding: .5rem;
    border: none;
    outline: none;
    border-radius: 3px;
    background: var(--green-color);
    box-shadow: 0 4px 25px rgb(0 0 0 / 5%);
    font-size: var(--font-eighteen); 
    font-family: inherit;
    color: var(--white-color);
    margin: 1.5rem auto;
    cursor: pointer;

    &:hover, :focus{
        background: var(--darkgreen-color);
    }
`
