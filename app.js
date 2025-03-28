let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function(){
    let item = document.createElement("li");        // add list item
    item.innerText = inp.value;

    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    
    
    
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";

    
    
});

//ye jo below line diya hai usse new vala task delete nhi hota hai

// let delBtns = document.querySelectorAll(".delete");

// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
        
//         let par = this.parentElement;
//        // console.log(par);              ye use krke aap pata laga skte hai ki event listener kam kar rha hai ki nhi
//         par.remove();
//     });
// }


// use event delegation
ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }

});
