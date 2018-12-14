import React from 'react';
import $ from 'jquery';
import { select2 } from 'select2';
import 'select2/dist/css/select2.css';
import axios from 'axios';

export default class FormSelect extends React.Component {

    constructor(props) {
        super(props);
        this.select = React.createRef();
        this.triggerChange = this.triggerChange.bind(this);
    }
    componentDidMount() {
        let elt = $(this.select.current);
        if (this.props.hasOwnProperty('data')){
            elt.select2({
                data: this.props.data
            });
        } else if(this.props.hasOwnProperty('ajax')) {
            axios.get(this.props.ajax)
                 .then( (results) => {
                    let data = results.data;
                    elt.select2({
                        data: data
                    });
                 });
        } 

        elt.on("change", this.triggerChange);
    }

    triggerChange(e) {
        let v  = $(this.select.current).val();
        let selected_option = $(this.select.current).find('option:selected');
        this.props.onChange(selected_option, this.props.name);
    }
    
    render() {
        return (<select ref={this.select}> </select>);
    }
}