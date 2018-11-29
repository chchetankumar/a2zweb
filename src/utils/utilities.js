

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

export { extend, validators };