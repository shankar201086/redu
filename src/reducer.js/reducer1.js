

const count=0;

export default function reducer1 (state=count,action){
    const{type,payload} = action;
    switch(type) {
         case 'INCREMENT':
         return state+payload;
         case 'DECREMENT':
         return state-1;
        default:
        return state;
    }

}