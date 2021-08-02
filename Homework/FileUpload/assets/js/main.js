const dropContainer = document.querySelector(".drop-container");
const uploading = document.querySelector(".uploading");
const input = document.querySelector("input");
const bin = document.querySelector(".bin");
let file;


const showItem = function(){
    const extentions = ["image/jpeg", "image/jpg", "image/png"];
    let isImg=true;
    

    file.forEach((element)=>{
        if(!(extentions.includes(element.type))){
            isImg=false;
        }
    })
    
    if(isImg){
        file.forEach((element)=>{
            const fr=new FileReader();
            fr.readAsDataURL(element);
            
            fr.addEventListener("load",()=>{
                const fileURL = fr.result;

                makeItem(fileURL);

                deleteBtn();

                dragging();

            })
        })
    }
}

function makeItem(fileURL){
    const img = document.createElement("div");
    const btnDelete = document.createElement("button");
    const div = document.createElement("div");
    

    div.setAttribute("draggable","true");
    div.classList.add("d-inline-block");
    div.style.width="150px";
    div.setAttribute("id",Date.now());
    img.style.backgroundImage = `url("${fileURL}")`;
    btnDelete.classList.add("btn","btn-danger","ms-2");
    btnDelete.innerText="Delete";
    img.classList.add("img-box");

    div.append(img);
    div.append(btnDelete);
    uploading.prepend(div);
}

function deleteBtn(){
    const dlt = document.querySelector(".btn-danger");
    const div = document.querySelector(".d-inline-block");
    dlt.addEventListener("click",()=>{
        const alertDelete = confirm("Do you want to delete this pic?")
        if(alertDelete){
            div.remove();
        }
    })
}

function dragging(){

    const div =document.querySelector(".d-inline-block");
    
    div.addEventListener("dragover",(e)=>{
        e.preventDefault();
        
    })
    div.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("text",div.getAttribute("id"));
    })
    div.addEventListener("dragenter",(e)=>{
        e.preventDefault();
        console.log("a")
    }, false)
    uploading.addEventListener("drop",(e)=>{
        const newDiv = document.getElementById(e.dataTransfer.getData("text"));
        
        // div.parentNode.insertBefore(newDiv,div)
    })
    
    
}

bin.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

bin.addEventListener("drop",(e)=>{
    e.preventDefault();
    const div = document.getElementById(e.dataTransfer.getData("text"));
    div.remove();
})

dropContainer.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

input.addEventListener("change",(e)=>{
    file = [...e.target.files];
    showItem();
})

dropContainer.addEventListener("drop",(e)=>{
    e.preventDefault();
    file = [...e.dataTransfer.files];
    showItem();
    
})

