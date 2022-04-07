import styled from 'styled-components';

export const Wrapper = styled.section`
    
`
export const Result = styled.div`
    
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
`

export const Options = styled.div`
    padding: 1rem;
    background: var(--beige-60);
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    box-shadow: 0 4px 25px rgb(0 0 0 / 5%);
    cursor: pointer;

    &:hover, :focus{
        background: var(--beige-10);
    }
`

export const Opt = styled.div`
    padding: 0rem .5rem;
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
