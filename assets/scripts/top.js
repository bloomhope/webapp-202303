'use strict';

let dialog = document.querySelector('dialog'); // dialog（モーダルダイアログ）の宣言
let btn_open = document.getElementById('open'); // open（開く）ボタンの宣言
let btn_close = document.getElementById('close'); // close（閉じる）ボタンの宣言
btn_open.addEventListener('click', function() { 
  // 開くボタンをクリックした場合の処理
  dialog.showModal();
}, false);
btn_close.addEventListener('click', function() {
  // 閉じるボタンをクリックした場合の処理
  dialog.close();
}, false);

$(function(){
  /* Modal2へのボタン押下時のイベント */
  $('#modal2').on('click', function() {
      changeModal('modal1', 'modal2');
  });
  /* モーダルの切り替え */
  function changeModal(beforeModal, afterModal) {
      $('#'+beforeModal).modal( 'hide' );
      $('#'+afterModal).modal('show');
  }
});