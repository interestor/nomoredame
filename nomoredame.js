  'use strict';
{
// アクションカードの操作
  //ボタンを一度押すと色が変わり、に通すとdone.htmlに飛ぶ
  function OnOff(lol){
    if (lol.value == "やるぞ！") {
      lol.value = "おわった！";
      document.getElementById('target').classList.add('done_button');
      } else {
        document.location='done.html';
      }
    }

  // アクションカードのコンテンツをランダムに表示する
  {
    const actions = [
      'お気に入りの歌を口ずさむ',
      '銭湯に行く',
      '外に散歩に行く',
    ];
    const actions_image = [
      // 画像をイメージフォルダに入れると動かないのを直したい
      '<img src="actioncardimg_sing.jpg" alt="歌う人">',
      '<img src="actioncardimg_publicbath.jpg" alt="風呂に入る猿">',
      '<img src="actioncardimg_sing_walking.jpg" alt="歩くガチョウ">',
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

    //ランダムに生成したaction_numberのアクションカードのタイトル、画像、説明、ファーストステップを表示
    //後でオブジェクト名？をわかりやすいものに変えること
    const target_1 = document.getElementById('target_1');
    const target_2 = document.getElementById('target_2');
    const target_3 = document.getElementById('target_3');
    const target_4 = document.getElementById('target_4');

    const action_number = Math.floor(Math.random() * actions.length);
    target_1.textContent = actions[action_number];
    target_2.innerHTML = actions_image[action_number];// テキストじゃなく画像なのでinnerHTML
    target_3.textContenst = actions_description[action_number];
    target_4.textContent = actions_firststep[action_number];
  }
}

{// PWA化
  // サービスウォーカーを設定
  window.addEventListener('load', function() {
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register("/serviceworker.js");
      }
  });

  // プッシュ通知の許可を得る
  //後々は通知画面で表示するようにする
  Notification.requestPermission(function(status) {
    console.log("通知の許可:", status);//コンソールに許可されたかどうかを表示
  });
}
