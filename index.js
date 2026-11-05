document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("searchButton");
    const maxRent = document.getElementById("maxRent");
    const roomType = document.getElementById("roomType");

    if (!searchButton) return;

    searchButton.addEventListener("click", function () {

        const rent = maxRent.value;
        const room = roomType.value;

        window.location.href =
            `lodges.html?maxRent=${rent}&roomType=${room}`;

    });

});