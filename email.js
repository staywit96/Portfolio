$(document).ready(function() {
    emailjs.init("OCimGz-zna2z5Bp-u");

    $('#submit').click(function(){
        var templateParams = {
            email : $('#email').val(),
            title: $('#title').val(),
            message : $('#message').val()};

        emailjs.send('service_leotm6w', 'template_jiy5hzx', templateParams)
            .then(function(response) {
                alert('메일이 전송되었습니다. 확인 후 연락 드리겠습니다!')
                window.location.reload();
            }, function(error) {
                alert('오류가 발생했습니다. 다시 시도해주세요!')
            });
    });

});
