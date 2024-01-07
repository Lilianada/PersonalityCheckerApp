import styled from "styled-components";

export const Wrapper = styled.section`
    width: 80%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: 0.4375rem;
    padding: 1rem;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        width: 600px;
        padding: 1.5rem;
    }
`

export const InnerBody = styled.div`
    background-color: #f5f3ee;
    width: 100%;
    height: fit-content;
    border-radius: 0.4375rem;
    padding: 1.5rem;
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media screen and (min-width: 768px) {
        width: 80%;
        padding: 2rem;
    }
`

export const BodyText = styled.p`
    font-size: var(--font-twenty);
    font-weight: 500;
    line-height: 1.25rem;
    text-align: center;
`

export const Button = styled.button`
    width: 60%;
    border: none;
    padding: .25rem;
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
