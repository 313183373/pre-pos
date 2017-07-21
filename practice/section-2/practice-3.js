'use strict';

function countSameElements(collection) {
	let dic={};
	let ans=[];
	for(let i=0;i<collection.length;i++){
		if(collection[i].length>1){
			if(collection[i][1]=='-'||collection[i][1]==':'){
				var cc=collection[i][1];
				var c=collection[i].split(cc)[0];
				var cnt=collection[i].split(cc)[1]-'0';
			}else if(collection[i][1]=='['){
				var c=collection[i].split('[')[0];
				var cnt=collection[i].split('[')[1].split(']')[0]-'0';
			}
		}else{
			var c=collection[i];
			var cnt=1;
		}
		if(typeof(dic[c])=='undefined'){
			dic[c]=cnt;
		}else{
			dic[c]+=cnt;
		}
	}
	for(let item in dic){
		ans.push({name:item,summary:dic[item]})
	}
	return ans;
}
