// let url="https://catfact.ninja/fact";
// async function getfacts(){
//    try{
//      let res= await axios.get(url);
//      console.log(res.data.facts);
//     }catch(e){
//     console.log("Error -",e);
// }
// } 
// async function greet(){
//   return "Hello world"
// }
// greet()
// .then((resp)=>{
//     console.log(`succeded : ${resp}`)
// })
// .catch((err )=>{
//   console.log(`Failed : ${err}`)
// })
 let potter = fetch("https://api.potterdb.com/");
 let dogs = fetch("https://dog.ceo/api/breeds/image/random");
 let cat = fetch("https://catfact.ninja/fact");
 fetch(cat)
 .then((rawData)=>{
   x=rawData.json()
   console.log(x)   
    return rawData.json();
   }
 )
 .then((data)=>{
   console.log(data.fact);
 })
// .catch((err)=>{
//   console.log(`Failed : ${err}`);
// })
// let js = '{"fact":"The leopard is the most widespread of all big cats.","length":51}'
// let validJs = JSON.parse(js)
// console.log(validJs.fact)