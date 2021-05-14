import React, { useState } from 'react';

import { Container, ToggleLabel, ToggleSelector } from './styles';

// só pra lembrar do problema do toggle select
// const [online, setOnline] = useState(false); 

const Toggle: React.FC = () => {
    const [online, setOnline] = useState(false); 

   return (
    <Container>
        <ToggleLabel>Light</ToggleLabel>
        <ToggleSelector
            checked={online}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange={() => setOnline(!online)}
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
)}

export default Toggle;