

document.addEventListener("DOMContentLoaded", function () {

    console.log("Radheshyam Lodge website loaded successfully.");
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

                 case "triple":

                    roomName = "Triple Occupancy";

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

            console.log("Radheshyam Lodge.jpg loaded successfully.");

        });


        lodgeImage.addEventListener("error", function () {

            console.error(
                "Radheshyam Lodge.jpg could not be loaded. " +
                "Make sure the image is in the same folder as index.html."
            );

        });

    }
    const phoneNumber = "9580305822";

    console.log("Owner:", "Radheshyam Yadav");

    console.log("Phone:", phoneNumber);

    console.log("Single Room: ₹1,500 / month");

    console.log("Double Room: ₹2,000 / month");

    console.log("Triple Room: ₹2,300 / month");

});