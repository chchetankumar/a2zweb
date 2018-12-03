import React from 'react';


export default class FormSelect extends React.Component {

    constructor(props) {
        super(props);
        this.select = React.createRef();
    }
    componentDidMount() {
        this.select.select2({
            
        });
    }

    render() {
        return (<select ref={this.select}>
            </select>);
    }
}