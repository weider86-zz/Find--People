//app

$('#btn-find-female').on('click', function(){
  findPeople('female');
});
$('#btn-find-male').on('click', function(){
  findPeople('male');
});
$('#btn-find-random').on('click', function(){
  findPeople('random');
});

function findPeople(gender){
  $.ajax({
    url: 'https://randomuser.me/api/?gender=' + gender,
    dataType: 'json',
    success: function(data) {
      document.getElementById('picture').src = data.results[0].picture.large
      document.getElementById('firstName').textContent = data.results[0].name.first
      document.getElementById('email').textContent = data.results[0].email
    }
  });
}


function notify() {
    Notification.requestPermission(function() {
        var notification = new Notification("Nova mensagem!", {
            icon: 'images/logo-people.png',
            body: "Marina Rui Barbosa chamou para conversar!"
        });
        notification.onclick = function() {
            window.open("http://www.icarros.com.br");
        }
    });
}

(function(){
	'use strict'
  //setInterval(function(){  notify(); }, 10000);
  //notify();
})()
