console.log('it works');

const content = document.querySelector('.content');
const choosePhoto = document.querySelector('.choose_photo');
const uploadPhoto = document.querySelector('.upload_photo');

const editProfileBtn = document.querySelector('.btnedit');
const profileForm = document.querySelector('.profile_form');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const address = document.querySelector('.address');
const submitProfile = document.querySelector('.submit_profile');
const logoutButton = document.querySelector('.logout');

const formData = new FormData();

const messageDom = document.querySelector('.msg');

function updateMessage(value){
    messageDom.textContent = value
}

function view(data){

    const html = ` 
    <img src="${data.photo.slice(7)}" alt="myphoto" class="photo">
    
    <div class="details">
    <div>
    <label for="firstname">First Name</label>
    <p class="firstname">${data.firstName}</p>
</div>

<div>
    <label for="lastname">Last Name</label>
    <p class="lastname">${data.lastName}</p>
</div>

<div>
    <label for="email">Email</label>
    <p class="email">${data.email}</p>
</div>

<div>
    <label for="address">Address</label>
    <p class="address">${data.address}</p>
</div>

<div>
    <label for="phone">Phone</label>
    <p class="address">${data.phone}</p>
</div>
        
    </div>`;

    content.innerHTML = html;
}

// function initFetch (){
    fetch("./includes/view-single-user.php",{
        method: 'GET',
       
    }).then(function(response) {
        return response.json();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error);
    })
 
        

        

// }

// initFetch();


uploadPhoto.addEventListener('click', ()=>{

    const fileField = choosePhoto;
    formData.append('username', 'abc123');
    formData.append('profile_pic', choosePhoto.files[0]);

    fetch(`includes/upload-photo.inc.php`, {
        method: 'PUT', // or 'PUT'
        body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

        })
        .catch((error) => {
        console.error('Error:', error);
        });
});     

editProfileBtn.addEventListener('click', () => {
    profileForm.classList.toggle('hide');
});


// submitProfile.addEventListener('click', () => {
//     let data = {
//         firstName: firstName.value,
//         lastName: lastName.value,
//         email: email.value,
//         phone: phone.value,
//         address: address.value,
       
//     }

//     console.log(data)

//     fetch(`http://localhost:3090/users/edit_profile/?id=${USER}`, {
//         method: 'PUT', // or 'PUT'
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//         })
//         .then(response => response.json())
//         .then(data => {
//         console.log('Success:', data);
//         updateMessage(data.msg);
//         })
//         .catch((error) => {
//         console.error('Error:', error);
//         });
// });


// logoutButton.addEventListener('click', () => {
    
    
//     fetch(`http://localhost:3090/users/logout/?id=${USER}`, {
//         method: 'DELETE', // or 'PUT'
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         // updateMessage(data.msg);
//         window.localStorage.removeItem('USER');
//         window.location = 'http://localhost:3090/';
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });
    
// });