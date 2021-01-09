

$('.add-items').submit(function (e) {
  console.log('222');
  e.preventDefault();
  const text = $("input[name='item']")
  const item = {
    text: 'Item Name',
    done: false
  }
});
