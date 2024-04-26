function mincost(arr)
{ 
//write your code here
// return the min cost
	
	let cost=0;
	while(arr.length>1)
		{
			arr.sort((a, b) => a - b);
			let firstValue=arr.shift();
			let secondValue=arr.shift();
			let newRope=firstValue+secondValue;
			cost+=newRope;
			arr.push(newRope);
			
		}
	return cost;
  
}

module.exports=mincost;
