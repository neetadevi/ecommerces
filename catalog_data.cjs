// 1. 25 Girls Wear Products (Kurti, Salwar Suit, Lehenga, Top) - Price ₹999, upto 80% OFF
const girlsWear = [
  // Kurtis (7 items)
  {
    name: "Embroidered Anarkali Flared Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    description: "Georgette embroidered flared Anarkali kurti with intricate thread work and dupatta border."
  },
  {
    name: "Chanderi Silk Straight Floral Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
    description: "Pure Chanderi silk straight cut kurti with foil printed floral motifs and mandarin collar."
  },
  {
    name: "Chikankari Handcrafted Georgette Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    description: "Authentic Lucknowi Chikankari hand-embroidered georgette pastel kurti with matching slip."
  },
  {
    name: "A-Line Block Printed Cotton Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
    description: "Breathable pure cotton Jaipur block print A-line kurti with wooden button detailing."
  },
  {
    name: "Angrakha Style Rayon Festive Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1596783074418-9759492167d5?w=800&auto=format&fit=crop&q=80",
    description: "Graceful Angrakha overlap side-tie kurti with mirror work lace and flared silhouette."
  },
  {
    name: "Kashmiri Aari Work Woolen Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    description: "Warm winter woolen Kashmiri kurti adorned with traditional Aari floral neck embroidery."
  },
  {
    name: "Tiered Bandhani Print Festive Kurti",
    category: "Kurti",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=80",
    description: "Multicolor festive Bandhani printed tiered kurti with gota patti borders on sleeves."
  },

  // Salwar Suits (6 items)
  {
    name: "Royal Velvet Embroidered Salwar Suit",
    category: "Salwar Suit",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
    description: "Rich micro velvet salwar kameez set with zardozi embroidery and organza dupatta."
  },
  {
    name: "Punjabi Patiala Suit with Phulkari Dupatta",
    category: "Salwar Suit",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    description: "Traditional heavy pleated Patiala suit paired with vibrant embroidered Phulkari dupatta."
  },
  {
    name: "Chanderi Silk Straight Suit Set",
    category: "Salwar Suit",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
    description: "Three-piece Chanderi silk suit set with cigarette pants and digital printed silk dupatta."
  },
  {
    name: "Sharara Suit with Sequin Work",
    category: "Salwar Suit",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1596783074418-9759492167d5?w=800&auto=format&fit=crop&q=80",
    description: "Flared multi-tier sharara suit set with sparkling sequin embellishment for weddings."
  },
  {
    name: "Palazzo Suit Set with Mirror Lace",
    category: "Salwar Suit",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&auto=format&fit=crop&q=80",
    description: "Comfortable wide-leg palazzo suit with geometric mirror lace work on kurti hem."
  },
  {
    name: "Organza Pastel Floral Suit Set",
    category: "Salwar Suit",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=800&auto=format&fit=crop&q=80",
    description: "Breezy pastel organza suit with hand-painted floral motifs and scalloped borders."
  },

  // Lehengas (6 items)
  {
    name: "Designer Georgette Partywear Lehenga",
    category: "Lehenga",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&auto=format&fit=crop&q=80",
    description: "Semi-stitched georgette party lehenga with heavy thread embroidery and net dupatta."
  },
  {
    name: "Floral Printed Organza Festive Lehenga",
    category: "Lehenga",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&auto=format&fit=crop&q=80",
    description: "Voluminous organza lehenga skirt featuring romantic floral prints and designer blouse."
  },
  {
    name: "Banarasi Silk Brocade Traditional Lehenga",
    category: "Lehenga",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&auto=format&fit=crop&q=80",
    description: "Heritage Banarasi woven silk brocade lehenga with rich golden zari borders."
  },
  {
    name: "Mirror Work Navratri Chaniya Choli",
    category: "Lehenga",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&auto=format&fit=crop&q=80",
    description: "Gujarati style mirror work festive chaniya choli set with colorful bandhani dupatta."
  },
  {
    name: "Sequin Embroidered Net Sangeet Lehenga",
    category: "Lehenga",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&auto=format&fit=crop&q=80",
    description: "Glittering sequin embroidered net lehenga perfect for sangeet and cocktail nights."
  },
  {
    name: "Velvet Bridal Touch Flare Lehenga",
    category: "Lehenga",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80",
    description: "Deep maroon velvet flared lehenga embellished with antique dori and cord work."
  },

  // Tops (6 items)
  {
    name: "Floral Chiffon Ruffle Peplum Top",
    category: "Top",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&auto=format&fit=crop&q=80",
    description: "Chic floral printed chiffon peplum top with smocked waist and feminine flutter sleeves."
  },
  {
    name: "Embroidered Schiffli Lace Crop Top",
    category: "Top",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    description: "100% cotton Schiffli cutwork embroidery crop top with sweetheart neck."
  },
  {
    name: "Satin Wrap Front Formal Top",
    category: "Top",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&auto=format&fit=crop&q=80",
    description: "Lustrous emerald satin wrap top with side tie detail and bishop sleeves."
  },
  {
    name: "Smocked Square Neck Puff Sleeve Top",
    category: "Top",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&auto=format&fit=crop&q=80",
    description: "Trendy gingham square neck top with elasticated puff sleeves and fitted bodice."
  },
  {
    name: "Boho Tassel Fringe Summer Blouse Top",
    category: "Top",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&auto=format&fit=crop&q=80",
    description: "Bohemian embroidery lightweight rayon top with neckline tie tassels."
  },
  {
    name: "Ribbed Knit High-Neck Fitted Top",
    category: "Top",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=80",
    description: "Versatile stretch ribbed knit turtleneck top, great for layering in style."
  }
];

// 2. 25 Brand Shoes (Nike, Adidas, Puma, Converse & others) - Price ₹699 to ₹999, upto 80% OFF
const brandShoes = [
  // Nike (6 items)
  {
    name: "Nike Air Max Excee Running Shoes",
    brand: "Nike",
    category: "Shoes",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    description: "Iconic Nike Air visible cushioning with breathable mesh upper and lightweight foam midsole."
  },
  {
    name: "Nike Revolution 6 Sport Shoes",
    brand: "Nike",
    category: "Shoes",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&auto=format&fit=crop&q=80",
    description: "Plush comfort cushioned road running shoes made with at least 20% recycled material."
  },
  {
    name: "Nike Court Vision Low Sneakers",
    brand: "Nike",
    category: "Shoes",
    price: 949,
    original_price: 4799,
    image_url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&auto=format&fit=crop&q=80",
    description: "80s basketball fastbreak style meets modern streetwear culture in crisp stitched leather."
  },
  {
    name: "Nike Downshifter 12 Athletic Sneaker",
    brand: "Nike",
    category: "Shoes",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&auto=format&fit=crop&q=80",
    description: "Lightweight midfoot support band and super soft foam through the midsole."
  },
  {
    name: "Nike SB Chron 2 Skate Shoes",
    brand: "Nike",
    category: "Shoes",
    price: 749,
    original_price: 3699,
    image_url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
    description: "Flexible canvas and suede skate low-tops with vulcanized rubber traction outsole."
  },
  {
    name: "Nike Tanjun Casual Slip Sneakers",
    brand: "Nike",
    category: "Shoes",
    price: 699,
    original_price: 3499,
    image_url: "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&auto=format&fit=crop&q=80",
    description: "Simplicity at its best. Airy mesh upper with comfortable padded low collar."
  },

  // Adidas (5 items)
  {
    name: "Adidas Ultraboost Light Running Shoes",
    brand: "Adidas",
    category: "Shoes",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&auto=format&fit=crop&q=80",
    description: "Epic energy return with Light Boost cushioning and sock-like Primeknit textile upper."
  },
  {
    name: "Adidas Originals Stan Smith Classic",
    brand: "Adidas",
    category: "Shoes",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800&auto=format&fit=crop&q=80",
    description: "Timeless court silhouette with perforated 3-Stripes and signature green heel tab."
  },
  {
    name: "Adidas Grand Court 2.0 Sneakers",
    brand: "Adidas",
    category: "Shoes",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=800&auto=format&fit=crop&q=80",
    description: "Cloudfoam Comfort sockliner keeps feet supported all day in smooth synthetic leather."
  },
  {
    name: "Adidas Galaxy 6 Breathable Runners",
    brand: "Adidas",
    category: "Shoes",
    price: 749,
    original_price: 3699,
    image_url: "https://images.unsplash.com/photo-1512374382149-233c42b661ac?w=800&auto=format&fit=crop&q=80",
    description: "Light, airy mesh runners with responsive Cloudfoam cushioning and durable rubber sole."
  },
  {
    name: "Adidas Duramo SL Training Shoes",
    brand: "Adidas",
    category: "Shoes",
    price: 699,
    original_price: 3499,
    image_url: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=80",
    description: "No-sew overlays support quick lateral cuts and Lightmotion midsole absorbs impact."
  },

  // Puma (5 items)
  {
    name: "Puma Smash V2 Leather Sneakers",
    brand: "Puma",
    category: "Shoes",
    price: 849,
    original_price: 4299,
    image_url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop&q=80",
    description: "Tennis-inspired everyday sneaker with SoftFoam+ comfort insert and classic Puma formstrip."
  },
  {
    name: "Puma Flyer Runner Athletic Shoes",
    brand: "Puma",
    category: "Shoes",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=80",
    description: "Minimalist running shoes featuring sleek mesh styling and lightweight EVA cushioning."
  },
  {
    name: "Puma Rebound Joy High-Top Sneakers",
    brand: "Puma",
    category: "Shoes",
    price: 949,
    original_price: 4699,
    image_url: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&auto=format&fit=crop&q=80",
    description: "Retro basketball high collar with padded tongue and ankle support for street style."
  },
  {
    name: "Puma Softride Rift Slip-On Shoes",
    brand: "Puma",
    category: "Shoes",
    price: 749,
    original_price: 3699,
    image_url: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&auto=format&fit=crop&q=80",
    description: "Slip-on bootie construction with extreme plush Softride foam cushioning."
  },
  {
    name: "Puma Turin 3 Vintage Football Shoes",
    brand: "Puma",
    category: "Shoes",
    price: 699,
    original_price: 3499,
    image_url: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&auto=format&fit=crop&q=80",
    description: "Vintage indoor football inspired silhouette with gum rubber toe bumper."
  },

  // Converse (4 items)
  {
    name: "Converse Chuck Taylor All Star High",
    brand: "Converse",
    category: "Shoes",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&auto=format&fit=crop&q=80",
    description: "The definitive canvas high-top with iconic ankle patch and vulcanized diamond sole."
  },
  {
    name: "Converse Chuck 70 Classic Canvas Low",
    brand: "Converse",
    category: "Shoes",
    price: 849,
    original_price: 4299,
    image_url: "https://images.unsplash.com/photo-1620794341491-7fb52fc7ebb2?w=800&auto=format&fit=crop&q=80",
    description: "Heavier 12oz canvas with varnished egret foxing and OrthoLite insole for comfort."
  },
  {
    name: "Converse One Star Pro Suede Sneakers",
    brand: "Converse",
    category: "Shoes",
    price: 949,
    original_price: 4699,
    image_url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&auto=format&fit=crop&q=80",
    description: "Premium hairy suede with die-cut star logo and CX foam sockliner."
  },
  {
    name: "Converse Star Player EV Canvas Shoes",
    brand: "Converse",
    category: "Shoes",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&auto=format&fit=crop&q=80",
    description: "Padded collar, iconic chevron star branding, and lightweight canvas upper."
  },

  // Other Brands (Vans, Reebok, New Balance, Jordan, Asics) (5 items)
  {
    name: "Vans Old Skool Classic Skate Shoes",
    brand: "Vans",
    category: "Shoes",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&auto=format&fit=crop&q=80",
    description: "Signature side jazz stripe, reinforced toecaps, and original rubber waffle outsoles."
  },
  {
    name: "Reebok Club C 85 Vintage Court Shoes",
    brand: "Reebok",
    category: "Shoes",
    price: 849,
    original_price: 4299,
    image_url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=800&auto=format&fit=crop&q=80",
    description: "Clean heritage tennis look with soft garment leather upper and terry cloth lining."
  },
  {
    name: "New Balance 574 Core Sport Sneakers",
    brand: "New Balance",
    category: "Shoes",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&auto=format&fit=crop&q=80",
    description: "ENCAP midsole cushioning combines lightweight foam with durable polyurethane rim."
  },
  {
    name: "Air Jordan 1 Low Retro Street Sneakers",
    brand: "Jordan",
    category: "Shoes",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&auto=format&fit=crop&q=80",
    description: "Genuine leather construction with encapsulated Air-Sole unit and Wings logo on heel."
  },
  {
    name: "Asics Gel-Contend 8 Running Shoes",
    brand: "Asics",
    category: "Shoes",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=80",
    description: "Rearfoot GEL technology cushioning improves shock absorption and creates a softer feel."
  }
];

// 3. 40 T-Shirts & Winter Wear Products - Price ₹299 to ₹999, upto 80% OFF
const tshirtsAndWinter = [
  // Everyday & Graphic T-Shirts (20 items - ₹299 to ₹599)
  {
    name: "Heavyweight Boxy Crewneck T-Shirt",
    category: "T-Shirt",
    price: 299,
    original_price: 1499,
    image_url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    description: "240 GSM dense cotton oversized streetwear tee with drop shoulders."
  },
  {
    name: "Classic Pique Polo T-Shirt",
    category: "T-Shirt",
    price: 499,
    original_price: 2499,
    image_url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    description: "Breathable cotton pique polo featuring tipping on ribbed collar and cuffs."
  },
  {
    name: "Graphic Vintage Wash Aesthetic Tee",
    category: "T-Shirt",
    price: 349,
    original_price: 1699,
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    description: "Acid-washed retro typography print tee on ultra-soft combed cotton."
  },
  {
    name: "Essential Supima Cotton Black Tee",
    category: "T-Shirt",
    price: 299,
    original_price: 1399,
    image_url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
    description: "Extra-long staple Supima cotton basic everyday black crew tee."
  },
  {
    name: "Oversized Anime Japanese Print Tee",
    category: "T-Shirt",
    price: 399,
    original_price: 1899,
    image_url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    description: "Trendy oversized back-print streetwear tee with Japanese manga illustration."
  },
  {
    name: "Striped French Sailor Cotton T-Shirt",
    category: "T-Shirt",
    price: 349,
    original_price: 1599,
    image_url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80",
    description: "Classic horizontal yarn-dyed navy stripes on premium breathable cotton."
  },
  {
    name: "Minimalist Embroidered Chest Logo Tee",
    category: "T-Shirt",
    price: 299,
    original_price: 1499,
    image_url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    description: "Subtle metallic embroidered insignia on premium compact spun jersey."
  },
  {
    name: "Tie-Dye Spiral Summer Festival Tee",
    category: "T-Shirt",
    price: 349,
    original_price: 1699,
    image_url: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800&auto=format&fit=crop&q=80",
    description: "Vibrant spiral tie-dye pattern on relaxed fit preshrunk cotton."
  },
  {
    name: "Athletic Dri-FIT Performance Gym Tee",
    category: "T-Shirt",
    price: 399,
    original_price: 1799,
    image_url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    description: "Moisture-wicking 4-way stretch workout tee with flatlock anti-chafing seams."
  },
  {
    name: "Henley Button Placket Waffle T-Shirt",
    category: "T-Shirt",
    price: 449,
    original_price: 1999,
    image_url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
    description: "3-button henley neckline crafted from soft thermal waffle knit fabric."
  },
  {
    name: "Distressed Raw Hem Urban Skate Tee",
    category: "T-Shirt",
    price: 399,
    original_price: 1899,
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    description: "Subtle neck distressing and raw rolled hem with vintage stone wash."
  },
  {
    name: "Colorblock Retro 90s Casual Tee",
    category: "T-Shirt",
    price: 349,
    original_price: 1699,
    image_url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    description: "Geometric tri-color panel construction with relaxed streetwear cut."
  },
  {
    name: "Pure Organic Cotton V-Neck Tee",
    category: "T-Shirt",
    price: 299,
    original_price: 1399,
    image_url: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&auto=format&fit=crop&q=80",
    description: "100% GOTS certified organic combed cotton with clean-finish V-neckline."
  },
  {
    name: "Sunset Gradient Graphic Printed Tee",
    category: "T-Shirt",
    price: 399,
    original_price: 1799,
    image_url: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=80",
    description: "Scenic horizon palm tree gradient graphic print on soft peach-finish jersey."
  },
  {
    name: "Long Sleeve Waffle Raglan Tee",
    category: "T-Shirt",
    price: 499,
    original_price: 2199,
    image_url: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&auto=format&fit=crop&q=80",
    description: "Contrast raglan long sleeves with ribbed cuffs and textured body."
  },
  {
    name: "Acid Wash Streetwear Music Band Tee",
    category: "T-Shirt",
    price: 449,
    original_price: 1999,
    image_url: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&auto=format&fit=crop&q=80",
    description: "Rock band vintage tour graphic with mineral wash treatment."
  },
  {
    name: "Slim Fit Solid Crew Neck Basic Tee",
    category: "T-Shirt",
    price: 299,
    original_price: 1299,
    image_url: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
    description: "Body-contoured slim cut everyday tee with elastane stretch for mobility."
  },
  {
    name: "Pocket Detail Heather Grey Casual Tee",
    category: "T-Shirt",
    price: 349,
    original_price: 1499,
    image_url: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80",
    description: "Functional spade chest pocket on premium melange heather grey fabric."
  },
  {
    name: "Printed Resort Cuban Collar Knit Tee",
    category: "T-Shirt",
    price: 499,
    original_price: 2299,
    image_url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&auto=format&fit=crop&q=80",
    description: "Notch collar knit shirt-tee hybrid with tropical micro print."
  },
  {
    name: "Raw Indigo Slub Cotton Textured Tee",
    category: "T-Shirt",
    price: 399,
    original_price: 1799,
    image_url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&auto=format&fit=crop&q=80",
    description: "Distinct slub yarn texture naturally dyed in rich indigo."
  },

  // Winter Wear: Hoodies, Sweatshirts, Jackets & Sweaters (20 items - ₹599 to ₹999)
  {
    name: "Fleece Lined Kangaroo Pocket Hoodie",
    category: "Winter Wear",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    description: "320 GSM brushed fleece cozy pullover hoodie with metal-tipped drawstrings."
  },
  {
    name: "Classic Crewneck Warm Fleece Sweatshirt",
    category: "Winter Wear",
    price: 699,
    original_price: 3499,
    image_url: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
    description: "Thermal insulated cotton-poly blend sweatshirt with rib triangle V-insert on neck."
  },
  {
    name: "Lightweight Quilted Puffer Jacket",
    category: "Winter Wear",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&auto=format&fit=crop&q=80",
    description: "Windproof and water-resistant down-feel quilted jacket with zip pockets."
  },
  {
    name: "Vintage Sherpa Lined Denim Jacket",
    category: "Winter Wear",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=800&auto=format&fit=crop&q=80",
    description: "Heavyweight rugged denim jacket lined with ultra-warm faux sherpa shearling."
  },
  {
    name: "Cable Knit Fisherman Chunky Sweater",
    category: "Winter Wear",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    description: "Classic honeycomb and cable weave knitted winter sweater in rich cream tone."
  },
  {
    name: "Varsity Letterman Wool Bomber Jacket",
    category: "Winter Wear",
    price: 949,
    original_price: 4799,
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    description: "Retro collegiate varsity bomber with faux leather sleeves and snap button front."
  },
  {
    name: "Zip-Up Polar Fleece Outdoor Jacket",
    category: "Winter Wear",
    price: 749,
    original_price: 3699,
    image_url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80",
    description: "Double-sided microfleece jacket with standup collar and contrast nylon chest pocket."
  },
  {
    name: "Oversized Streetwear Graphic Hoodie",
    category: "Winter Wear",
    price: 849,
    original_price: 4299,
    image_url: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
    description: "Drop shoulder heavyweight cotton fleece hoodie featuring back graffiti typography."
  },
  {
    name: "Fine Merino Wool Turtleneck Pullover",
    category: "Winter Wear",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80",
    description: "Ultra-fine gauge soft knit high roll-neck sweater for sophisticated layering."
  },
  {
    name: "Windbreaker Sport Hooded Windcheater",
    category: "Winter Wear",
    price: 799,
    original_price: 3999,
    image_url: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?w=800&auto=format&fit=crop&q=80",
    description: "Weather-resistant ripstop nylon jacket with bungee toggle hem and hood."
  },
  {
    name: "Brushed Flannel Plaid Overshirt Jacket",
    category: "Winter Wear",
    price: 749,
    original_price: 3699,
    image_url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
    description: "Heavy 280 GSM brushed flannel check shacket with quilted satin interior lining."
  },
  {
    name: "Half-Zip Mockneck Thermal Pullover",
    category: "Winter Wear",
    price: 699,
    original_price: 3499,
    image_url: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=800&auto=format&fit=crop&q=80",
    description: "Midweight waffle fleece quarter-zip pullover with chin guard and ribbed trim."
  },
  {
    name: "Colorblock Retro 80s Puffer Vest",
    category: "Winter Wear",
    price: 799,
    original_price: 3899,
    image_url: "https://images.unsplash.com/photo-1544923246-77307dd654cb?w=800&auto=format&fit=crop&q=80",
    description: "Sleeveless insulated puffer gilet vest for effortless transitional winter style."
  },
  {
    name: "Soft Touch Boucle Knit Winter Cardigan",
    category: "Winter Wear",
    price: 849,
    original_price: 4199,
    image_url: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?w=800&auto=format&fit=crop&q=80",
    description: "Textured curly boucle yarn button-up cardigan with patch front pockets."
  },
  {
    name: "Heavy Thermal Thermal Lined Zip Hoodie",
    category: "Winter Wear",
    price: 899,
    original_price: 4499,
    image_url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&auto=format&fit=crop&q=80",
    description: "Dual-layer zip jacket with waffle thermal lining for sub-zero chilly evenings."
  },
  {
    name: "Nordic Fair Isle Pattern Wool Sweater",
    category: "Winter Wear",
    price: 899,
    original_price: 4399,
    image_url: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&auto=format&fit=crop&q=80",
    description: "Geometric heritage snowflake Fair Isle yoke knit design in cozy lambswool blend."
  },
  {
    name: "Suede Trim Faux Shearling Aviator Jacket",
    category: "Winter Wear",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    description: "Vintage pilot biker style with buckle collar and plush warm shearling lapels."
  },
  {
    name: "Ribbed Raglan Sleeve Minimalist Sweater",
    category: "Winter Wear",
    price: 699,
    original_price: 3499,
    image_url: "https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=800&auto=format&fit=crop&q=80",
    description: "Clean crewneck sweater with diagonal raglan seam construction."
  },
  {
    name: "Tech Fleece Reflective Running Hoodie",
    category: "Winter Wear",
    price: 849,
    original_price: 4199,
    image_url: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&auto=format&fit=crop&q=80",
    description: "Streamlined performance fit with high scuba hood and reflective safety stripes."
  },
  {
    name: "Teddy Borg Fleece Oversized Coat",
    category: "Winter Wear",
    price: 999, original_price: 2999,
    image_url: "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=800&auto=format&fit=crop&q=80",
    description: "Ultra-fluffy borg teddy fleece mid-length coat with tortoiseshell buttons."
  }
];

module.exports = { girlsWear, brandShoes, tshirtsAndWinter };

