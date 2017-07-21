'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for(let item in collectionA){
    if(objectB.value.indexOf(collectionA[item].key)!=-1){
      collectionA[item].count--;
    }
  }
  return collectionA;
}
