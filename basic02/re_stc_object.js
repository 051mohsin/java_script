// Object de-structure

const obje = 
    {
        email:"mohsin@gmail.com",
        city : "hasilpur",
        objec:{
            class:"mcs"
        }
    }

const {class:em}= obje.objec

console.log(em)