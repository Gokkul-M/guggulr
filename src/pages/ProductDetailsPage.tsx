
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Plus, Minus, Mail, Heart, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';

// Import product images
import almonds from '../assets/products/Almonds.png';
import fourPieceCashews from '../assets/products/4-piece Cashews.png';
import bambooRice from '../assets/products/Bamboo Rice.png';
import blackDates from '../assets/products/Black Dates.png';
import blackRaisinsWithSeeds from '../assets/products/Black Raisins with Seed.png';
import brokenCashews from '../assets/products/Broken Cashews.png';
import cakeSeeds from '../assets/products/Cake Seeds.png';
import cherry from '../assets/products/Cherry.png';
import chiaSeed from '../assets/products/Chia seed.png'; // fixed variable name
import driedAmla from '../assets/products/Dried Amla.png';
import dryDates from '../assets/products/Dry Dates.png';
import fennelSeeds from '../assets/products/Fennel Seeds.png';
import fenugreekSeeds from '../assets/products/Fenugreek Seeds.png';
import fig from '../assets/products/Fig.png';
import foxtailMillet from '../assets/products/foxtail millet.png';
import greenRaisinsType1 from '../assets/products/Green Raisins (Type 1).png';
import kasuriMethi from '../assets/products/Kasuri Methi.png';
import kodoMillet from '../assets/products/Kodo Millet.png';
import kokum from '../assets/products/Kokum.png';
import masalaCashew from '../assets/products/Masala Cashew.png';
import mixedDryfruits from '../assets/products/Mixed Dry fruits.png';
import palmJaggery from '../assets/products/Palm Jaggery.png';
import pepper from '../assets/products/Pepper.png';
import pepperCashew from '../assets/products/Pepper Cashew.png';
import pistachios from '../assets/products/Pistachios.png';
import poppySeeds from '../assets/products/Poppy Seeds.png';
import pumpkinSeeds from '../assets/products/Pumpkin Seeds.png';
import redRice from '../assets/products/Red Rice.png';
import saffron from '../assets/products/Saffron.png';
import saltCashew from '../assets/products/Salt Cashew.png';
import singaporeCinnamon from '../assets/products/Singapore Cinnamon.png';
import sunflowerSeeds from '../assets/products/Sunflower Seeds.png';
import turmericStick from '../assets/products/Turmeric Stick.png';
import walnutKernels from '../assets/products/Walnut (kernels).png';
import walnutShell from '../assets/products/Walnut (Shell).png';
import watermelonSeeds from '../assets/products/Watermelon Seeds.png';
import whiteDates from '../assets/products/White Dates.png';
import wildCardamom from '../assets/products/Wild Cardamom.png';
import wholeCashews from '../assets/products/Whole Cashews.png';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('500g');

  // Comprehensive product database
  const productsDatabase = {
    1: {
      id: 1,
      name: "4-piece Cashews",
      tagline: "California's finest",
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 156,
      description: "These are cashew nuts that have been broken into four pieces. They are a common snack and ingredient. Often used in cooking and baking. Their smaller size makes them versatile for various recipes. They offer the same creamy texture and flavor as whole cashews.",
      nutritionFacts: { calories: 160, protein: "6g", fat: "14g", carbs: "6g", fiber: "4g" },
      ingredients: "100% Raw Almonds",
      storage: "Store in a cool, dry place. Refrigerate after opening.",
      origin: "California, USA",
      weights: ["250g", "500g", "1kg", "2kg"],
      images: [fourPieceCashews, fourPieceCashews]
    },
    2: {
      id: 2,
      name: "Almonds",
      tagline: "Creamy & nutritious",
      price: 32.99,
      originalPrice: 38.99,
      rating: 4.7,
      reviews: 89,
      description: "Edible nuts with a hard shell. Known for their nutritional value. Used in various culinary applications, from snacks to desserts. Almonds are a good source of vitamin E and healthy fats. They can be enjoyed raw, roasted, or as almond butter.",
      nutritionFacts: { calories: 157, protein: "5g", fat: "12g", carbs: "9g", fiber: "1g" },
      ingredients: "100% Raw Cashews",
      storage: "Store in a cool, dry place. Best consumed within 6 months.",
      origin: "Vietnam",
      weights: ["250g", "500g", "1kg"],
      images: [almonds, almonds]
    },
    3: {
      id: 3,
      name: "Bamboo Rice",
      tagline: "Turkish excellence",
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.9,
      reviews: 203,
      description: "A unique grain or seed, possibly wild rice. Often has a distinct flavor and texture. Can be used in various dishes. Bamboo rice is known for its nutty flavor and slightly chewy texture. It's often used in traditional Indian cuisine.",
      nutritionFacts: { calories: 159, protein: "6g", fat: "13g", carbs: "8g", fiber: "3g" },
      ingredients: "100% Turkish Pistachios",
      storage: "Store in airtight container. Keep away from direct sunlight.",
      origin: "Turkey",
      weights: ["250g", "500g", "1kg", "2kg"],
      images: [bambooRice, bambooRice]
    },
    4: {
      id: 4,
      name: "Black Dates",
      tagline: "Brain food supreme",
      price: 28.99,
      originalPrice: 34.99,
      rating: 4.6,
      reviews: 127,
      description: "Dark-colored dried dates. Sweet and chewy. A good source of energy. Black dates are rich in fiber and natural sugars. They are a popular snack and can be used in baking and desserts.",
      nutritionFacts: { calories: 185, protein: "4g", fat: "18g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Walnut Kernels",
      storage: "Refrigerate for longer freshness. Use within 12 months.",
      origin: "California, USA",
      weights: ["250g", "500g", "1kg"],
      images: [blackDates, blackDates]
    },
    5: {
      id: 5,
      name: "Black Raisins with Seeds",
      tagline: "Nature's candy",
      price: 18.99,
      originalPrice: 22.99,
      rating: 4.8,
      reviews: 168,
      description: "Dark dried grapes that contain seeds. Sweet and slightly tart. Used in baking and as a snack. These raisins offer a natural sweetness and a slightly chewy texture. The seeds are edible but can be removed if preferred.",
      nutritionFacts: { calories: 66, protein: "0.4g", fat: "0.1g", carbs: "18g", fiber: "1.6g" },
      ingredients: "100% Natural Black Dates",
      storage: "Store in cool, dry place. No refrigeration needed.",
      origin: "Iran",
      weights: ["500g", "1kg", "2kg"],
      images: [blackRaisinsWithSeeds, blackRaisinsWithSeeds]
    },
    6: {
      id: 6,
      name: "Broken Cashews",
      tagline: "Perfect combination",
      price: 35.99,
      originalPrice: 42.99,
      rating: 4.7,
      reviews: 94,
      description: "Cashew nuts, typically in pieces. More economical than whole cashews. Used in cooking and as a topping. Broken cashews are ideal for use in stir-fries, curries, and as a crunchy topping for salads. They provide the same delicious taste as whole cashews at a lower cost.",
      nutritionFacts: { calories: 170, protein: "6g", fat: "15g", carbs: "7g", fiber: "3g" },
      ingredients: "Almonds, Cashews, Walnuts, Pistachios",
      storage: "Store in airtight container in cool, dry place.",
      origin: "Mixed Origins",
      weights: ["500g", "1kg", "2kg"],
      images: [brokenCashews, brokenCashews]
    },
    7: {
      id: 7,
      name: "Cake Seeds",
      tagline: "Rich & crunchy",
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.5,
      reviews: 75,
      description: "A mix of various seeds and spices. Often used in baking, particularly for cakes. Adds flavor and texture. This blend typically includes ingredients like fennel, coriander, and sesame seeds. It provides a unique aromatic profile to baked goods.",
      nutritionFacts: { calories: 63, protein: "0.5g", fat: "0.1g", carbs: "17g", fiber: "1.5g" },
      ingredients: "100% Natural White Dates",
      storage: "Store in cool, dry place away from moisture.",
      origin: "Tunisia",
      weights: ["500g", "1kg"],
      images: [cakeSeeds, cakeSeeds]
    },
    8: {
      id: 8,
      name: "Cherry",
      tagline: "Sweet & tangy",
      price: 16.99,
      originalPrice: 20.99,
      rating: 4.4,
      reviews: 112,
      description: "Dried fruit, small and reddish. Sweet and slightly tart. Used in snacks, baking, and cereals. Dried cherries are a good source of antioxidants. They add a burst of flavor and chewiness to various dishes.",
      nutritionFacts: { calories: 85, protein: "1g", fat: "0.1g", carbs: "22g", fiber: "1g" },
      ingredients: "100% Green Grapes (Dried)",
      storage: "Store in airtight container. Keep in cool, dry place.",
      origin: "Iran",
      weights: ["250g", "500g", "1kg"],
      images: [cherry, cherry]
    },
    9: {
      id: 9,
      name: "Chia Seed",
      tagline: "Kashmir's treasure",
      price: 89.99,
      originalPrice: 105.99,
      rating: 5.0,
      reviews: 45,
      description: "Small, nutrient-rich seeds. Known for their health benefits. Used in smoothies, puddings, and baked goods. Chia seeds are an excellent source of omega-3 fatty acids, fiber, and protein. They absorb liquid and create a gel-like consistency.",
      nutritionFacts: { calories: 7, protein: "0.2g", fat: "0.1g", carbs: "1.4g", fiber: "0.1g" },
      ingredients: "100% Pure Kashmiri Saffron",
      storage: "Store in airtight container away from light and heat.",
      origin: "Kashmir, India",
      weights: ["1g", "5g", "10g"],
      images: [chiaSeed, chiaSeed]
    },
    10: {
      id: 10,
      name: "Dried Amla",
      tagline: "Queen of spices",
      price: 42.99,
      originalPrice: 48.99,
      rating: 4.8,
      reviews: 67,
      description: "Dried Indian gooseberry. Known for its sour taste and health properties. Often consumed as a snack or used in traditional medicine. Dried amla is rich in vitamin C and has a distinct tangy flavor. It's believed to have various health benefits.",
      nutritionFacts: { calories: 18, protein: "0.6g", fat: "0.4g", carbs: "4g", fiber: "1.6g" },
      ingredients: "100% Wild Cardamom Pods",
      storage: "Store in airtight container to preserve aroma.",
      origin: "Guatemala",
      weights: ["50g", "100g", "250g"],
      images: [driedAmla, driedAmla]
    },
    11: {
      id: 11,
      name: "Dry Dates",
      tagline: "Sweet & aromatic",
      price: 25.99,
      originalPrice: 30.99,
      rating: 4.6,
      reviews: 88,
      description: "Dried dates, often harder and less moist than fresh dates. Sweet and a good source of fiber. Used in snacks and baking. Dry dates are a convenient and long-lasting snack. They can be rehydrated for use in recipes.",
      nutritionFacts: { calories: 19, protein: "0.3g", fat: "0.1g", carbs: "6g", fiber: "4g" },
      ingredients: "100% Singapore Cinnamon Bark",
      storage: "Store in dry place away from direct sunlight.",
      origin: "Singapore",
      weights: ["100g", "250g", "500g"],
      images: [dryDates, dryDates]
    },
    12: {
      id: 12,
      name: "Fennel Seeds",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Aromatic seeds with a licorice-like flavor. Used in cooking, particularly in Indian cuisine. Also used as a digestive aid. Fennel seeds are known for their distinct aroma and flavor. They are often chewed after meals to aid digestion.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [fennelSeeds, fennelSeeds]
    },
    13: {
      id: 13,
      name: "Fenugreek Seeds",
      tagline: "Golden healing",
      price: 14.99,
      originalPrice: 18.99,
      rating: 4.5,
      reviews: 156,
      description: "Aromatic seeds often used in cooking. Have a slightly bitter taste. Used in curries and other dishes. Fenugreek seeds are a staple in Indian cooking. They add a unique flavor and aroma to savory dishes.",
      nutritionFacts: { calories: 24, protein: "1g", fat: "0.7g", carbs: "4g", fiber: "1.4g" },
      ingredients: "100% Pure Turmeric Sticks",
      storage: "Store in dry place away from moisture and light.",
      origin: "Tamil Nadu, India",
      weights: ["100g", "250g", "500g"],
      images: [fenugreekSeeds, fenugreekSeeds]
    },
    14: {
      id: 14,
      name: "Fig",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Dried fruit, sweet and chewy. A good source of fiber. Used in snacks, baking, and preserves. Dried figs are a delicious and nutritious snack. They can be used in various recipes, from tarts to stews.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [fig, fig]
    },
    15: {
      id: 15,
      name: "Foxtail Millet",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "A type of nutritious millet grain. Easy to digest and a good source of energy. Used in various dishes, including porridge and pilaf. Foxtail millet is a gluten-free grain. It's a good source of protein and fiber.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [foxtailMillet, foxtailMillet]
    },
    16: {
      id: 16,
      name: "Green Raisins (Type 1)",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Light-colored dried grapes. Sweet and slightly tangy. Used in snacks, baking, and salads. Green raisins are a popular snack and ingredient. They add a touch of sweetness and chewiness to various dishes.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [greenRaisinsType1, greenRaisinsType1]
    },
    17: {
      id: 17,
      name: "Kasuri Methi",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: " Dried fenugreek leaves, a popular herb/spice. Has a distinct, slightly bitter aroma. Used in Indian cooking to add flavor. Kasuri methi is a key ingredient in many Indian curries and dishes. It imparts a unique depth of flavor.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [kasuriMethi, kasuriMethi]
    },
    18: {
      id: 18,
      name: "Kodo Millet",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "A type of nutritious millet grain. Rich in fiber and minerals. Used in various traditional dishes. Kodo millet is a hardy and nutritious grain. It's often used in traditional Indian and African cuisine.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [kodoMillet, kodoMillet]
    },
    19: {
      id: 19,
      name: "Kokum",
      tagline: "Kashmir's treasure",
      price: 89.99,
      originalPrice: 105.99,
      rating: 5.0,
      reviews: 45,
      description: "A dried fruit often used as a souring agent/spice. Has a unique tangy flavor. Used in curries and other dishes, particularly in South Indian cuisine. Kokum is a popular ingredient in South Indian cooking. It provides a distinct sourness to dishes.",
      nutritionFacts: { calories: 7, protein: "0.2g", fat: "0.1g", carbs: "1.4g", fiber: "0.1g" },
      ingredients: "100% Pure Kashmiri Saffron",
      storage: "Store in airtight container away from light and heat.",
      origin: "Kashmir, India",
      weights: ["1g", "5g", "10g"],
      images: [kokum, kokum]
    },
    20: {
      id: 20,
      name: "Masala Cashew",
      tagline: "Queen of spices",
      price: 42.99,
      originalPrice: 48.99,
      rating: 4.8,
      reviews: 67,
      description: "Cashew nuts seasoned with spices. A popular savory snack. The spice blend can vary. Masala cashews are a flavorful and addictive snack. The spice mix typically includes ingredients like chili, turmeric, and garam masala.",
      nutritionFacts: { calories: 18, protein: "0.6g", fat: "0.4g", carbs: "4g", fiber: "1.6g" },
      ingredients: "100% Wild Cardamom Pods",
      storage: "Store in airtight container to preserve aroma.",
      origin: "Guatemala",
      weights: ["50g", "100g", "250g"],
      images: [masalaCashew, masalaCashew]
    },
    21: {
      id: 21,
      name: "Mixed Dry fruits",
      tagline: "Sweet & aromatic",
      price: 25.99,
      originalPrice: 30.99,
      rating: 4.6,
      reviews: 88,
      description: "An assortment of various dried fruits and nuts. A convenient and nutritious snack. The mix can include a variety of ingredients. Mixed dry fruits provide a combination of flavors and textures. It's a great source of energy and nutrients.",
      nutritionFacts: { calories: 19, protein: "0.3g", fat: "0.1g", carbs: "6g", fiber: "4g" },
      ingredients: "100% Singapore Cinnamon Bark",
      storage: "Store in dry place away from direct sunlight.",
      origin: "Singapore",
      weights: ["100g", "250g", "500g"],
      images: [mixedDryfruits, mixedDryfruits]
    },
    22: {
      id: 22,
      name: "Palm Jaggery",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Unrefined sugar made from palm sap. Has a distinct caramel-like flavor. Used in traditional sweets and desserts. Palm jaggery is a natural sweetener. It's often used in traditional Indian and Southeast Asian cuisine.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [palmJaggery, palmJaggery]
    },
    23: {
      id: 23,
      name: "Pepper Cashew",
      tagline: "Golden healing",
      price: 14.99,
      originalPrice: 18.99,
      rating: 4.5,
      reviews: 156,
      description: "Cashew nuts seasoned with pepper. A savory snack with a kick. The pepper can be black, white, or a mix. Pepper cashews offer a spicy twist on the classic cashew snack. The pepper provides a flavorful heat.",
      nutritionFacts: { calories: 24, protein: "1g", fat: "0.7g", carbs: "4g", fiber: "1.4g" },
      ingredients: "100% Pure Turmeric Sticks",
      storage: "Store in dry place away from moisture and light.",
      origin: "Tamil Nadu, India",
      weights: ["100g", "250g", "500g"],
      images: [pepperCashew, pepperCashew]
    },
    24: {
      id: 24,
      name: "Pistachios",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Greenish-purple nuts in a hard shell. Known for their unique color and flavor. Used in snacks, desserts, and savory dishes. Pistachios are a popular snack and ingredient. They are a good source of protein and fiber.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [pistachios, pistachios]
    },
    25: {
      id: 25,
      name: "Poppy Seeds",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Small, kidney-shaped seeds, often used in baking. Have a nutty flavor. Used in breads, cakes, and pastries. Poppy seeds add a unique texture and nutty flavor to baked goods. They are also used in some savory dishes.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [poppySeeds, poppySeeds]
    },
    26: {
      id: 26,
      name: "Pumpkin Seeds",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Edible seeds from pumpkins. Nutritious and often roasted as a snack. Used in salads and baking. Pumpkin seeds are a good source of magnesium and zinc. They are a crunchy and flavorful snack.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [pumpkinSeeds, pumpkinSeeds]
    },
    27: {
      id: 27,
      name: "Red Rice",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "A variety of rice with a reddish bran layer. Known for its nutty flavor and chewy texture. Used in various dishes. Red rice is a whole grain rice. It's a good source of fiber and nutrients.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [redRice, redRice]
    },
    28: {
      id: 28,
      name: "Saffron",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "A prized spice, known for its distinct color/flavor. One of the most expensive spices in the world. Used in various cuisines, particularly Mediterranean and Asian. Saffron is known for its vibrant color and unique aroma. It's used to add flavor and color to dishes.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [saffron, saffron]
    },
    29: {
      id: 29,
      name: "Salt Cashew",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Cashew nuts with a salty flavor. A popular savory snack. The salt content can vary. Salt cashews are a classic savory snack. The salt enhances the natural sweetness of the cashews.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [saltCashew, saltCashew]
    },
    30: {
      id: 30,
      name: "Singapore Cinnamon",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "A type of cinnamon, possibly in stick form. Has a warm, sweet aroma and flavor. Used in baking, desserts, and beverages. Singapore cinnamon is often used in baking and desserts. It provides a warm and sweet flavor.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [singaporeCinnamon, singaporeCinnamon]
    },
    31: {
      id: 31,
      name: "Sunflower Seeds",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Edible seeds from the sunflower plant. Nutritious and often roasted as a snack. Used in salads, baking, and birdseed. Sunflower seeds are a good source of vitamin E and healthy fats. They are a crunchy and versatile snack.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [sunflowerSeeds, sunflowerSeeds]
    },
    32: {
      id: 32,
      name: "Turmeric Stick",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Whole dried turmeric root. Used to make turmeric powder. Known for its color and health benefits. Turmeric sticks are the raw form of turmeric. They are used to make fresh turmeric powder or in traditional medicine.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [turmericStick, turmericStick]
    },
    33: {
      id: 33,
      name: "Walnut (kernels)",
      tagline: "Golden healing",
      price: 14.99,
      originalPrice: 18.99,
      rating: 4.5,
      reviews: 156,
      description: "Shelled walnut pieces. Nutritious and a good source of omega-3 fatty acids. Used in snacks, baking, and salads. Walnut kernels are a popular snack and ingredient. They are known for their brain-boosting benefits.",
      nutritionFacts: { calories: 24, protein: "1g", fat: "0.7g", carbs: "4g", fiber: "1.4g" },
      ingredients: "100% Pure Turmeric Sticks",
      storage: "Store in dry place away from moisture and light.",
      origin: "Tamil Nadu, India",
      weights: ["100g", "250g", "500g"],
      images: [walnutKernels, walnutKernels]
    },
    34: {
      id: 34,
      name: "Walnut (Shell)",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Walnuts in their hard outer shell. Requires cracking to access the kernels. Often sold in this form. Walnuts in the shell are a fun and interactive snack. Cracking them open reveals the delicious kernels inside.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [walnutShell, walnutShell]
    },
    35: {
      id: 35,
      name: "Watermelon Seeds",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: " Edible seeds from watermelon. Can be roasted and eaten as a snack. Used in some cuisines. Watermelon seeds are a surprising source of nutrients. When roasted, they become a crunchy and flavorful snack.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [watermelonSeeds, watermelonSeeds]
    },
    36: {
      id: 36,
      name: "White Dates",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: " Light-colored dried dates. Sweet and chewy. A good source of energy. White dates are similar to black dates but have a lighter color. They are sweet and chewy and a good source of energy.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [whiteDates, whiteDates]
    },
    37: {
      id: 37,
      name: "Wild Cardamom",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "A type of cardamom, possibly with a stronger aroma than green cardamom. Used in cooking, particularly in Indian cuisine. Wild cardamom has a distinct, pungent aroma and flavor. It's often used in savory dishes and spice blends. It adds a unique depth of flavor to curries and stews.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [wildCardamom, wildCardamom]
    },
    38: {
      id: 38,
      name: "Whole Cashews",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Unbroken, whole cashew nuts. A premium snack. Used in cooking and as a garnish. Whole cashews are a classic snack and ingredient. They offer a creamy texture and rich flavor. They are perfect for snacking, baking, or adding to your favorite recipes.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [wholeCashews, wholeCashews]
    },
    39: {
      id: 39,
      name: "Pepper",
      tagline: "King of spices",
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.7,
      reviews: 134,
      description: "Dried berries used as a spice. Comes in various forms, like black, white, and green. Used to add heat and flavor to dishes. Pepper is a versatile spice used in cuisines worldwide. It adds a pungent flavor and heat to dishes.",
      nutritionFacts: { calories: 17, protein: "0.7g", fat: "0.2g", carbs: "4g", fiber: "2g" },
      ingredients: "100% Black Peppercorns",
      storage: "Store in airtight container to maintain potency.",
      origin: "Kerala, India",
      weights: ["100g", "250g", "500g"],
      images: [pepper, pepper]
    },
  };

  const product = productsDatabase[parseInt(id || '1')];

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/products')} className="bg-gradient-to-r from-orange-500 to-red-500">
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-orange-200/50 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base font-medium">Back to Products</span>
          </button>
        </div>
      </div>

      {/* Product Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            
            {/* Product Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl border border-orange-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 cursor-pointer hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Title & Rating */}
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-4">{product.tagline}</p>
                
                <div className="flex items-center space-x-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm sm:text-base text-gray-600 ml-2">
                    {product.rating} • {product.reviews} reviews
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-md">
                    <span className="text-lg font-semibold">Ask for Quote</span>
                  </div>
                  <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                    Premium Quality
                  </span>
                </div>
              </div>

              {/* Weight Selection */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Weight</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {product.weights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setSelectedWeight(weight)}
                      className={`px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all ${
                        selectedWeight === weight
                          ? "bg-orange-500 text-white shadow-lg"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-orange-50"
                      }`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="space-y-5">
                <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center border border-gray-200 rounded-lg shadow-sm">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-3 hover:bg-gray-100 rounded-l-lg transition"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-6 py-3 text-lg font-medium text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-3 hover:bg-gray-100 rounded-r-lg transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    {quantity} × {selectedWeight}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-md"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Description */}
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm border border-orange-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Extra Info */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-white via-orange-50 to-yellow-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Nutrition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Nutrition Facts</h3>
              <div className="space-y-2">
                {Object.entries(product.nutritionFacts).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-600 capitalize">{key}:</span>
                    <span className="font-medium">{String(value)}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
              <div className="space-y-3 text-sm">
                <p><span className="text-gray-600">Ingredients: </span><span className="font-medium">{product.ingredients}</span></p>
                <p><span className="text-gray-600">Origin: </span><span className="font-medium">{product.origin}</span></p>
              </div>
            </motion.div>

            {/* Storage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Storage</h3>
              <p className="text-gray-600 text-sm">{product.storage}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;