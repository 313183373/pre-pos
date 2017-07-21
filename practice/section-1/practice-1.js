'use strict';

function collectSameElements(collectionA, collectionB) {
    let ret=[];
    for(let i=0;i<collectionA.length;i++){
        if(collectionB.indexOf(collectionA[i])!=-1){
            ret.push(collectionA[i]);
        }
    }
    return ret;
}
