import React from 'react'
import { Container, Img, Text } from './TitleSection.styles';

function TitleSectin({text, src}) {
    return <Container>
        <Img src={src}/>
        <Text>{text }</Text>
    </Container>
}

export default TitleSectin
