$(document).ready(function () {
    var errorCounter = [];
    $('button').on('click', function () {
        var name = $('#nameId').val();
        var age = $('#ageId').val();
        var nickname = $('#nicknameId').val();
        // console.log(name,age,nickname);
        var isName = name != "" && isNaN(name);
        if (isName) {
            isSuccess('nameId');
            errorCounter[0] = 0;
        } else {
            isError('nameId');
            errorCounter[0] = 1;
        }
        var isAge = age.length <= 3 && age != "" && age > 0 && !isNaN(age) && age == parseInt(age);
        if (isAge) {
            isSuccess('ageId');
            errorCounter[1] = 0;
        } else {
            isError('ageId');
            errorCounter[1] = 2;
        }

        var atLeast9 = nickname.length >= 9;
        var atleast1 = false;
        for (var i = 0; i < nickname.length; i++) {
            var chars = nickname.charAt(i);
            if (isNaN(chars)) {
                var isUpper = chars.toUpperCase() == chars;
                atleast1 = atleast1 || isUpper;

            }
        }
        var isNickname = atleast1 && atLeast9 && nickname != "";
        if (isNickname) {
            isSuccess('nicknameId')
            errorCounter[2] = 0;
        } else {

            isError('nicknameId');
            errorCounter[2] = 3;
        }
        isCorrect = isName && isAge && isNickname;
        if (isCorrect) {
            showSuccess();
        } else {
            showError(errorCounter);
        }
    });
});
var isSuccess = (success) => {
    $('#' + success).addClass('border-success').removeClass('border-danger');
}
var isError = (error) => {
    $('#' + error).addClass('border-danger').removeClass('border-success');
}
var showSuccess = () => {

    var success = "";
    success += `
    <div class = "alert alert-success">
        <strong> Success ! </strong>
    </div>
    `;
    $('#message').html(success)
}
var errorMessage = ["Name is empty !", "Age must be number!",
    "Nickname at least 1 uppercase and 9 chars"];
var showError = (errorCountersssss) => {
    var error = "";
    if (errorCountersssss[0] == 1) {
        error += "- " + errorMessage[0] + "<br>";
    } else {
        error += "";
    }
    if (errorCountersssss[1] == 2) {
        error += "- " + errorMessage[1] + "<br>";
    } else {
        error += "";
    }
    if (errorCountersssss[2] == 3) {
        error += "- " + errorMessage[2] + "<br>";
    } else {
        error += "";
    }
    $('#message').html(
        `
        <div class = "alert alert-danger">
        <strong> ${error}</strong>
    </div>
        `
    )
}