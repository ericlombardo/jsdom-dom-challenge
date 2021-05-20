document.addEventListener('DOMContentLoaded', function(e) {
  // collect nodes
  let count = document.getElementById('counter'); // counter
  let minBttn = document.getElementById('minus'); // minus button
  let plusBttn = document.getElementById('plus'); // plus button
  let heartBttn = document.getElementById('heart'); // heart button
  let pauseBttn = document.getElementById('pause'); // pause button
  let submitBttn = document.getElementById('submit'); // comment submit button
  let comment = document.getElementById('comment-input'); // comment field
  let form = document.getElementById('comment-form'); // comment form
  let list = document.querySelector('ul.likes'); // ul tag for like list
  let commentList = document.getElementById('list'); // div for comment list

  
  //declare flag and set interval to 1 second
  let pause = false; 
  let intervalId = window.setInterval(adjustNum, 1000, count);

  // event listeners
  minBttn.addEventListener('click', handleMinBttn);
  plusBttn.addEventListener('click', handlePlusBttn);
  heartBttn.addEventListener('click', handleHeart);
  pauseBttn.addEventListener('click', handlePause);
  form.addEventListener('submit', handleComment, 'event');
  

  // function handlers
  function adjustNum(count) {
    if (pause === false) {
      let newCount = parseInt(count.innerText) + 1;
      count.innerText = newCount;
    }
  }

  function handleMinBttn() {
    // subtract 1 from counter and set innerText
    let newCount = parseInt(count.innerText) - 1;
    count.innerText = newCount;
  }

  function handlePlusBttn() {
    //add 1 from counter and set innerText
    let newCount = parseInt(count.innerText) + 1;
    count.innerText = newCount;
  }

  let hCount;
  function handleHeart() {
    let like = document.createElement('li');
    // if no likes or first like for second use 1 and singular
    if (list.childElementCount === 0 || list.lastElementChild.innerText.split(' ')[0] != count.innerText ) {
      hCount = 0;
      ++hCount
      like.innerText = `${count.innerText} has been liked ${hCount} time`;
    // if more than 1 like for second => add to counter and use times
    } else if (list.lastElementChild.innerText.split(' ')[0] == count.innerText) {
      ++hCount
      like.innerText = `${count.innerText} has been liked ${hCount} times`;
    }
    // add like li to list ul
    list.appendChild(like);
  }

  function handlePause() {  //switchs pause flag and de/activates buttons
    if (pause === false) {
      pause = true;
      pauseBttn.innerText = "Resume";
      heartBttn.disabled = true;
      minBttn.disabled = true;
      plusBttn.disabled = true;
      submitBttn.disabled = true;
    } else {
      pause = false;
      pauseBttn.innerText = "Pause";
      heartBttn.disabled = false;
      minBttn.disabled = false;
      plusBttn.disabled = false;
      submitBttn.disabled = false;
    }
  }

  function handleComment(event) {
    event.preventDefault();
    let newComment = document.createElement('p');
    newComment.innerText = comment.value;
    commentList.appendChild(newComment);
    comment.value = '';
  }
});

