// Initialize Firebase
const config = {
    apiKey: "AIzaSyBMgs3i6bjBqfNcs0qzBGf2PfGYe0LkNPQ",
    authDomain: "r-web-d3670.firebaseapp.com",
    databaseURL: "https://r-web-d3670.firebaseio.com",
    projectId: "r-web-d3670",
    storageBucket: "",
    messagingSenderId: "753665995527"
  };
  firebase.initializeApp(config);

$(() => {

    $(function() {
        $('.lazy').lazy();
    });
            

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    function smoothScroll(e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
              window.location.hash = hash;
            });
          } 
    }

    $(".nav-link").on('click', smoothScroll);
    $(".navbar-brand").on('click', smoothScroll);

    $(".nav-link").on("click", function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
     });



     /* contact form */ 

     
     const submit = $("#submit");

     const database = firebase.database();

    
    function postData(e) {
        e.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const msg = $("#msg").val();

            database.ref("contact/").push({
                name: name, 
                email: email, 
                phone: phone, 
                msg: msg
            });
        
    }

    submit.on("click", postData)

});

