$(document).ready(function() {
    
    function checkID() {
        var message = '';
        var formMessage = $('#usrID').parent().find('#showID');
        if($('#usrID').val().length === 0) {
            message = 'Mã bệnh nhân không thể bỏ trống';
            formMessage.show();
            formMessage.text(message);
            return false;
        } 

        var regexCode = /^BN-(\d{5})$/;
        if(!regexCode.test($('#usrID').val())) {
            message = 'Mã bệnh nhân có định dạng BN-YYYYY';
            formMessage.show();
            formMessage.text(message);
            return false;
        }

        formMessage.hide();
        formMessage.text(message);
        return true;
    }

    function checkPW() {
        var message = '';
        var formMessage = $('#usrPW').parent().find('#showPW');
        if($('#usrPW').val().length === 0) {
            message = 'Mật khẩu không thể bỏ trống';
            formMessage.show();
            formMessage.text(message);
            return false;
        } 

        if($('#usrPW').val().length < 6) {
            message = 'Mật khẩu chứa từ 6 ký tự bất kỳ trở lên';
            formMessage.show();
            formMessage.text(message);
            return false;
        }

        formMessage.hide();
        formMessage.text(message);
        return true;
    }

    function checkDate() {

        var message = '';
        var formMessage = $('#orderDate').parent().find('#showDate');
        if($('#orderDate').val().length === 0) {
            message = 'Ngày khám không được bỏ trống';
            formMessage.show();
            formMessage.text(message);
            return false;
        } 

        var orderDate = new Date($('#orderDate').val());
        orderDate.setHours(0, 0, 0 ,0);
        var dateCurrent = new Date();
        dateCurrent.setHours(0, 0, 0 ,0);

        if(orderDate.getTime() <= dateCurrent.getTime()) {
            message = 'Ngày khám phải sau ngày hiện tại';
            formMessage.show();
            formMessage.text(message);
            return false;
        }

        formMessage.hide();
        formMessage.text(message);
        return true;
    }

    $('#usrPW').blur(checkPW);
    $('#usrID').blur(checkID);
    $('#orderDate').blur(checkDate);
    
    $('#btn-click').click(() => {
        if(!checkID() || !checkPW() || !checkDate()) {
            return;
        }
    }) 

});
