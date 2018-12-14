

const extend = (dest, sources) => {
    for(let i =0 ; i< sources.length ; i++ ){
        for( let j in sources[i]) {
            dest[j] = sources[i][j];
        }
    }
}


const validators = {
    'not-null' : /[\w\d]+/,
    'phoneNumber' : /[\d\+\ ]+/,
}

const Units = [
    {id: 'kg', name: 'Kilogram'},
    {id: 'gm', name: 'grams'},
    {id: 'pound', name: 'pound'},
    {id: 'ltr', name:'litre' },
    {id: 'ml', name:'millileters'},
    { id: 'm', name:'meter'},
    { id: 'cm', name:'centmeter'},
];

export { extend, validators, Units };