self.addEventListener('fetch', function(event) {//エラー回避のための空のイベント

});

// プッシュ通知を受け取る
self.addEventListener("push", function(event) {
  console.log("Push Notification Recieved", event);
  if (Notification.permission == "granted") {
    event.waitUntil(
      self.registration
        .showNotification("お元気ですか", {
          body: "お知らせです。",
          icon: "icon.png"
        })
        .then(
          function(showEvent) {},
          function(error) {
            console.log(error);
          }
        )
    );
  }
});

// プッシュ通知をクリックした時の処理
self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("./home.html")
  );
});
