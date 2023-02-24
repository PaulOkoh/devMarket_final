require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");
const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  seed: (req, res) => {
    sequelize
      .query(
        `


        drop table if exists product;
      

      create table product(product_id serial primary key,
        name varchar not null,
        description varchar(500) not null
        price decimal not null
        imageUrl varchar not null);

      

      
      

      insert into product(name, description, price, imageUrl)
      values ('Apple MacBook Pro 13.3in Retina', 'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day Amazon Renewed Guarantee', 325,  'https://m.media-amazon.com/images/I/71NZpTxWzRL._AC_UY218_.jpg'),
      ('Lenovo', 'Lenovo Flex 5 Laptop, 14.0 FHD Touch Display', 300, 'https://m.media-amazon.com/images/I/6137YYIY24L._AC_UY218_.jpg'),
      ('Apple 2021 MacBook Pro', 'A clean and modern aesthetic to any working environment. In a multi-monitor setup,' 320, ,'https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_UY218_.jpg'),
('SAMSUNG T35F Series 27-Inch FHD 1080p', 'ALL-EXPANSIVE VIEW The 3-sided borderless display brings a clean', 400, 'https://m.media-amazon.com/images/I/61B8Lq5NXmL._AC_UY218_.jpg')




      `
      )
      .then(() => {
        console.log("Database seeded!!!");
        res.sendStatus(200);
      })
      .catch((err) => console.log("DB not seeded", err));
  },
};
