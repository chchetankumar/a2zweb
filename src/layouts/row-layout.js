import React from 'react';
import StyledComponents from 'styled-components';


const RowLayout = (components) => {
    const Row = StyledComponents.div.attrs({
        'className': 'row',
    })` `;

    return <Row key={this.props.key}>
        {
            components    
        }
        </Row>;
} ;

export default RowLayout;
