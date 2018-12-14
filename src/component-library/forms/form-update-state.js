
import { validators } from '../../utils/utilities';

function updateStateEvent(e) {   
    const val = e.target.value; 
    let name = e.target.name;       
    if (this.state[name] != val || !this.state[name].length) {
        const reg = this.validators.hasOwnProperty(name)? new RegExp(validators[this.validators[name]]):null;
        let state = {
            [name]: val
        };
        state.validity =this.state.validity;
        if ( reg && !reg.test(val)) {
            state.validity[name] = false;
        } else {
            state.validity[name] = true;
        }
        this.setState(state);
    }
};


function updateStateOption(option, prop) {
    this.setState({
       [prop]: option.val()
    });
}
export  {updateStateEvent, updateStateOption} ;