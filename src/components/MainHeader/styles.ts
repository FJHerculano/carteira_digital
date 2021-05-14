import styled from 'styled-components';
 
export const Container = styled.div`
    /* AS is one "Type param" getting from stylesLayout*/
    grid-area:MH;

    // color: ${props => props.theme.colors.white}; 
    background-color: ${props => props.theme.colors.secondary};

    display:flex;
    // alocated components in extremities
    justify-content:space-between;
    align-items:center;
    // space , first param top and bottom, and secondary param space in left and right
    padding: 0 10px;

    border-bottom: 1px solid ${props => props.theme.colors.gray};
`;

export const Profile = styled.div`
    color: ${props => props.theme.colors.white}; 
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;