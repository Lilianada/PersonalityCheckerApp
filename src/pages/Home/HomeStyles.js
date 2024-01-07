import styled from "styled-components";

export const Wrapper = styled.section`
    background: var(--beige-60);
    width: 80%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #f5f3ee;
    background-clip: border-box;
    border-radius: 0.4375rem;
    padding: 1rem;
    margin: 2rem auto;
    box-shadow: 0 4px 25px rgb(0 0 0 / 5%);

    @media screen and (min-width: 768px) {
        width: 600px;
        padding: 1.5rem;
    }
`

export const InnerBody = styled.div`
    background: var(--beige-60);
    width: 100%;
    height: 100%;
    border-radius: 0.4375rem;
    padding: 1.5rem;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 60%;
        padding: 1rem;
    }
`

export const Button = styled.button`
    width: 60%;
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
