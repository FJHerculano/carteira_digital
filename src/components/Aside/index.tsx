import React,{useState} from 'react';

import logoImg from '../../assets/logo.svg';
import Toggle from '../Toggle';

import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';


import { 
    Container, 
    Header, 
    LogImg, 
    MenuContainer, 
    MenuItemLink, 
    Title,
    MenuItemButton,
    ToggleMenu ,
    ThemeToggleFooter} from './styles';

const Aside: React.FC = () => {
    
    const { signOut } = useAuth();
    const { toggleTheme, theme } = useTheme();

    const [toggleMenuIsOpened, setToggleMenuIsOpened]= useState(false);
    const [darkTheme, setDarkTheme] = useState(()=> theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setToggleMenuIsOpened(!toggleMenuIsOpened);
    }

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }

    return (
        <Container menuIsOpen={toggleMenuIsOpened}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    { toggleMenuIsOpened ? <MdClose/> : <MdMenu/> }
                </ToggleMenu>

                <LogImg src={logoImg} alt="Logo Minha carteira" />
                <Title> Fidelital Estudo </Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowDownward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowUpward/>
                    Saidas
                </MenuItemLink>
                <MenuItemButton onClick={signOut} >
                    <MdExitToApp/>
                    Sair
                </MenuItemButton>
            </MenuContainer>

            <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
                <Toggle 
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleChangeTheme}
                />
            </ThemeToggleFooter>
        </Container>
    );
}

export default Aside;