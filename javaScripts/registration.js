console.log('it works');


const myForm = document.querySelector('.myForm');
// const msgDom = document.querySelectorAll('.msg');

myForm.addEventListener('submit',function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch('./includes/adduser.inc.php',{
       method: 'POST',
      body: formData  
    }).then(function(response) {
        return response.json();
    }).then(function (text) {
        console.log(text);
    }).catch(function (error) {
        console.log(error);
    })
});
                            // msgDom.forEach((el)=>{
                            //     el.textContent = text.msg
                            // });