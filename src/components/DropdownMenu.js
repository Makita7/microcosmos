import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';

function DropMenuElement(props){
    return(
        <Dropdown.Item>
            <Link to={props.to} className='dropLinks'> {props.name} </Link>
        </Dropdown.Item>
    );
}


function DropdownMenu() {
    return(
        <>
        <Dropdown className='OnlyCell'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                <FaBars/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <DropMenuElement to="/" name="Inicio"/>
                <DropMenuElement to="/sobrenosotros" name="Sobre Nosotros"/>
                <DropMenuElement to="/educacion" name="Educación"/>
                <DropMenuElement to="/productos" name="Productos"/>
                <DropMenuElement to="/servicios" name="Servicios"/>
                <DropMenuElement to="/contacto" name="Contacto"/>
            </Dropdown.Menu>
        </Dropdown>
        </>
    );
}

export default DropdownMenu;