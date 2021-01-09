
const items = JSON.parse(localStorage.getItem('items')) || [];
//plates = [] => item陣列 ;platesList => ul表中li的項目文字
const itemsList = $('.plates');


//********************************* */
// 函式為每次submit後items就會新增在輸入欄位中的物件了
$('.add-items').submit(function (e) {
  // 加上preventDefault()避免每次submit都會重整網頁
  e.preventDefault();
  const text = $("input[name='item']").val();
  //console.log(text);
  // 宣告新增要存入的物件，是輸入的文字與是否勾選的狀態(done) =>
  const item = {
    text: text,
    done: false
  }
  //將輸入的item，放入創立的空陣列中
  items.push(item);
  // console.log(items);
  populateList(items, itemsList);
  //test=> console.log(item);

  //存入
  localStorage.setItem('items', JSON.stringify(items))


  $('.add-items')[0].reset();

});

function populateList(plates = [], platesList) {
  platesList.html(plates.map((plate, i) => {
    return `
    
    <li>
    
    <input type="checkbox" data-index=${i} id="item${i}"  ${plate.done ? 'checked' : ''} />
    <label for="item${i}">${plate.text}</label></li>`;
  }));
}


//重新整理之後，還是儲存list
populateList(items, itemsList);


function toggleDone(e) {
  // 偵測進來的點擊是input(checkbox)才動作
  if (!e.target.matches('input')) return;
  // 取得checkbox的data-index值
  const el = e.target;
  const index = el.dataset.index;
  // 利用！來使done的狀態在true/false間切換
  items[index].done = !items[index].done;
  // 將更新後的狀態寫入localStorage中
  localStorage.setItem('items', JSON.stringify(items));
  // 更新列表
  populateList(items, itemsList);
}
// 監聽click
itemsList.click(toggleDone);



//Step6. 增加刪除功能
