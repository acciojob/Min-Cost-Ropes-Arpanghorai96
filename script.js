function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort();
	let cost=0;
	while(arr.length>1)
		{
			let firstValue=arr.shift();
			let secondValue=arr.shift();
			let newRope=firstValue+secondValue;
			cost+=newRope;
			arr.push(newRope);
			arr.sort();
		}
	return cost;
  
}

module.exports=mincost;
