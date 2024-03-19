console.clear()
console.log("INIT")
type Animal={dias:number,name:string,produce:number}


const animals:Animal[]=[{name:'Panda',dias:130,produce:4},
         {name:'Panda',dias:130,produce:4},
         {name:'Panda',dias:130,produce:4},
         {name:'Panda',dias:130,produce:4}]
init()
function init(){
  let days=360
  let c=0
  let stars = 0
  while(c<days){
    // colec stars
    stars += getStars(animals)
    if(stars>=300){
      console.log("Compro panda dia: ",c)
      animals.push({dias:130,produce:4,name:'Panda'})
      stars -= 300
    }
    c++
  }
  loger(animals)
}


function getAlive(array1:Animal[]){
  return array1.filter(e=>e.dias>0).length
}

function getFinalStars(array1:Animal[]){
  const initialValue = 0;
  return array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue.dias*currentValue.produce,
  initialValue,
  );
}

function getStars(array1:Animal[]){
  let sum = 0;
  array1.map(a=>{
    if(a.dias>0){
      sum+=a.produce
      a.dias--  
    }
  })
  return sum
}

function loger(array1:Animal[]){
  console.log("numero de animales: ",array1.length)
  console.log("Alive: ",getAlive(array1))
  console.log("final stars= ",getFinalStars(array1))
}
