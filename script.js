document.addEventListener("DOMContentLoaded", function () {
    const downloadButtons = document.querySelectorAll(".download-btn");

    downloadButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.stopPropagation();
            const photoDiv = this.parentElement;
            const fullResImage = photoDiv.getAttribute("data-fullres");
            
            const link = document.createElement("a");
            link.href = fullResImage;
            link.download = fullResImage.split("/").pop();
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});