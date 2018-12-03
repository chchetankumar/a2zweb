import React from 'react';

const Form = (props) => {
    return (
        <div class="form additional-fields">
            props.fields.map ( (field) => <div class="row">
                <label>
                    {field.name}
                </label>
                </div>
            )
        </div>);
}

export default Form;