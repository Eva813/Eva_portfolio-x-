

populateUI();

let ticketPrice = +$('#movie').val();
//前面多一個+，可以將string轉數字
// console.log(typeof ticketPrice); 可以看資料型態



//儲存電影索引以及價格
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);

}



//電影選擇事件movie
$("#movie").change(function (e) {
  ticketPrice = +e.target.value;
  //console.log(ticketPrice);
  setMovieData(e.target.selectedIndex, e.target.value);

  //此參數為實際抓取的資料
  updateSelectedCount();
});





//2.總價與計數目
function updateSelectedCount() {
  var selectedSeats = $('.row .seat.selected');  //被選到的座位
  var seats = $('.row .seat:not(.occupied)');
  var selectedSeatsCount = selectedSeats.length;  //位置的計算就是陣列長度

  //*******儲存座位**************** *//
  //複製被選到的座位，形成陣列(arr)
  //運用mpa()，建立新陣列
  //回傳(return)新陣列的索引

  var seatsIndex = [...selectedSeats].map(function (seat) {
    return [...seats].indexOf(seat);
    //座位的索引：被選擇座位的陣列.map=>去回傳原本沒被佔用座位的索引
  })

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //console.log(seatsIndex);

  $('#count').text(selectedSeatsCount);
  $('#total').text(selectedSeatsCount * ticketPrice);
}

//從localstorage取的資料，以及populateUI
//[How to Use forEach() to Iterate an Array in JavaScript](https://dmitripavlutin.com/foreach-iterate-array-javascript/)
//取得選擇的座位
function populateUI() {
  var seats = $('.row .seat:not(.occupied)');
  var selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  //在updateSelectedCount()中，有儲存一個名為selectedSeats的資料，將它轉成arry

  if (selectedSeats !== null && selectedSeats.length > 0) {
    [...seats].forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  var selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    $('#movie').selectedIndex = selectedMovieIndex;
  }

  // console.log(selectedMovieIndex)
}




//1.點擊座位觸發事件：e.target會顯示整個div element
$(".container").click(function (e) {

  //意指要挑選條件為：有seat的class，且沒有occupied的class(也就是選擇到occupied的class是無法點選的)
  if ($(e.target).hasClass("seat") && !$(e.target).hasClass("occupied")) {
    $(e.target).toggleClass("selected");
    //選用toggle可以點擊顯示，再點擊消失
    updateSelectedCount();
  }
  //e.target.classList.contains("occupied")=> $(e.target).hasClass

});


// let arr = [1, 2, 3];
// let arr2 = [...arr, 4, 5];

// //使用map要創造一個新變數
// let arr3 = arr2.map(function (item) {
//   return item * 2;
// })
// console.log(arr3);
// //arry [2,4,6,8,10]

