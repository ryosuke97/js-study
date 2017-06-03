function getAge() {

    // 入力値の取得
    var birthday = document.getElementById('birthday').value.split('-');;

    // 日付オブジェクトの作成
    var date1 = new Date(birthday[0], birthday[1] - 1, birthday[2]);
    var date2 = new Date() // 現在時間

    // 日数、年齢の計算
    var diff = date2.getTime() - date1.getTime() // 現在までの経過ミリ秒
    var dayPast = Math.floor(diff / (1000 * 60 * 60 * 24)); // 差分をミリ秒から日に直す
    var age = Math.floor(dayPast / 365.25); // 大体の年齢

    // 結果の表示
    document.getElementById('dayPast').innerHTML = dayPast;
    document.getElementById('age').innerHTML = age;

}