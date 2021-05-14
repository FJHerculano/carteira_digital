import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';


import {Container} from './styles';

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Rodrigo' , label:'Rodrigo'},
        {value: 'José'    , label:'José'},
        {value: 'tatata'  , label:'tatata'},

    ];

    return (
        <h1>
            <Container>
                <ContentHeader title="Dashboard" lineColor="#F7931B">
                    <SelectInput options={options} onChange={() => {}}/>
                </ContentHeader>
            </Container>
        </h1>
    );
}

export default Dashboard;