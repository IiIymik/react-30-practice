import React from 'react'
import { Container, List, Item } from './Faculties.styles';
import Paper from '../Paper/Paper';
import Filling from '../Filling/Filling';
function Faculties() {
    return (
        <Container>
            <List>
            <Item>
                    <Paper gap={12}><Filling text="Факультет информатики и выычислительной техники" /></Paper>
                </Item>
                <Item>
                     <Paper gap={12}><Filling text="Факультет информатики и выычислительной техники"/></Paper>
               </Item> 
            </List>
        </Container>
    )
}

export default Faculties
