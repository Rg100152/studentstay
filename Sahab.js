

document.addEventListener("DOMContentLoaded", function () {

    console.log("Sahab Raj SinghLodge website loaded successfully.");
    const roomCards = document.querySelectorAll(".room-card");


    roomCards.forEach(function (card) {

        card.addEventListener("click", function () {


            roomCards.forEach(function (item) {

                item.classList.remove("active");

            });
            this.classList.add("active");



            const roomType = this.dataset.room;


            let roomName = "";


            switch (roomType) {

                case "single":

                    roomName = "Single Occupancy";

                    break;


                case "double":

                    roomName = "Double Occupancy";

                    break;


                case "flat":

                    roomName = "Flat - Two Rooms + Kitchen";

                    break;


                default:

                    roomName = "Room";

            }


            console.log("Selected Room:", roomName);

        });

    });

    const lodgeImage = document.querySelector(".header-image img");


    if (lodgeImage) {

        lodgeImage.addEventListener("load", function () {

            console.log("Sahab Raj Singh Lodge.jpg loaded successfully.");

        });


        lodgeImage.addEventListener("error", function () {

            console.error(
                "Sahab Raj SinghLodge.jpg could not be loaded. " +
                "Make sure the image is in the same folder as index.html."
            );

        });

    }
    const phoneNumber = "8787273737,8960277329";

    console.log("Owner:", "Vipin Singh");

    console.log("Phone:", phoneNumber);

    console.log("Single Room: ₹1,200 / month");

    console.log("Double Room: ₹1,500 / month");

});