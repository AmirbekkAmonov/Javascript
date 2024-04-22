document.addEventListener("DOMContentLoaded", function () {

    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        let paragraph = paragraphs[i];
        let text = paragraph.innerHTML;
        let modifiedText = text.replace(/dolor/g, "$");
        paragraph.innerHTML = modifiedText;
    }
});