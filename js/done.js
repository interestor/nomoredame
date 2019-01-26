'use strict';
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
    '<img src="img/actioncardimg_sing_walking.jpgg" alt="歩くガチョウ">',
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

//完了画面のコンテンツ表示
  const action_number=1;
  // 定数にしているのは値を受け継ぐところを作るまでの一次的な処理


  const actions_tip = document.getElementById('actions_tip');
  actions_tip.textContent = actions_tips[action_number];
}
