import React from 'react';
import StyledComponents from 'styled-components';
import { extend } from '../../utils/utilities';


const AZButton = (props) => {
    const newProps={ 
        type: "button"
    };

    extend(newProps, [props]);
    
    const AZButton = StyledComponents.input.attrs(newProps)`
        height: 30px;
        width: auto;
    `;

    return <AZButton />

}

export default AZButton;