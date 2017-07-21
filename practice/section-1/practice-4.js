'use strict';
function collectSameElements(collectionA, collectionB) {
    let ret=[];
    for(let i=0;i<collectionA.length;i++){
        if(collectionB.value.indexOf(collectionA[i].key)!=-1){
            ret.push(collectionA[i].key);
        }
    }
    return ret;
}
