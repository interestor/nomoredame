  'use strict';
 //firebastoreを使うのに必要
//   const firebase = require("firebase");
//   // Required for side-effects
//   require("firebase/firestore");
//
//   //データベースの初期化
//     firebase.initializeApp({
//     apiKey: 'AIzaSyCj9fPI0vvBWAcE07yPDNxm54ILDyZLFYE',
//     authDomain: 'https://nomoredame.firebaseapp.com',
//     projectId: 'nomoredame'
//   });
//   // Initialize Cloud Firestore through Firebase
//   var db = firebase.firestore();
//
//
// //データの追加
//   db.collection("users").add({
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   })
//   .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
//
//   // Add a second document with a generated ID.
//   db.collection("users").add({
//       first: "Alan",
//       middle: "Mathison",
//       last: "Turing",
//       born: 1912
//   })
//   .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding document: ", error);
//   });
//
//   //読み込みテスト
//   db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });




{  // アクションカードのコンテンツをランダムに表示する
  {
    const actions = [
      'お気に入りの歌を口ずさむ',
      '銭湯に行く',
      '外に散歩に行く',
      '講演を聞く',
      '展覧会に行く',
      'twitterで宣言してみよう',
      '水に入る',
      '誰かに褒めてもらおう',
      '人と話す',
      '挨拶をする',
      '映画を見る',
      '小説を読む',
      '5分だけそうじ',
      'シャワーを浴びよう',
      '窓を開けて外の景色を見よう',
      'いい香りをかごう',
      '10分寝よう',
    ];
    const actions_image = [
      '<img src="img/sing.jpg" alt="歌う人">',
      '<img src="img/publicbath.jpg" alt="風呂に入る猿">',
      '<img src="img/walk.jpg" alt="歩くガチョウ">',
      '<img src="img/lecture.jpg" alt="lecture">',
      '<img src="img/exhibit.jpg" alt="exhibit">',
      '<img src="img/declare.jpg" alt="declare">',
      '<img src="img/water.jpg" alt="water">',
      '<img src="img/praise.jpg" alt="praise">',
      '<img src="img/talk.jpg" alt="talk">',
      '<img src="img/greeting.jpg" alt="greeting">',
      '<img src="img/movie.jpg" alt="movie">',
      '<img src="img/novel.jpg" alt="novel">',
      '<img src="img/cleaning.jpg" alt="cleaning">',
      '<img src="img/shower.jpg" alt="shower">',
      '<img src="img/open.jpg" alt="open">',
      '<img src="img/fragrance.jpg" alt="fragrance">',
      '<img src="img/nap.jpg" alt="nap">',
    ];


    const actions_description = [
      'お気に入りの音楽をスピーカーやヘッドフォンで聞き、できれば口ずさみます。',
      '銭湯は心と体をリフレッシュできる場所。近くの銭湯に行ってみましょう。',
      '外に出ること、歩くことは脳にいい刺激をもたらし、気分転換になります。',
      '興味のある分野や好きな人が喋っているのを聞くと、モチベーションがとても上がります。',
      '美術館や博物館、ギャラリーアドで行われている展示を見てみよう。世界の感じ方が少し変わるかも。',
      '「勉強！」とか「布団から出る！」とか、やろうと思ってるけど気がすすまないことを「今からやるぞ」と宣言してみよう',
      'お風呂やプール、海や川…。水に入ると身体感覚が変わるせいか、ちょっとモードが変わってスッキリします。',
      '自分ではダメだ～と思っていても、人から見るとそんなことないもの。身近な人に、「ちょっと褒めてみて」って頼んでみましょう。',
      '人と話すことで人間の頭のモードが切り替わります。数時間以上人と話してないなら、ちょっと人とおしゃべりもいいかも。',
      '最近挨拶しました？人と話すほどのパワーが無いときでも挨拶ならなんとかならない？ちょっとだけ爽やかになるよ。',
      'ちょっと現実世界は忘れましょう！泣ける映画、笑える映画、エキサイティングな映画。別の世界を味わってリフレッシュ。',
      'ちょっと現実世界から離れて物語の世界で休憩しましょう。昔好きだった小説を引っ張り出しても、読みたかった小説を買ってきても。',
      'タイマーを付けて、5分だけ掃除してみよう。人は動き出すとやる気が湧きます。5分後にはちょっとやる気が充電されるかも。',
      'シャワーを浴びているうちに気持ちがスッキリした経験はありませんか？今こそその時！シャワーを浴びよう。',
      '窓を開けて遠くを見て、思いっきり深呼吸しよう！',
      '香りが気持ちに影響を与えてくれます。お香やアロマオイル、香水や石鹸、お菓子でも、いい香りだなーと思うものの香りを思いっきりかぎましょう',
      '寝ることで頭もスッキリ、気分も変わります。',
    ];

    const actions_firststep = [
      'Youtube(or他の音楽サービス)を開こう',
      'タオルと下着をバッグに詰めよう',
      '靴を履こう',
      '講演会を検索してみよう',
      '展覧会を検索してみよう',
      'スマホを手に取る。readモードに入らないように！',
      'スケジュールに予定を入れよう',
      '頼みたい人の顔を思い浮かべてみよう',
      '休憩所など人がいる場所へ行こう',
      '近くのお店や施設等挨拶チャンスのある場所へ',
      '映画館のサイトを覗こう',
      '読みたい本を頭に思い浮かべよう',
      'タイマーをセット！',
      'シャワー室に一歩踏み出そう',
      '立っても窓の方向へ！',
      '香るものを探そう',
      'タイマーをセット',
    ];
    const actions_tips = [
      'Tips:元気なときに落ち込んだ時用の曲リストを作っておくと便利だよ',
      'Tips:手ぬぐいを一枚カバンに入れておくと、外出先の空いた時間でもリフレッシュできるよ',
      'Tips:お気に入りの靴を用意するだけで、なんとなく散歩の気分があがるよ',
      'メルマガやTwitterで自然に情報が入ってくるように',
      'お気に入りの美術館を見つけておくといいよ',
      'やりにくい場合はそれ用のアカウントを用意しても',
      '元気な時に、行きやすいスポットを開拓しておこう',
      'チャットやメールでもOK',
      'ビデオ通話も便利よ',
      '普段から挨拶しとくといいよ',
      '特に感情が揺れる映画がおすすめ！',
      '今度読む本を一冊見えるところに置いておこう',
      '「机の上」などやる場所を限定するのがおすすめ',
      '気持ちいいタオルがあるとより気分が上がるよ',
      'できれば外へ出よう',
      '1つお気に入りのものを家においておこう',
    ];

    // const action = [
    //   title:'お気に入りの歌を口ずさむ',
    //   image:'<img src="img/actioncardimg_sing.jpg" alt="歌う人">',
    //   description:'お気に入りの音楽をスピーカーやヘッドフォンで聞き、できれば口ずさみます。',
    //   firststep:'STEP1:Youtube(or他の音楽サービス)を開こう',
    //   tips:'Tips:元気なときに落ち込んだ時用の曲リストを作っておくと便利だよ',
    // ]
// class Action {
//   constructor(title,image,description,firststep,tips) {
//     this.title = title;
//     this.image = image;
//     thie.description = description;
//     this.firststep = firststep;
//     this.tips = tips;
//   }
// }
//
// const sing = new.Action(
//   'お気に入りの歌を口ずさむ',
//   '<img src="img/actioncardimg_sing.jpg" alt="歌う人">',
//   'お気に入りの音楽をスピーカーやヘッドフォンで聞き、できれば口ずさみます。',
//   'STEP1:Youtube(or他の音楽サービス)を開こう',
//   'Tips:元気なときに落ち込んだ時用の曲リストを作っておくと便利だよ',
// )
//
// const publicbath = new,Action{
//   '銭湯に行く',
//   '<img src="img/actioncardimg_publicbath.jpg" alt="風呂に入る猿">',
//   '銭湯は心と体をリフレッシュできる場所。近くの銭湯に行ってみましょう。',
//   'STEP1:タオルと下着をバッグに詰めよう',
//   'Tips:手ぬぐいを一枚カバンに入れておくと、外出先の空いた時間でもリフレッシュできるよ',
// }


    //ランダムに生成したaction_numberのアクションカードのタイトル、画像、説明、ファーストステップを表示
    const action_title = document.getElementById('action_title');
    const action_image = document.getElementById('action_image');
    const action_description = document.getElementById('action_description');
    const action_firststep = document.getElementById('action_firststep');

    const action_number = Math.floor(Math.random() * actions.length);
    action_title.textContent = actions[action_number];
    console.log(actions.length);
    console.log(action_number);
    action_image.innerHTML = actions_image[action_number];// テキストじゃなく画像なのでinnerHTML
    action_description.textContent = actions_description[action_number];
    action_firststep.textContent = 'STEP1:' + actions_firststep[action_number];

// function done(){
//   //完了画面のコンテンツ表示
//     const actions_tip = document.getElementById('actions_tip');
//     actions_tip.textContent = actions_tips[action_number];
//   }

  }
}

//やっている最中のモーダル
var open = document.getElementById('yaru_button');
var close = document.getElementById('yatta_button');
var mask = document.getElementById('mask');
var modal = document.getElementById('modal');

const doing_action = document.getElementById('doing_action');
doing_action.textContent = action_title.textContent;

open.addEventListener('click',function(){
  mask.className = '';
  modal.className = 'doing_modal';
});

close.addEventListener('click',function(){
  document.location='done.html';
});

//モーダル画面外をクリックでモーダル画面が閉じるように
mask.addEventListener('click',function(){
  mask.className = 'hidden';
  modal.className = 'hidden';
});


// {// PWA化
//   // サービスウォーカーを設定
//   window.addEventListener('load', function() {
//       if ('serviceWorker' in navigator) {
//           navigator.serviceWorker.register("/serviceworker.js");
//       }
//   });

  // プッシュ通知の許可を得る
  //後々は通知画面で表示するようにする
//   Notification.requestPermission(function(status) {
//     console.log("通知の許可:", status);//コンソールに許可されたかどうかを表示
//   });
// }
