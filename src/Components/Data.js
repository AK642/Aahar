//Restaurants..........................................................
import Restaurant1 from '../assets/images/burger-restaurant.jpg'
import Restaurant2 from '../assets/images/pizza-restaurant.jpg'
import Restaurant3 from '../assets/images/hot-dog-restaurant.jpg'
import Restaurant4 from '../assets/images/japanese-restaurant.jpg'
import Restaurant5 from '../assets/images/noodle-shop.jpg'
import Restaurant6 from '../assets/images/kek-lapis-shop.jpg'

//Categories...........................................................
import Pizza from '../assets/images/pizza.png'
import HotDog from '../assets/images/hotdog.png'
import Drink from '../assets/images/drink.png'
import Salad from '../assets/images/salad.png'
import Noodle from '../assets/images/noodle.png'
import Fries from '../assets/images/fries.png'
import Sushi from '../assets/images/sushi.png'
import Rice from '../assets/images/rice-bowl.png'

//Food..................................................................
import crispy_chicken_burger from '../assets/images/crispy-chicken-burger.jpg'
import honey_mustard_chicken_burger from '../assets/images/honey-mustard-chicken-burger.jpg'
import baked_fries from '../assets/images/baked-fries.jpg'
import hawaiian_pizza from '../assets/images/hawaiian-pizza.jpg'
import pizza from '../assets/images/pizza.jpg'
import tomato_pasta from '../assets/images/tomato-pasta.jpg'
import salad from '../assets/images/salad.jpg'
import chicago_hot_dog from '../assets/images/chicago-hot-dog.jpg'
import sushi from '../assets/images/sushi.jpg'
import kolo_mee from '../assets/images/kolo-mee.jpg'
import sarawak_laksa from '../assets/images/sarawak-laksa.jpg'
import nasi_lemak from '../assets/images/nasi-lemak.jpg'
import nasi_briyani_mutton from '../assets/images/nasi-briyani-mutton.jpg'
import teh_c_peng from '../assets/images/teh-c-peng.jpg'
import ice_kacang from '../assets/images/ice-kacang.jpg'
import kek_lapis from '../assets/images/kek-lapis.jpg'

export const categories = [
    {
        id: 1,
        name: 'Pizza',
        icon: Pizza
    },
    {
        id: 2,
        name: 'HotDog',
        icon: HotDog
    },
    {
        id: 3,
        name: 'Drink',
        icon: Drink
    },
    {
        id: 4,
        name: 'Salad',
        icon: Salad
    },
    {
        id: 5,
        name: 'Noodle',
        icon: Noodle
    },
    {
        id: 6,
        name: 'Fries',
        icon: Fries
    },
    {
        id: 7,
        name: 'Sushi',
        icon: Sushi
    },
    {
        id: 8,
        name: 'Rice',
        icon: Rice
    }
];

export const restaurants = [
    {
      id: 1,
      name: 'Crest Cafe',
      rating: 4.8,
      items: 'Burger . Snacks',
      categories: [9,6],
      price: 100,
      photo: Restaurant1,
      duration: '30 - 45 min',
      menu: [
        {
          restaurantId: 1,
          menuId: 101,
          name: 'Crispy Chicken Burger',
          photo: crispy_chicken_burger,
          description: 'Burger with crispy chicken, cheese and lettuce',
          calories: 200,
          price: 150,
        },
        {
          restaurantId: 1,
          menuId: 102,
          name: 'Crispy Chicken Burger with Honey Mustard',
          photo: honey_mustard_chicken_burger,
          description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
          calories: 250,
          price: 175,
        },
        {
          restaurantId: 1,
          menuId: 103,
          name: 'Crispy Baked French Fries',
          photo: baked_fries,
          description: 'Crispy Baked French Fries',
          calories: 194,
          price: 96,
        },
      ]
    },
    {
      id: 2,
      name: 'The Hearty Slice',
      rating: 3.2,
      items: 'Noodles . Salads . Pizza',
      categories: [9,5,4,1],
      price: 150,
      photo: Restaurant2,
      duration: '15 - 20 min',
      menu: [
        {
          restaurantId: 2,
          menuId: 201,
          name: 'Hawaiian Pizza',
          photo: hawaiian_pizza,
          description: 'Canadian bacon, homemade pizza crust, pizza sauce',
          calories: 250,
          price: 210,
        },
        {
          restaurantId: 2,
          menuId: 202,
          name: 'Tomato & Basil Pizza',
          photo: pizza,
          description:
            'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
          calories: 250,
          price: 260,
        },
        {
          restaurantId: 2,
          menuId: 203,
          name: 'Tomato Pasta',
          photo: tomato_pasta,
          description: 'Pasta with fresh tomatoes',
          calories: 100,
          price: 120,
        },
        {
          restaurantId: 2,
          menuId: 204,
          name: 'Mediterranean Chopped Salad ',
          photo: salad,
          description: 'Finely chopped lettuce, tomatoes, cucumbers',
          calories: 100,
          price: 350,
        },
      ]
    },
    {
      id: 3,
      name: 'Shalimar Restaurant',
      rating: 3.7,
      items: 'Hot Dogs',
      categories: [9,2],
      price: 150,
      photo: Restaurant3,
      duration: '20 - 25 min',
      menu: [
        {
          restaurantId: 3,
          menuId: 301,
          name: 'Chicago Style Hot Dog',
          photo: chicago_hot_dog,
          description: 'Fresh tomatoes, all beef hot dogs',
          calories: 100,
          price: 70,
        },
      ]
    },
    {
      id: 4,
      name: 'The Raw Herbivore',
      rating: 4.8,
      items: 'Sushi',
      categories: [9,7],
      price: 200,
      photo: Restaurant4,
      duration: '10 - 15 min',
      menu: [
        {
          restaurantId: 4,
          menuId: 401,
          name: 'Sushi sets',
          photo: sushi,
          description: 'Fresh salmon, sushi rice, fresh juicy avocado',
          calories: 100,
          price: 140,
        },
      ]
    },
    {
      id: 5,
      name: 'Namastey Lounge',
      rating: 4.8,
      items: 'Rice . Noodles',
      categories: [9,8,5],
      price: 100,
      photo: Restaurant5,
      duration: '15 - 20 min',
      menu: [
        {
          restaurantId: 5,
          menuId: 501,
          name: 'Kolo Mee',
          photo: kolo_mee,
          description: 'Noodles with char siu',
          calories: 200,
          price: 125,
        },
        {
          restaurantId: 5,
          menuId: 502,
          name: 'Sarawak Laksa',
          photo: sarawak_laksa,
          description: 'Vermicelli noodles, cooked prawns',
          calories: 300,
          price: 70,
        },
        {
          restaurantId: 5,
          menuId: 503,
          name: 'Nasi Lemak',
          photo: nasi_lemak,
          description: 'A traditional Malay rice dish',
          calories: 300,
          price: 195,
        },
        {
          restaurantId: 5,
          menuId: 504,
          name: 'Nasi Briyani with Mutton',
          photo: nasi_briyani_mutton,
          description: 'A traditional Indian rice dish with mutton',
          calories: 300,
          price: 199,
        },
      ]
    },
    {
      id: 6,
      name: 'Dessert First',
      rating: 4.9,
      items: 'Desserts . Drinks',
      categories: [9,3],
      price: 150,
      photo: Restaurant6,
      duration: '35 - 40 min',
      menu: [
        {
          restaurantId: 6,
          menuId: 601,
          name: 'Teh C Peng',
          photo: teh_c_peng,
          description: 'Three Layer Teh C Peng',
          calories: 100,
          price: 399,
        },
        {
          restaurantId: 6,
          menuId: 602,
          name: 'ABC Ice Kacang',
          photo: ice_kacang,
          description: 'Shaved Ice with red beans',
          calories: 100,
          price: 299,
        },
        {
          restaurantId: 6,
          menuId: 603,
          name: 'Kek Lapis',
          photo: kek_lapis,
          description: 'Layer cakes',
          calories: 300,
          price: 355,
        },
      ]
    }
];