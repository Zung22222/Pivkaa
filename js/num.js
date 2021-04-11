$('#num').animate({ num: 1.91- 1 }, {
    duration: 5000,
    step: function (num){
        this.innerHTML = (num + 1).toFixed(2) + 'S'
    }
});
$('#range').animate({ num: 335- 3 }, {
    duration: 4500,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(2) + 'mil'
    }
});
$('#bat').animate({ num: 110- 3 }, {
    duration: 3000,
    step: function (num){
        this.innerHTML = (num + 3).toFixed(0) + 'kwh'
    }
});
$('#saf').animate({ num: 10 - 1 }, {
    duration: 2500,
    step: function (num){
        this.innerHTML = (num + 1).toFixed(0) + '/10'
    }
});