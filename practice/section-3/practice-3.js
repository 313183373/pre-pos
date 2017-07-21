'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let map={};
  for(let i=0;i<collectionA.length;i++){
    if(typeof(map[collectionA[i]])=="undefined"){
      map[collectionA[i]]=1;
    }else{
      map[collectionA[i]]++;
    }
  }
  for(let item in map){
    if(objectB.value.indexOf(item)!=-1){
      let cnt=Math.floor(map[item]/3);
      map[item]-=cnt;
    }
  }
  let ret=[];
  for(let item in map){
    ret.push({key:item,count:map[item]});
  }
  return ret;
}
