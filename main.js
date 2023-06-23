let icon = document.querySelector("#icon")
let input = document.querySelector('#input')
let container = document.querySelector(".container-user-info")
let button = document.querySelector('#btns')



icon.addEventListener('click' , (event)=>{
    const getUserInfo = function(getData){
          if(input.value === getUserInfo){
            
} 

        container.innerHTML =
        `
        <div class="section-profile">
        <div class="profile">
            <img src="${getData.avatar_url}" alt="">
        </div>
        <div class="profile-info">
            <h1>${getData.name}</h1>
            <h5>${getData.login}</h5>
            <p>${new Date(getData.created_at).toLocaleDateString()}</p>
            <div class="section-under">
                <div class="columnone">
                    <i class="fa-solid fa-user-group"></i>
                    <p><span> ${getData.followers}</span> followers</p>
                    </div>
                    <div class="columntwo">
                    <p> <span>${getData.following}</span> following</p>
                    </div> 
                </div>
                <div class="container-btns">
                <button  id="btns"> <a href="${getData.html_url}" target="_blank">Follow</a>  <i class="fa-solid fa-plus"></i></button>
            
            </div> 
        </div>`  
      
      }
    
const getInfo = async(info)=>{
   const request = await fetch(`https://api.github.com/users/${info}`)
   const response = await request.json()
      .then((data)=>{
        console.log(data);
        getUserInfo(data)
        if(!request.ok){
            swal("Not found please check fill input or enter correct username");
            const button = await (request.ok) 

        } else{
            swal("Founded!", ' ' ,  "success");

        }
      })
     
    .catch((reject)=>{
console.log(reject);
    })
}

getInfo(input.value)

})

