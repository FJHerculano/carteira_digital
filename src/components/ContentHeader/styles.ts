import styled from 'styled-components';

interface ITitleContainerProps{
    lineColor: string;
}

export const Container = styled.div`
    width: 100%;

    display:flex;
    justify-content: space-between;

    margin-bottom:25px;
  
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
    /* simbolo de > serve para inidicar que h1 só será utilizado nesse container */
    > h1 {
        color: ${props => props.theme.colors.white};
    /* efeito utilizado para resumir codigos, tais quais um hover é um exemplo */
        &::after{
            content: '';
            display: block;
            width: 55px;
            border-bottom: 10px solid  ${props => props.lineColor}
        }
    }
`;

export const Controllers = styled.div`   
    display : flex;
`;