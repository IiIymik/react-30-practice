import React from 'react'
import { Container, Img, Text } from './TitleSection.styles';

function TitleSectin({text}) {
    return <Container>
        <Img src="./images/cat.png"/>
        <Text>{text }</Text>
    </Container>
}

export default TitleSectin
