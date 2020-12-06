"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Courses", [
      {
        title: "Javascript",
        description: "javascript progaming language course",
        image_url:
          "https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg",
        duration: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Phyton",
        description: "javascript progaming language course",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bfIHjO34g1m4kAJ_4ASPb1nYw2qzUbi7KA&usqp=CAU",
        duration: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Golang",
        description: "javascript progaming language course",
        image_url:
          "https://arkademy-production.s3.ap-southeast-1.amazonaws.com/arkademy-course/icon/ad3df002d17bc4e3d7251830a37a4a67",
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "PHP",
        description: "javascript progaming language course",
        image_url: "https://www.php.net/images/php8/php_8_released.png",
        duration: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Ruby",
        description: "javascript progaming language course",
        image_url:
          "https://miro.medium.com/max/710/1*9hd_8qR0CMZ8L0pVbFLjDw.png",
        duration: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dart",
        description: "javascript progaming language course",
        image_url:
          "https://miro.medium.com/max/560/1*LTTHWt4rpytoFlhxGoKQyg.png",
        duration: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
