import {createStore, combineReducers} from 'redux';
import {v4} from 'uuid'

let PuranaData={
    Shoping:[],
    Searched:'',
    order:0,
    Product:[
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct1Maain.png%3Falt%3Dmedia%26token%3D57390b99-b996-41f8-a184-472b5c21bc90&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct1min.avif%3Falt%3Dmedia%26token%3Ded10ebe1-f8ab-4672-a420-b7783434c91a&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct1min2.avif%3Falt%3Dmedia%26token%3D646b21ab-54c4-4d67-ae1d-9b463c8990c3&w=640&q=75",
            title1:"CLOUDFOAM PURE SHOES ",
            title2:"Cloud White / Chalk White / Zero Metalic",
            price:   71.25,
            brand:"nike"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct2Main.png%3Falt%3Dmedia%26token%3D8a15e1a3-6514-4d4f-ab80-135efb35b59c&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct2min.avif%3Falt%3Dmedia%26token%3D7bbd4088-efb3-4278-9ef5-c4b4b29f84fc&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct2min2.avif%3Falt%3Dmedia%26token%3D67a47b57-bbd8-47cd-86f1-c8044dc6a2d2&w=640&q=75",
            title1:"HOOPS 3.0   VINTAGE SHOES ",
            title2:"Grey Two / Collegiate Green / Cloud White",
            price:66.5,
            brand: "service"

        },


        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct3Main.avif%3Falt%3Dmedia%26token%3Dcfb8a965-e230-4bf1-8756-265ed419502f&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct3min.avif%3Falt%3Dmedia%26token%3De37feb31-9441-40a0-ac0c-4804f90f29bd&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct3min2.avif%3Falt%3Dmedia%26token%3D44b07f4d-a206-46b8-82c2-6f0081321efd&w=640&q=75",
            title1:"DAILY 3.0 SHOES ",
            title2:"Shadow Brown / Preloved Brown / Cloud White",
            price:61.75,
            brand:"adadise"

        },
          {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct4main.avif%3Falt%3Dmedia%26token%3De7267dcd-3119-4d5b-b872-4cf9e4eefd68&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct4min.avif%3Falt%3Dmedia%26token%3D298d74ae-7575-4221-8bc3-7940feced493&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct4min2.avif%3Falt%3Dmedia%26token%3Db0af69de-42cf-43db-8116-601d90bea535&w=640&q=75",
            title1:"KAPTIR 3.0 SHOES ",
            title2:"Core Black / Screaming Orange / Shadow Olive",
            price:85.5,
            brand:"nike"
        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct5main.avif%3Falt%3Dmedia%26token%3D76c8eb87-50d3-4493-9573-731d5fce55a2&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct5min.avif%3Falt%3Dmedia%26token%3Dbb233576-fa65-47dd-b23d-a6c87c56f801&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct5min2.avif%3Falt%3Dmedia%26token%3Df39d2900-80ae-47a4-b17f-376115c52d39&w=640&q=75",
            title1:"Y-3 GAZELLE ",
            title2:"Cloud White / Chalk White / Zero Metalic",
            price:285,
            brand: "service"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct6main.avif%3Falt%3Dmedia%26token%3D1926d8ed-373d-4989-9462-a9d2e1f0ccd4&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct6min.avif%3Falt%3Dmedia%26token%3D3e3729a5-bf63-425e-940f-f16c0fd539b0&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct6min2.avif%3Falt%3Dmedia%26token%3D6bd06229-22b0-453a-af79-5e82448b86d0&w=640&q=75",
            title1:"RACER TR23 SHOES ",
            title2:"Dark Blue / Cloud White / Halo Silver",
            price:64,
            brand:"nike"
        },
          {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct7main.avif%3Falt%3Dmedia%26token%3D75513f13-1d32-450f-8333-fb3b66100061&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct7min.avif%3Falt%3Dmedia%26token%3Dc6765dc4-e40a-469d-a46a-9dc56515f99b&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct7min2.avif%3Falt%3Dmedia%26token%3D6e185bb1-455b-4f3c-ac7e-504010275036&w=640&q=75",
            title1:" KANTANA SHOES",
            title2:"Chalk White / Wonder Clay / Wonder Quartz",
            price:72,
            brand: "bata"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct8main.avif%3Falt%3Dmedia%26token%3Dc78d67b3-02ed-4e49-924a-083889aab78b&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct8min.avif%3Falt%3Dmedia%26token%3Dcb6ce1bf-2b48-4c23-b598-1cea5c9e4c64&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct8min2.avif%3Falt%3Dmedia%26token%3D8970eda6-5939-4053-a11b-38574ee64c39&w=640&q=75",
            title1:"ADILETTE SANDALS ",
            title2:"Core Black / Cloud White / Core Black",
            price:32,
            brand:"adadise"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct9main.png%3Falt%3Dmedia%26token%3Dcfb49f49-4ebb-4cdf-99ce-d02b9ab09655&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct9min.avif%3Falt%3Dmedia%26token%3D7bc82caa-d12b-4b73-9274-158de43b76e6&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct9min2.avif%3Falt%3Dmedia%26token%3D82d666b9-8f57-4332-86e0-208c0561acf6&w=640&q=75",
            title1:" GAZELLE SHOES",
            title2:"Silver Dawn / Cloud White / Core Black",
            price:80,
            brand:"nike"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct10main.png%3Falt%3Dmedia%26token%3Ddb5ad18d-89d1-49ba-9491-9c806be947be&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct10min.avif%3Falt%3Dmedia%26token%3D7515fba4-3373-483f-9dcb-c8b89a773591&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct10min2.avif%3Falt%3Dmedia%26token%3Df92e7667-03b3-460d-afa5-88de711e0786&w=640&q=75",
            title1:"RUNFALCON 2.0 SHOES ",
            title2:"Cloud White / Vision Met. / Signal Green",
            price:40,
            brand:"adadise"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct11main.avif%3Falt%3Dmedia%26token%3D27367286-7570-4100-babe-02a66c791ba2&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct11min.avif%3Falt%3Dmedia%26token%3D3e462f43-f7a3-456f-b918-eac71c98bd0c&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct11min2.avif%3Falt%3Dmedia%26token%3D0c7153d9-063d-44cd-8bfc-c4643c7217d9&w=640&q=75",
            title1:"ULTRABOOST 1.0 SHOES ",
            title2:"Silver Green / Silver Green / Olive Strata",
            price:140,
            brand: "bata"

        },
        {
            id: v4(),
            img1:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2Fimage%252Fproduct12main.avif%3Falt%3Dmedia%26token%3Dbbeddfbb-90ce-4432-8272-55988e9eb00b&w=640&q=75",
            img2:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageT%252Fproduct12min.avif%3Falt%3Dmedia%26token%3D221004da-4ca6-4c18-a246-4af43c1c6cfa&w=640&q=75",
            img3:"https://shoe-paradies.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fweb-chat-app-b5031.appspot.com%2Fo%2FimageTh%252Fproduct12min2.avif%3Falt%3Dmedia%26token%3D1231e31f-2f99-4d24-95d2-29cbca223c4f&w=640&q=75",
            title1:"ULTRABOOST 1.0 ARIZONA   ",
            title2:"Cloud White / Team Maroon / Team Colleg Gold",
            price:140,
            brand: "bata"

        },

        

    ]
}
   
function ProductSection(oldata=PuranaData,newdata){
    oldata={...oldata}
    // if(newdata.type=="ADD-TO-CART"){
    //     oldata.Shoping.push(newdata.payload)
    // }
    if(newdata.type=="ADD-TO-CART"){
          oldata.Shoping.push(newdata.payload)
          oldata.order+=1
    }
    if(newdata.type=="SEARCHED_VALUE"){
        oldata.Searched=newdata.payload
    }
    return oldata
}

  let Authpuranadata={
    Userlog:null,
  }
function AuthSection(oldata=Authpuranadata,newdata){
    oldata={...oldata}
 if(newdata.type=="USER-ADD-KARO"){
    oldata.Userlog = newdata.payload 
 }else if(newdata.type=='USER-DELETE-KARRO'){
    // localStorage.removeItem("")
    // localStorage.removeItem("Maintoken3")
    oldata.Userlog=null
 }

    return oldata
}

let Allsection= combineReducers({ProductSection,AuthSection})
export  let myStore=createStore(Allsection)