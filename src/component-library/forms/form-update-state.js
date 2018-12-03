
import { validators } from '../../utils/utilities';

function updateState(e) {   
    const val = e.currentTarget.value; 
    let name = e.currentTarget.name;       
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
export default updateState;