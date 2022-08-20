async function har(){
    try{
    let thi=await fetch("https://hp-api.herokuapp.com/api/characters");
    let res=await thi.json();
    console.log(fi(res));
    
  






    function fi(data){

      for(var i=0;i<=data.length;i++){
         console.log(data[i]);
         console.log(data[i].image);
         console.log(data[i].name);
         console.log(data[i].species)
         console.log(data[i].gender);
         console.log(data[i].house);
 



         
    var div=document.createElement("div");

    div.innerHTML=`

    
    <div class="card " >
        <div class="header"><b></b></div>
        <img class="cards-img" src="${data[i].image}" alt="">
          <div class="card-body">
            <h5 class="card-title">Name:${data[i].name}</h5>
            <h5 class="card-title">Species:${data[i].species}</h5>
            <h5 class="card-title">House:${data[i].house}</h5>
            <h5 class="card-title">Gender:${data[i].gender}</h5>
         
         
           
         </div>
    
      </div>`
    

  
    document.body.append(div);
   }
}
fi()   
  
    }
 catch(err){
   console.log(err);
}



}
har()