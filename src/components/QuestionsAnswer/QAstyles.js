import styled from 'styled-components';

export const Wrapper = styled.section`
    
`

export const Result = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ResultText = styled.h1`
    text-align: center;
    /* font-size: var(--font-twentyfour); */
    font-weight: 600;
`
export const QtnCount = styled.p`
    font-size: var(--font-eighteen);
    font-weight: 600;
    margin-bottom: .75rem;
`

export const Qtn = styled.h2`
    font-weight: 500;
    margin-bottom: .75rem;
`

export const Req = styled.p`
    font-weight: 500;
    font-style: italic;
    font-size: var(--font--fourteen);
    color: var(--green-color);
`

export const Options = styled.form`
    width: 100%;
    padding: 1rem;
    background: var(--beige-10);
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    box-shadow: 0 4px 25px rgb(0 0 0 / 5%);
    border: none;
    outline: none;
    font-family: var(--fontOne);
    font-size: var(--font--eighteen);
    cursor: pointer;

    &:hover{
        background: var(--beige-60);
    }

    &:visited, :focus{
        background: var(--green-color);
    }
`

export const Opt = styled.div`
    padding: .15rem .75rem;
    border-radius: 3px;
    font-weight: 600;
    background: var(--orange-color);
    margin-right: .75rem;
`

export const Ans = styled.p`
    font-size: var(--font-eighteen); 
`

export const ButtonWrap = styled.div`
    display: flex;
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
