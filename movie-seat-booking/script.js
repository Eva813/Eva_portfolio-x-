// var ticketPrice = $("option").val();


//選取到該電影
// $('#movie').on(function () {
//   var movie = $(this).val();
//   alert("您擅長的程式語言是 : " + movie);
// });

// function() {
//   if ...slected += 1
// }

//
// $(".seat").click(function (e) {
//   var occupied = $(".seat.occupied");
//   var selectedSeats = document.querySelectorAll('.row .seat.selected');

//   var selectedSeatsCount = selectedSeats.length;

//   $(this).css('background-color', '#6feaf6')

//   $('#count').text(selectedSeatsCount);

// })
//點選座位時，抓取電影價格，並計算票價, 人數
// .seat.selected {
// background - color: #6feaf6;
//}
// count.innerText = selectedSeatsCount;
// total.innerText = selectedSeatsCount * ticketPrice;

// Save selected movie index and price
//localStorage網頁上的資料儲存在瀏覽器,[[JS] localStorage 筆記](https://medium.com/%E9%A6%AC%E6%A0%BC%E8%95%BE%E7%89%B9%E7%9A%84%E5%86%92%E9%9A%AA%E8%80%85%E6%97%A5%E8%AA%8C/js-localstorage-%E7%AD%86%E8%A8%98-581d432c2d7f),[JS30-Day15-LocalStorage](https://ithelp.ithome.com.tw/articles/10195522)


const ticketPrice = +$('#movie').val();
//前面多一個+，可以將string轉數字
// console.log(typeof ticketPrice); 可以看資料型態

// function setMovieData(movieIndex, moviePrice) {

//   localStorage.setItem('selectedMovieIndex', movieIndex);
//   localStorage.setItem('selectedMoviePrice', moviePrice);
// }




//電影選擇事件
// $("#movie").change(function (e) {
//   var ticketprice = +e.target.value;
//   console.log(ticketprice);
//   setMovieData(e.target.selectedIndex, e.target.value);//帶入函式
//   console.log(setMovieData);
//   updateSelectedCount();
// });


//2.總價與計數目
function updateSelectedCount() {
  var selectedSeats = $('.row .seat.selected');//被選到的座位
  var selectedSeatsCount = selectedSeats.length;  //位置的計算就是陣列長度
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}



//1.點擊座位觸發事件：e.target:顯示整個div element
$(".container").click(function (e) {
  //意指要挑選條件為：有seat的class，且沒有occupied的class(也就是選擇到occupied的class是無法點選的)
  if (e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
    e.target.classList.toggle("selected");
    //選用toggle可以點擊顯示，在點擊消失
    updateSelectedCount();
  }

});



