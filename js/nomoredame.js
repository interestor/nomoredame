  'use strict';
{


  // アクションカードのコンテンツをランダムに表示する
  {
    const actions = [
      'お気に入りの歌を口ずさむ',
      '銭湯に行く',
      '外に散歩に行く',
    ];
    const actions_image = [
      // 画像をイメージフォルダに入れると動かないのを直したい
      '<img src="img/actioncardimg_sing.jpg" alt="歌う人">',
      '<img src="img/actioncardimg_publicbath.jpg" alt="風呂に入る猿">',
      '<img src="img/actioncardimg_sing_walking.jpg" alt="歩くガチョウ">',
    ];


    const actions_description = [
      'お気に入りの音楽をスピーカーやヘッドフォンで聞き、できれば口ずさみます。',
      '銭湯は心と体をリフレッシュできる場所。近くの銭湯に行ってみましょう。',
      '外に出ること、歩くことは脳にいい刺激をもたらし、気分転換になります。',
    ];

    const actions_firststep = [
      'STEP1:Youtube(or他の音楽サービス)を開こう',
      'STEP1:タオルと下着をバッグに詰めよう',
      'STEP1:靴を履こう',
    ];
    const actions_tips = [
      'Tips:元気なときに落ち込んだ時用の曲リストを作っておくと便利だよ',
      'Tips:手ぬぐいを一枚カバンに入れておくと、外出先の空いた時間でもリフレッシュできるよ',
      'Tips:お気に入りの靴を用意するだけで、なんとなく散歩の気分があがるよ',
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
    action_description.textContenst = actions_description[action_number];
    action_firststep.textContent = actions_firststep[action_number];

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
