

document.addEventListener("DOMContentLoaded", function () {

    console.log("Naina Lodge website loaded successfully.");
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

            console.log("Naina Lodge.jpg loaded successfully.");

        });


        lodgeImage.addEventListener("error", function () {

            console.error(
                "Naina Lodge.jpg could not be loaded. " +
                "Make sure the image is in the same folder as index.html."
            );

        });

    }
    const phoneNumber = "9795896165";

    console.log("Owner:", "Ramkumar Prajapati");

    console.log("Phone:", phoneNumber);

    console.log("Single Room: ₹1,700 / month");

    console.log("Double Room: ₹2,000 / month");

    console.log("Flat: ₹3,000 / month");

});