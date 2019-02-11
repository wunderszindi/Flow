let a = [];

function setup (q, w , e, r, t , z,d, f, g){
  a.push([q, w , e] ); 
  a.push([r, t , z]);
  a.push([d, f, g]);
}

function rajz (a){
  for (let k = a ; k > 0; k = a.length -1 )
  console.log(a[k])
}
setup(1,2,3,4,5,6,7,8,9)
console.log(rajz(a))
