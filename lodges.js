document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);

    const maxRentParam = params.get("maxRent");
    const roomTypeParam = params.get("roomType");

    const lodgeCards = document.querySelectorAll(".lodge-card");
    if (!maxRentParam || !roomTypeParam) {

        lodgeCards.forEach(function (card) {
            card.style.display = "";
        });

        return;
    }

    const maxRent = Number(maxRentParam);
    const roomType = roomTypeParam.toLowerCase();

    lodgeCards.forEach(function (card) {

        let price = 0;

        if (roomType === "single") {

            price = Number(card.dataset.single);

        }

        else if (roomType === "double") {

            price = Number(card.dataset.double);

        }

        else if (roomType === "triple") {

            price = Number(card.dataset.triple);

        }

        else if (roomType === "flat") {

            price = Number(card.dataset.flat);

        }

        else if (roomType === "any") {

            const single = Number(card.dataset.single);
            const double = Number(card.dataset.double);
            const triple = Number(card.dataset.triple);
            const flat = Number(card.dataset.flat);

            const match =
                (single > 0 && single <= maxRent) ||
                (double > 0 && double <= maxRent) ||
                (triple > 0 && triple <= maxRent) ||
                (flat > 0 && flat <= maxRent);

            if (match) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

            return;
        }

        if (price > 0 && price <= maxRent) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});