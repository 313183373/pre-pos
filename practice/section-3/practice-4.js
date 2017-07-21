'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let map={};
  for(let i=0;i<collectionA.length;i++){
    if(collectionA[i].length>1){
      var c=collectionA[i].split('-')[0];
      var cnt=collectionA[i].split('-')[1];
    }else{
      c=collectionA[i];
      cnt=1;
    }
    if(typeof(map[c])=="undefined"){
      map[c]=cnt;
    }else{
      map[c]+=cnt;
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
