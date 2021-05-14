import styled from 'styled-components';

    /**
    * Layout
    * MH = Main Header
    * AS = Aside
    * CT = Content
    */

export const Grid = styled.div`
    /* create form from grid */
    display: grid;
    /* the line 14 create the first colum (Aside) , 
        and line 15 create first rows (navbar and body) */
    grid-template-columns:250px auto;
    grid-template-rows: 70px auto;
    /* create struct the Base from page in "type matriz" */
    grid-template-areas:
    'AS MH'
    'AS CT';

    height:100vh;
`;