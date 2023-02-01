const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function(event) {
    event.preventDefault()
    if (count == 1) {
        // Xem h?t b�nh lu?n
        return false
    }
    translateY += -400
    comment.style.transform = `translateY(${translateY}px)`
    count--
})

prev.addEventListener('click', function(event) {
    event.preventDefault()
    if (count == 3) {
        // Xem h?t b�nh lu?n
        return false
    }
    translateY += 400
    comment.style.transform = `translateY(${translateY}px)`
    count++
})

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}