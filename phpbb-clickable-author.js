(function(d) {
    var messageBox = d.querySelector('textarea[name="message"]'), postAuthors = document
            .querySelectorAll("b.postauthor"), length = postAuthors.length;

    clickHandler = function(event) {
        messageBox.value += "[b]" + event.target.innerHTML + "[/b], ";
        messageBox.focus();
    };

    if (messageBox) {
        while (length--) {
            postAuthors[length].style.cursor = "pointer";
            postAuthors[length].onclick = clickHandler;
        }
    }
})(document);