import React from 'react';
import { AiFillMobile, AiFillMail } from 'react-icons/ai';
import {FaMapMarkerAlt } from 'react-icons/fa';
import Paper from '../Paper/Paper';
import { Container, Name, Contacts, Description, List, Item, Box, Break} from './Teachers.styles';

function Teachers() {

    return (<Container>
        <Paper gap={24} >        
            <Box>
                <Name>Руденко <Break/> Мария Александровна</Name>
                <Contacts>
                    <List>
                <Item><AiFillMobile size="16px"/> +38(097) 448 73 11</Item>
                <Item><AiFillMail size="16px"/> rudenko.mail@gmail.com</Item>
                <Item><FaMapMarkerAlt size="16px"/> Полтава</Item>
            </List></Contacts>
                <Description>Создание групп, создание стран, редактировани профилей преподавателей</Description>
            </Box>
    </Paper>
        </Container>)
}

export default Teachers