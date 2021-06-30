import React from 'react'
import { Container, List, Item } from './Cities.styse';
import Paper from '../Paper/Paper';
import Filling from '../Filling/Filling';

function Cities() {
    return (
        <Container>
            <List>
            <Item>
                    <Paper gap={12}><Filling text="Киев" /></Paper>
                </Item>
                <Item>
                     <Paper gap={12}><Filling text="Лондон"/></Paper>
               </Item> 
            </List>
        </Container>
    )
}

export default Cities
