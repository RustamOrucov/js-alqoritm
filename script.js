// !======================= HomeWork 1==================
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12
//   };

//   console.log(Object.keys(student));

// !====================== HomeWork 2===================

// var library = [
//     {
//     title: 'The Road Ahead',
//     author: 'Bill Gates',
//     libraryID: 1254
//     },
//     {
//     title: 'Walter Isaacson',
//     author: 'Steve Jobs',
//     libraryID: 4264
//     },
//     {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//     }];
    
  
//     function newObj(obj){
//         for(let key in obj){
//            let z= obj[key].author
//            obj[key].author=obj[key].title
//            obj[key].title=z
//         }
//       return  obj.sort((a,b)=>b.libraryID-a.libraryID)
//     }
     
//      console.log(newObj(library));


// !======================== HomeWork 3=============================
   
// const user={
//         title: 'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//         };

 
// function attendance(obj,val){
//  return   obj.hasOwnProperty(val)
// }
         
// console.log(attendance(user,'title'));
    
// !====================== HomeWork 4================================
// function subset(str){
//     let arr=[]
//     let newStr=str.split('')
    
//     for(let i=1;i<=str.length;i++){
//         arr.push(str.slice(0,i))
//     }
//     for(let j=str.length;j>0;j--){
        
//        arr.push(str.split('').reverse().join('').slice(0,j).split('').reverse().join(''))
//     }
//         return arr
// }

// console.log(subset('dog'));

// !==================== HomeWork 5 ==================================
let user={
    title: 'The Road Ahead',
    yazar: 'Bill Gates',
    libraryID: 1254
    }

function rev(obj){
    let newObj={}

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            const value=obj[key]
            newObj[value]=key
        }
    }
    return newObj
}

console.log(rev(user));