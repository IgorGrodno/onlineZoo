const ReadMoreButton = document.getElementById("read-more-button");


const ShowDescription = () => {
    if (ReadMoreButton.innerText === "Read more") {
        ReadMoreButton.innerText = "Read less";
        document.getElementById("read-more").className = "show";

    } else {
        ReadMoreButton.innerText = "Read more";

        document.getElementById("read-more").className = "hide";

    }
};

ReadMoreButton.addEventListener("click", ShowDescription);