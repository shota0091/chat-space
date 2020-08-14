$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageBox" data-message-id=${message.id}>
            <div class="MessageInfo">
            <div class="MessageInfo__userName">
              ${message.user_name}
            </div>
            <div class="MessageInfo__timeStamp">
              ${message.created_at}
            </div>
          </div>
          <div class="coment">
            <p class="coment__message">
              ${message.content}
            </p>
          <img class="Message__image" src="${message.image}">
          </div>
        </div>`

      return html;
    } else {
      let html =
      `<div class="MessageBox" data-message-id=${message.id}>
        <div class="MessageInfo">
          <div class="MessageInfo__userName">
            ${message.user_name}
          </div>
          <div class="MessageInfo__timeStamp">
            ${message.created_at}
          </div>
          </div>
        <div class="coment">
          <p class="coment__message">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $(".text-box").on("submit",function(e) {
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      let html = buildHTML(data)
      $('.main-chat__messageScreen').append(html)
      $('.text-box')[0].reset();
      $('.main-chat__messageScreen').animate({ scrollTop: $('.main-chat__messageScreen')[0].scrollHeight});
      $(".input-box__submitBtn").prop("disabled", false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $('.Form__submit').prop("disabled", false);
    });
  });
});