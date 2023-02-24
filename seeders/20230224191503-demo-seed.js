'use strict';

  {import('sequelize-cli').Migration} 
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('Products', [
    {
      name: "Apple MacBook Pro 13.3in Retina",
      description: "The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee.",
      price: 325,
      imageUrl: "https://m.media-amazon.com/images/I/71NZpTxWzRL._AC_UY218_.jpg",
      
    },
    {
      name: "lenovo",
       description: "Lenovo Flex 5 Laptop, 14.0 FHD Touch Display, AMD Ryzen 5 5500U, 16GB RAM, 512GB Storage",
      price: 300,
      imageUrl: "https://m.media-amazon.com/images/I/6137YYIY24L._AC_UY218_.jpg",
     
    },
    {
      name: "Apple 2021 MacBook Pro",
      description: " A clean and modern aesthetic to any working environment. In a multi-monitor setup,",
      price: 0.00,
      imageUrl: "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY218_.jpg",
      
    },
    {
      name: "SAMSUNG T35F Series 27-Inch FHD 1080p", 
      description: "ALL-EXPANSIVE VIEW The 3-sided borderless display brings a clean and modern aesthetic to any working environment. In a multi-monitor setup,",
      price: 85,
      imageUrl: "https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_UY218_.jpg",
      
    },
  ],  {});
  
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('People', null, {});

  }
};
