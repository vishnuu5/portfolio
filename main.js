
  var typed = new Typed('#element', {
    strings: ['Full Stake Developement' , 'FrontEnd Development' , 'BackEnd Development', 'Web Development'],
    typeSpeed: 100,
    backspeed: 100,
    backDelay: 1000,
    loop:true
  });


  
  

  const scriptURL = 'https://script.google.com/macros/s/AKfycbw-6JIMzOmyNlcmfcZpyg1PtLmfIB0-xumKlOghgK8ZBoNpC11WurhUW4rWoamgHGU8/exec'
        const form = document.forms['contactform']
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then( swal({
              title: "Successfull",
              text: "Your Data Successfull Received",
              icon: "success",
              button: "submit",
            }),
              message =>{
                
                  if(message=='ok'){
                    swal("Successfull", "Your Data Successfull Received", "success", {
                      button: "submit",
                    });
                  } 
                  else {
                    swal("Something wrong", "Your Data is not Received", "error")
                  }
            })
            .then(() => {  window.location.reload(); })
            .catch(error => console.error('Error!', error.message))
        })
