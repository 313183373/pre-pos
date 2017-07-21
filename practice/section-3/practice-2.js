'use strict';
function createUpdatedCollection(collectionA, objectB) {
  for(let item in collectionA){
    if(objectB.value.indexOf(collectionA[item].key)!=-1){
      let cnt=Math.floor(collectionA[item].count/3);
      collectionA[item].count-=cnt;
    }
  }
  return collectionA;
}
