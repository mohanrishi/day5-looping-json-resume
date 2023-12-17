/*For the given JSON lterate over all forloops(for,for in,for each ,for of)*/

let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all", true);
request.send();
request.onload = function () {
  let data = request.response;
  let result = JSON.parse(data);
  console.log(result[0].name.common);
  console.log(result[249].area);
  //for accessing multiple values use looping
  //!using for loop
  for (let i = 0; i < result.length; i++) {
    console.log(result[i].area);
  } 
//!using for in loop
 for (let index in result){
    console.log(result[index].region)
 }
 //!using for of loop
 for(let obj of result){
    console.log(obj.population,obj.name.common);
 }
 //using for Each method 
 let val=result.forEach((ele)=>{
    console.log(ele.flag)
 })
};
//------------------------------------------------------------------------------------
/*2.create you  oun resume in data in JSON format*/

let myResume=[


{
  "gendralInfo": {
    "name": "mohan sunthar",
    "email": "romanxxx@gmailcom",
    "phone": "9597xxxx92",
    "degree": "Bsc.visual communication",
    "website": "github.com/mohanrishi",
    "summary": "im mohan from chennai, i recently finished my bachelor of degree in periyar evr college in trichy, now i am studying in IITM in guvi zen class",
   },
    "location": {
      "address": "keeraxxxxx,",
      "postalCode": "62xxx1",
      "city": "chennai",
      "countryCode": "india",
      "region": "hindu"
    },
    "profiles": [
      {
        "linedin":"mohanrishi",
        'now':"now i am finished my MERN development course",
        "project":"my project was mech bike & car application"
      }
    ],
    "educationBackground":[
        "10th","12th","Bsc.Visual communication","MERN DEVELOPMENT"
    ]

 }
]
console.log(myResume);
