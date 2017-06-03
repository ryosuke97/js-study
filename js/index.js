function getAge() {
    var birthday = document.getElementById('birthday').value;
    var date1 = new Date(birthday); // 誕生日
    var date2 = new Date() // 現在時間
    var diff = date2.getTime() - date1.getTime() // 現在までの経過ミリ秒
    // 差分をミリ秒から日に直す
    var dayPast = Math.floor(diff / (1000 * 60 * 60 * 24));

    alert(dayPast + '日経過しました。');

}