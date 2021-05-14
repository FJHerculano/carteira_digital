import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

// propriedades que pertecem aos campos do container, 
// onde children pode ser qualquer parametro passado,
//de botão, select ...
interface IContentHeaderProps{
    title: string;
    lineColor: string;
    children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
    title, lineColor, children
}) => {

    return (
        <Container >
            {/* line color is color in bottom title  */}
            <TitleContainer lineColor={lineColor}>
                <h1> {title} </h1>
            </TitleContainer>
            <Controllers>
                {/* children podem ser qualquer coisa, de select à botão por exemplo*/}
                {children}
            </Controllers>

        </Container>
    );
}

export default ContentHeader; 