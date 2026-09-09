// Local dummy product data.
//
// This mirrors the FINAL production data shape the client will supply:
// Product -> Color -> Size -> Affiliate URL, with each color and size
// carrying its own name/code/SKU. Nothing here is generated at runtime —
// every variant below is literal, authored data. The dummy set is
// deliberately minimal (up to 2 colors x 2 sizes per product) since the
// real catalog, SKUs, and affiliate URLs will replace this 1:1 later.
// No component should ever need to change when that swap happens.

const img = (seed, n) => `https://picsum.photos/seed/${seed}-${n}/900/900`

// Real product images for Products 1-6 (temporary data/image replacement test).
// Sourced from src/assets/products/product-<id>/, in filename order (01, 02, 03...).
import p1Img1 from '../assets/products/product-1/01.jpeg'
import p1Img2 from '../assets/products/product-1/02.jpeg'
import p1Img3 from '../assets/products/product-1/03.jpeg'

import p2Img1 from '../assets/products/product-2/01.jpeg'
import p2Img2 from '../assets/products/product-2/02.jpeg'
import p2Img3 from '../assets/products/product-2/03.jpeg'
import p2Img4 from '../assets/products/product-2/04.jpeg'

import p3Img1 from '../assets/products/product-3/01.jpeg'
import p3Img2 from '../assets/products/product-3/02.jpeg'
import p3Img3 from '../assets/products/product-3/03.jpeg'
import p3Img4 from '../assets/products/product-3/04.jpeg'

import p4Img1 from '../assets/products/product-4/01.jpeg'
import p4Img2 from '../assets/products/product-4/02.jpeg'
import p4Img3 from '../assets/products/product-4/03.jpeg'

import p5Img1 from '../assets/products/product-5/01.jpeg'
import p5Img2 from '../assets/products/product-5/02.jpeg'
import p5Img3 from '../assets/products/product-5/03.jpeg'

import p6Img1 from '../assets/products/product-6/01.jpeg'
import p6Img2 from '../assets/products/product-6/02.jpeg'
import p6Img3 from '../assets/products/product-6/03.jpeg'
import p6Img4 from '../assets/products/product-6/04.jpeg'

import p7Img1 from '../assets/products/product-7/01.jpeg'
import p7Img2 from '../assets/products/product-7/02.jpeg'
import p7Img3 from '../assets/products/product-7/03.jpeg'

import p8Img1 from '../assets/products/product-8/01.jpeg'
import p8Img2 from '../assets/products/product-8/02.jpeg'
import p8Img3 from '../assets/products/product-8/03.jpeg'

import p9Img1 from '../assets/products/product-9/01.jpeg'
import p9Img2 from '../assets/products/product-9/02.jpeg'
import p9Img3 from '../assets/products/product-9/03.jpeg'
import p9Img4 from '../assets/products/product-9/04.jpeg'

import p10Img1 from '../assets/products/product-10/01.jpeg'
import p10Img2 from '../assets/products/product-10/02.jpeg'
import p10Img3 from '../assets/products/product-10/03.jpeg'
import p10Img4 from '../assets/products/product-10/04.jpeg'

import p11Img1 from '../assets/products/product-11/01.jpeg'
import p11Img2 from '../assets/products/product-11/02.jpeg'
import p11Img3 from '../assets/products/product-11/03.jpeg'
import p11Img4 from '../assets/products/product-11/04.jpeg'
import p11Img5 from '../assets/products/product-11/05.jpeg'

import p12Img1 from '../assets/products/product-12/01.jpeg'
import p12Img2 from '../assets/products/product-12/02.jpeg'
import p12Img3 from '../assets/products/product-12/03.jpeg'
import p12Img4 from '../assets/products/product-12/04.jpeg'
import p12Img5 from '../assets/products/product-12/05.jpeg'
import p12Img6 from '../assets/products/product-12/06.jpeg'

import p13Img1 from '../assets/products/product-13/01.jpeg'
import p13Img2 from '../assets/products/product-13/02.jpeg'
import p13Img3 from '../assets/products/product-13/03.jpeg'
import p13Img4 from '../assets/products/product-13/04.jpeg'

import p14Img1 from '../assets/products/product-14/01.jpeg'
import p14Img2 from '../assets/products/product-14/02.jpeg'
import p14Img3 from '../assets/products/product-14/03.jpeg'
import p14Img4 from '../assets/products/product-14/04.jpeg'
import p14Img5 from '../assets/products/product-14/05.jpeg'

import p15Img1 from '../assets/products/product-15/01.jpeg'
import p15Img2 from '../assets/products/product-15/02.jpeg'
import p15Img3 from '../assets/products/product-15/03.jpeg'
import p15Img4 from '../assets/products/product-15/04.jpeg'
import p15Img5 from '../assets/products/product-15/05.jpeg'

import p16Img1 from '../assets/products/product-16/01.jpeg'
import p16Img2 from '../assets/products/product-16/02.jpeg'
import p16Img3 from '../assets/products/product-16/03.jpeg'

import p17Img1 from '../assets/products/product-17/black/01.jpeg'
import p17Img2 from '../assets/products/product-17/black/02.jpeg'
import p17Img3 from '../assets/products/product-17/white/01.jpeg'
import p17Img4 from '../assets/products/product-17/white/02.jpeg'

import p18Img1 from '../assets/products/product-18/01.jpeg'
import p18Img2 from '../assets/products/product-18/02.jpeg'
import p18Img3 from '../assets/products/product-18/03.jpeg'

import p19Img1 from '../assets/products/product-19/01.jpeg'
import p19Img2 from '../assets/products/product-19/02.jpeg'

import p20Img1 from '../assets/products/product-20/01.jpeg'
import p20Img2 from '../assets/products/product-20/02.jpeg'
import p20Img3 from '../assets/products/product-20/03.jpeg'
import p20Img4 from '../assets/products/product-20/04.jpeg'

import p21Img1 from '../assets/products/product-21/black/01.jpeg'
import p21Img2 from '../assets/products/product-21/black/02.jpeg'
import p21Img3 from '../assets/products/product-21/navy/01.jpeg'

import p22Img1 from '../assets/products/product-22/01.jpeg'
import p22Img2 from '../assets/products/product-22/02.jpeg'
import p22Img3 from '../assets/products/product-22/03.jpeg'
import p22Img4 from '../assets/products/product-22/04.jpeg'

import p23Img1 from '../assets/products/product-23/01.jpeg'
import p23Img2 from '../assets/products/product-23/02.jpeg'
import p23Img3 from '../assets/products/product-23/03.jpeg'

import p24Img1 from '../assets/products/product-24/01.jpeg'
import p24Img2 from '../assets/products/product-24/02.jpeg'
import p24Img3 from '../assets/products/product-24/03.jpeg'

import p25Img1 from '../assets/products/product-25/black/01.jpeg'
import p25Img2 from '../assets/products/product-25/black/02.jpeg'
import p25Img3 from '../assets/products/product-25/black/03.jpeg'
import p25Img4 from '../assets/products/product-25/black/04.jpeg'
import p25Img5 from '../assets/products/product-25/white/01.jpeg'
import p25Img6 from '../assets/products/product-25/white/02.jpeg'
import p25Img7 from '../assets/products/product-25/white/03.jpeg'
import p25Img8 from '../assets/products/product-25/white/04.jpeg'
import p25Img9 from '../assets/products/product-25/white/05.jpeg'
import p25Img10 from '../assets/products/product-25/pink/01.jpeg'
import p25Img11 from '../assets/products/product-25/pink/02.jpeg'
import p25Img12 from '../assets/products/product-25/pink/03.jpeg'
import p25Img13 from '../assets/products/product-25/beige/01.jpeg'
import p25Img14 from '../assets/products/product-25/beige/02.jpeg'
import p25Img15 from '../assets/products/product-25/beige/03.jpeg'

import p26Img1 from '../assets/products/product-26/01.jpeg'
import p26Img2 from '../assets/products/product-26/02.jpeg'
import p26Img3 from '../assets/products/product-26/03.jpeg'

import p27Img1 from '../assets/products/product-27/01.jpeg'
import p27Img2 from '../assets/products/product-27/02.jpeg'
import p27Img3 from '../assets/products/product-27/03.jpeg'
import p27Img4 from '../assets/products/product-27/04.jpeg'
import p27Img5 from '../assets/products/product-27/05.jpeg'

import p28Img1 from '../assets/products/product-28/01.jpeg'
import p28Img2 from '../assets/products/product-28/02.jpeg'
import p28Img3 from '../assets/products/product-28/03.jpeg'

import p29Img1 from '../assets/products/product-29/01.jpeg'
import p29Img2 from '../assets/products/product-29/02.jpeg'
import p29Img3 from '../assets/products/product-29/03.jpeg'
import p29Img4 from '../assets/products/product-29/04.jpeg'

import p30Img1 from '../assets/products/product-30/black/01.jpeg'
import p30Img2 from '../assets/products/product-30/black/02.jpeg'
import p30Img3 from '../assets/products/product-30/black/03.jpeg'
import p30Img4 from '../assets/products/product-30/navy-blue/01.jpeg'

import p31Img1 from '../assets/products/product-31/light-blue/01.jpeg'
import p31Img2 from '../assets/products/product-31/light-blue/02.jpeg'
import p31Img3 from '../assets/products/product-31/light-blue/03.jpeg'
import p31Img4 from '../assets/products/product-31/light-pink/01.jpeg'
import p31Img5 from '../assets/products/product-31/light-pink/02.jpeg'
import p31Img6 from '../assets/products/product-31/light-pink/03.jpeg'

import p32Img1 from '../assets/products/product-32/01.jpeg'
import p32Img2 from '../assets/products/product-32/02.jpeg'
import p32Img3 from '../assets/products/product-32/03.jpeg'
import p32Img4 from '../assets/products/product-32/04.jpeg'

import p33Img1 from '../assets/products/product-33/01.jpeg'
import p33Img2 from '../assets/products/product-33/02.jpeg'
import p33Img3 from '../assets/products/product-33/03.jpeg'
import p33Img4 from '../assets/products/product-33/04.jpeg'

import p34Img1 from '../assets/products/product-34/black/01.jpeg'
import p34Img2 from '../assets/products/product-34/black/02.jpeg'
import p34Img3 from '../assets/products/product-34/dark-blue/01.jpeg'
import p34Img4 from '../assets/products/product-34/dark-blue/02.jpeg'
import p34Img5 from '../assets/products/product-34/dark-blue/03.jpeg'
import p34Img6 from '../assets/products/product-34/dark-blue/04.jpeg'

import p35Img1 from '../assets/products/product-35/01.jpeg'
import p35Img2 from '../assets/products/product-35/02.jpeg'
import p35Img3 from '../assets/products/product-35/03.jpeg'

import p36Img1 from '../assets/products/product-36/01.jpeg'
import p36Img2 from '../assets/products/product-36/02.jpeg'
import p36Img3 from '../assets/products/product-36/03.jpeg'

import p37Img1 from '../assets/products/product-37/01.jpeg'
import p37Img2 from '../assets/products/product-37/02.jpeg'
import p37Img3 from '../assets/products/product-37/03.jpeg'

import p38Img1 from '../assets/products/product-38/01.jpeg'
import p38Img2 from '../assets/products/product-38/02.jpeg'
import p38Img3 from '../assets/products/product-38/03.jpeg'

import p39Img1 from '../assets/products/product-39/01.jpeg'
import p39Img2 from '../assets/products/product-39/02.jpeg'
import p39Img3 from '../assets/products/product-39/03.jpeg'

import p40Img1 from '../assets/products/product-40/01.jpeg'
import p40Img2 from '../assets/products/product-40/02.jpeg'
import p40Img3 from '../assets/products/product-40/03.jpeg'

import p41Img1 from '../assets/products/product-41/01.jpeg'
import p41Img2 from '../assets/products/product-41/02.jpeg'
import p41Img3 from '../assets/products/product-41/03.jpeg'
import p41Img4 from '../assets/products/product-41/04.jpeg'

import p42Img1 from '../assets/products/product-42/01.jpeg'
import p42Img2 from '../assets/products/product-42/02.jpeg'
import p42Img3 from '../assets/products/product-42/03.jpeg'
import p42Img4 from '../assets/products/product-42/04.jpeg'

import p43Img1 from '../assets/products/product-43/01.jpeg'
import p43Img2 from '../assets/products/product-43/02.jpeg'
import p43Img3 from '../assets/products/product-43/03.jpeg'

import p44Img1 from '../assets/products/product-44/01.jpeg'
import p44Img2 from '../assets/products/product-44/02.jpeg'
import p44Img3 from '../assets/products/product-44/03.jpeg'

import p45Img1 from '../assets/products/product-45/01.jpeg'
import p45Img2 from '../assets/products/product-45/02.jpeg'
import p45Img3 from '../assets/products/product-45/03.jpeg'
import p45Img4 from '../assets/products/product-45/04.jpeg'
import p45Img5 from '../assets/products/product-45/05.jpeg'

import p46Img1 from '../assets/products/product-46/01.jpeg'
import p46Img2 from '../assets/products/product-46/02.jpeg'
import p46Img3 from '../assets/products/product-46/03.jpeg'
import p46Img4 from '../assets/products/product-46/04.jpeg'

import p47Img1 from '../assets/products/product-47/01.jpeg'
import p47Img2 from '../assets/products/product-47/02.jpeg'
import p47Img3 from '../assets/products/product-47/03.jpeg'

import p48Img1 from '../assets/products/product-48/01.jpeg'
import p48Img2 from '../assets/products/product-48/02.jpeg'
import p48Img3 from '../assets/products/product-48/03.jpeg'
import p48Img4 from '../assets/products/product-48/04.jpeg'

import p49Img1 from '../assets/products/product-49/01.jpeg'
import p49Img2 from '../assets/products/product-49/02.jpeg'
import p49Img3 from '../assets/products/product-49/03.jpeg'
import p49Img4 from '../assets/products/product-49/04.jpeg'

import p50Img1 from '../assets/products/product-50/01.jpeg'
import p50Img2 from '../assets/products/product-50/02.jpeg'

import p51Img1 from '../assets/products/product-51/01.jpeg'
import p51Img2 from '../assets/products/product-51/02.jpeg'
import p51Img3 from '../assets/products/product-51/03.jpeg'
import p51Img4 from '../assets/products/product-51/04.jpeg'
import p51Img5 from '../assets/products/product-51/05.jpeg'

import p52Img1 from '../assets/products/product-52/01.jpeg'
import p52Img2 from '../assets/products/product-52/02.jpeg'
import p52Img3 from '../assets/products/product-52/03.jpeg'
import p52Img4 from '../assets/products/product-52/04.jpeg'
import p52Img5 from '../assets/products/product-52/05.jpeg'
import p52Img6 from '../assets/products/product-52/06.jpeg'

import p53Img1 from '../assets/products/product-53/01.jpeg'
import p53Img2 from '../assets/products/product-53/02.jpeg'
import p53Img3 from '../assets/products/product-53/03.jpeg'

import p54Img1 from '../assets/products/product-54/01.jpeg'
import p54Img2 from '../assets/products/product-54/02.jpeg'
import p54Img3 from '../assets/products/product-54/03.jpeg'
import p54Img4 from '../assets/products/product-54/04.jpeg'
import p54Img5 from '../assets/products/product-54/05.jpeg'

import p55Img1 from '../assets/products/product-55/01.jpeg'
import p55Img2 from '../assets/products/product-55/02.jpeg'
import p55Img3 from '../assets/products/product-55/03.jpeg'
import p55Img4 from '../assets/products/product-55/04.jpeg'

import p56Img1 from '../assets/products/product-56/01.jpeg'
import p56Img2 from '../assets/products/product-56/02.jpeg'
import p56Img3 from '../assets/products/product-56/03.jpeg'
import p56Img4 from '../assets/products/product-56/04.jpeg'

import p57Img1 from '../assets/products/product-57/01.jpeg'
import p57Img2 from '../assets/products/product-57/02.jpeg'
import p57Img3 from '../assets/products/product-57/03.jpeg'
import p57Img4 from '../assets/products/product-57/04.jpeg'

import p58Img1 from '../assets/products/product-58/01.jpeg'
import p58Img2 from '../assets/products/product-58/02.jpeg'
import p58Img3 from '../assets/products/product-58/03.jpeg'
import p58Img4 from '../assets/products/product-58/04.jpeg'
import p58Img5 from '../assets/products/product-58/05.jpeg'
import p58Img6 from '../assets/products/product-58/06.jpeg'

export const products = [
  {
    id: 1,
    title: "Prada Woven Straw Wide-Brim Boater Hat",
    brand: "Prada",
    category: "hats",
    gender: "women",
    description: "A wide-brim boater-style hat woven from natural straw, finished with a slim black leather band, a gold-tone buckle, and the signature Prada triangle logo plate at the front.",
    currentPrice: 54.99,
    oldPrice: 74.99,
    discount: 27,
    rating: 4.6,
    reviewCount: 312,
    stock: true,
    material: "Cotton-polyester fleece blend",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      p1Img1,
      p1Img2,
      p1Img3
    ],
    colors: [],
    sizes: [
      {
        name: "S",
        code: "S",
        sku: "N-HOO-1-BLACK-S",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-hoodie-001-black-s",
        depopAffiliateUrl: "https://www.depop.com/products/siaaznc-brown-straw-hat-with-black-1770/"
      },
      {
        name: "M",
        code: "M",
        sku: "N-HOO-1-BLACK-M",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-nike-hoodie-001-black-m",
        depopAffiliateUrl: "https://www.depop.com/products/siaaznc-brown-straw-hat-with-black-1770/"
      }
    ],
    bestSeller: true
  },
  {
    id: 2,
    title: "Prada Washed Denim Bucket Hat",
    brand: "Prada",
    category: "hats",
    gender: "men",
    description: "A relaxed bucket hat crafted from washed denim with contrast stitching and a soft crown, finished with the Prada triangle logo plate above the brim.",
    currentPrice: 42,
    oldPrice: 60,
    discount: 30,
    rating: 4.7,
    reviewCount: 528,
    stock: true,
    material: "Cotton twill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      p2Img1,
      p2Img2,
      p2Img3,
      p2Img4
    ],
    colors: [],
    sizes: [
      {
        name: "S",
        code: "S",
        sku: "L-PAN-2-BLUE-S",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jeans-002-blue-s",
        depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jeans-002-blue-s"
      },
      {
        name: "M",
        code: "M",
        sku: "L-PAN-2-BLUE-M",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-levis-jeans-002-blue-m",
        depopAffiliateUrl: "https://www.depop.com/products/aff-levis-jeans-002-blue-m"
      }
    ],
    bestSeller: true
  },
  {
    id: 3,
    title: "Gucci Pink GG Monogram Bikini Set",
    brand: "Gucci",
    category: "swimwear",
    gender: "women",
    description: "A two-piece bikini in pink GG monogram jacquard fabric, featuring adjustable tie straps and a signature gold interlocking-G hardware detail at the center front.",
    currentPrice: 18.5,
    oldPrice: 25,
    discount: 26,
    rating: 4.4,
    reviewCount: 201,
    stock: true,
    material: "100% combed cotton jersey",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      p3Img1,
      p3Img2,
      p3Img3,
      p3Img4
    ],
    colors: [],
    sizes: [
      {
        name: "S",
        code: "S",
        sku: "C-T-S-3-WHITE-S",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-tee-003-white-s",
        depopAffiliateUrl: "https://www.depop.com/products/siaaznh-pink-bikini-set-with-white-5ab0/"
      },
      {
        name: "M",
        code: "M",
        sku: "C-T-S-3-WHITE-M",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-champion-tee-003-white-m",
        depopAffiliateUrl: "https://www.depop.com/products/siaaznh-pink-bikini-set-with-white-5ab0/"
      }
    ],
    bestSeller: true
  },
  {
    id: 4,
    title: "Prada Ribbed Cotton Tank Top",
    brand: "Prada",
    category: "tops",
    gender: "women",
    description: "A ribbed cotton tank top with a scooped neckline and a fitted silhouette, finished with the Prada enamel triangle logo at the chest.",
    currentPrice: 189.99,
    oldPrice: 260,
    discount: 27,
    rating: 4.8,
    reviewCount: 174,
    stock: true,
    material: "Nylon shell with recycled fill",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      p4Img1,
      p4Img2,
      p4Img3
    ],
    colors: [],
    sizes: [
      {
        name: "M",
        code: "M",
        sku: "TNF-JAC-4-BLACK-M",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-parka-004-black-m",
        depopAffiliateUrl: "https://www.depop.com/products/siaazno-white-tank-top-activewear-outdoor-b7f6/"
      },
      {
        name: "L",
        code: "L",
        sku: "TNF-JAC-4-BLACK-L",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-tnf-parka-004-black-l",
        depopAffiliateUrl: "https://www.depop.com/products/siaazno-white-tank-top-activewear-outdoor-b7f6/"
      }
    ],
    bestSeller: true
  },
  {
    id: 5,
    title: "Miu Miu Cotton Bucket Hat",
    brand: "Miu Miu",
    category: "hats",
    gender: "women",
    description: "A soft cotton bucket hat in tan, featuring a wide brim and side snap detailing, with an interior Miu Miu label reading Made in Italy, 100% cotton.",
    currentPrice: 39,
    oldPrice: 52,
    discount: 25,
    rating: 4.5,
    reviewCount: 96,
    stock: true,
    material: "Cotton twill",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      p5Img1,
      p5Img2,
      p5Img3
    ],
    colors: [],
    sizes: [
      {
        name: "S",
        code: "S",
        sku: "CW-SHO-5-GREEN-S",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-005-green-s",
        depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-005-green-s"
      },
      {
        name: "M",
        code: "M",
        sku: "CW-SHO-5-GREEN-M",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-carhartt-shorts-005-green-m",
        depopAffiliateUrl: "https://www.depop.com/products/aff-carhartt-shorts-005-green-m"
      }
    ],
    bestSeller: false
  },
  {
    id: 6,
    title: "Prada Straw Boater Hat with Leather Trim",
    brand: "Prada",
    category: "hats",
    gender: "women",
    description: "A wide-brim boater-style hat woven from natural straw, wrapped with a slim black leather band and gold-tone buckle, topped with the signature Prada triangle logo plate.",
    currentPrice: 98,
    oldPrice: 130,
    discount: 25,
    rating: 4.7,
    reviewCount: 402,
    stock: true,
    material: "Cotton-polyester fleece blend",
    fit: "Relaxed Fit",
    season: "All Season",
    condition: "New with Tags",
    images: [
      p6Img1,
      p6Img2,
      p6Img3,
      p6Img4
    ],
    colors: [],
    sizes: [
      {
        name: "S",
        code: "S",
        sku: "FOGE-HOO-6-GRAY-S",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-006-gray-s",
        depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-006-gray-s"
      },
      {
        name: "M",
        code: "M",
        sku: "FOGE-HOO-6-GRAY-M",
        ebayAffiliateUrl: "https://www.ebay.com/itm/aff-fog-hoodie-006-gray-m",
        depopAffiliateUrl: "https://www.depop.com/products/aff-fog-hoodie-006-gray-m"
      }
    ],
    bestSeller: true
  },
  {
    id: 7,

    title: "Amiri Black Trucker Hat with White Embroidered Logo",
    brand: "Amiri",
    category: "hats",
    gender: "men",
    description: "A black structured trucker-style baseball cap featuring a prominent white embroidered Amiri 'MA' gothic logo on the front. Includes a black adjustable strap with a metal buckle at the back, and a white branded logo patch on the side. Classic streetwear accessory with a curved brim and premium cotton construction.",

    currentPrice: 195,
    oldPrice: 250,
    discount: 22,
    rating: 4.8,
    reviewCount: 34,
    stock: true,

    material: "Cotton",
    fit: "Adjustable",
    season: "All Season",
    condition: "New",

    images: [
      p7Img1,
      p7Img2,
      p7Img3
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "AMR-HAT-BLK-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 8,

    title: "Miu Miu Beige Cotton Bucket Hat with Embroidered Logo",
    brand: "Miu Miu",
    category: "hats",
    gender: "women",
    description: "A chic beige bucket hat crafted from 100% cotton, featuring the iconic Miu Miu logo embroidered in tonal lettering on the front. The hat has a wide brim with visible stitching details, side snap buttons, and an adjustable inner drawstring for a custom fit. Includes original brand tags confirming it is made in Italy.",

    currentPrice: 320,
    oldPrice: 395,
    discount: 19,
    rating: 4.9,
    reviewCount: 52,
    stock: true,

    material: "100% Cotton",
    fit: "Adjustable",
    season: "Spring / Summer",
    condition: "New",

    images: [
      p8Img1,
      p8Img2,
      p8Img3
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "MIU-HAT-BGE-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 9,

    title: "Miu Miu Blue Denim Bucket Hat with Embroidered Logo",
    brand: "Miu Miu",
    category: "hats",
    gender: "women",
    description: "A stylish blue denim bucket hat by Miu Miu, featuring the brand's signature logo embroidered in contrasting cream thread on the front. The hat has a wide brim with visible stitching, metal eyelets on the sides, and an adjustable drawstring for a customized fit. Includes original Miu Miu hangtags, confirming authenticity and premium craftsmanship.",

    currentPrice: 340,
    oldPrice: 420,
    discount: 19,
    rating: 4.9,
    reviewCount: 47,
    stock: true,

    material: "Denim (Cotton)",
    fit: "Adjustable",
    season: "Spring / Summer",
    condition: "New",

    images: [
      p9Img1,
      p9Img2,
      p9Img3,
      p9Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "MIU-HAT-DNM-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
        
  },
  {
    id: 10,

    title: "Miu Miu Black Cotton Bucket Hat with Embroidered Logo",
    brand: "Miu Miu",
    category: "hats",
    gender: "women",
    description: "A sleek black bucket hat by Miu Miu, featuring the brand's signature logo embroidered in contrasting white thread on the front. Crafted from high-quality cotton twill, this hat includes a wide brim with topstitching, metal eyelets on the sides, and an adjustable drawstring for a secure fit. Includes original Miu Miu hangtags and care labels, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 335,
    oldPrice: 415,
    discount: 19,
    rating: 4.9,
    reviewCount: 41,
    stock: true,

    material: "Cotton Twill",
    fit: "Adjustable",
    season: "Spring / Summer",
    condition: "New",

    images: [
      p10Img1,
      p10Img2,
      p10Img3,
      p10Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "MIU-HAT-BLK-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 11,

    title: "Gucci Black Cotton Polo Shirt with Interlocking GG Trim",
    brand: "Gucci",
    category: "tops",
    gender: "men",
    description: "A classic black short-sleeve polo shirt by Gucci, featuring a contrasting cream button-down collar and a three-button placket. The sleeves are accented with a beige and green striped trim featuring the iconic interlocking GG logo. Crafted from premium cotton pique, with the original Gucci tags and 'Made in Italy' label intact. Includes the original packaging and size M tag.",

    currentPrice: 650,
    oldPrice: 780,
    discount: 17,
    rating: 4.9,
    reviewCount: 63,
    stock: true,

    material: "Cotton Pique",
    fit: "Regular Fit",
    season: "All Season",
    condition: "New",

    images: [
      p11Img1,
      p11Img2,
      p11Img3,
      p11Img4,
      p11Img5
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "GUC-POL-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 12,

    title: "Miu Miu Dark Wash Denim Bucket Hat with Yellow Embroidered Logo",
    brand: "Miu Miu",
    category: "hats",
    gender: "women",
    description: "A dark wash denim bucket hat by Miu Miu, featuring the brand's signature logo embroidered in contrasting golden-yellow thread on the front. The hat has a wide brim with contrasting white topstitching, an inner drawstring for an adjustable fit, and a black lining. Includes original Miu Miu hangtags and care label, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 345,
    oldPrice: 430,
    discount: 20,
    rating: 4.9,
    reviewCount: 38,
    stock: true,

    material: "Denim (Cotton)",
    fit: "Adjustable",
    season: "Spring / Summer",
    condition: "New",

    images: [
      p12Img1,
      p12Img2,
      p12Img3,
      p12Img4,
      p12Img5,
      p12Img6
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "MIU-HAT-DNM-YEL-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 13,

    title: "Miu Miu Black Denim Bucket Hat with Yellow Embroidered Logo",
    brand: "Miu Miu",
    category: "hats",
    gender: "women",
    description: "A black denim bucket hat by Miu Miu, featuring the brand's signature logo embroidered in contrasting golden-yellow thread on the front. The hat has a wide brim with contrasting white topstitching, an inner drawstring for an adjustable fit, and a black lining. Includes original Miu Miu hangtags and care label, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 345,
    oldPrice: 430,
    discount: 20,
    rating: 4.9,
    reviewCount: 36,
    stock: true,

    material: "Denim (Cotton)",
    fit: "Adjustable",
    season: "Spring / Summer",
    condition: "New",

    images: [
      p13Img1,
      p13Img2,
      p13Img3,
      p13Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "MIU-HAT-BLKDNM-YEL-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 14,

    title: "Christian Dior Oblique Bucket Hat with Embroidered Band",
    brand: "Christian Dior",
    category: "hats",
    gender: "women",
    description: "A classic Dior Oblique bucket hat featuring the iconic blue and beige Dior Oblique canvas pattern. The hat includes a prominent dark band with gold-tone embroidered 'CHRISTIAN DIOR PARIS' lettering across the front. The interior is lined in black fabric with a 'DIOR' logo embroidery and features the original Christian Dior hangtags and care labels, confirming authenticity.",

    currentPrice: 890,
    oldPrice: 1050,
    discount: 15,
    rating: 4.9,
    reviewCount: 58,
    stock: true,

    material: "Canvas (Cotton blend)",
    fit: "Regular",
    season: "All seasons",
    condition: "New",

    images: [
      p14Img1,
      p14Img2,
      p14Img3,
      p14Img4,
      p14Img5
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "CDR-HAT-OBL-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 15,

    title: "Dior Black Oblique Bucket Hat with Embroidered Logo",
    brand: "Dior",
    category: "hats",
    gender: "women",
    description: "A black and beige Dior Oblique bucket hat featuring the iconic monogram canvas pattern. The front features a prominent embroidered 'Dior' logo in gold-tone thread. The interior is lined with black fabric and includes a black Dior tag with white logo, along with an adjustable inner drawstring. Includes original Dior hangtags, confirming authenticity.",

    currentPrice: 780,
    oldPrice: 920,
    discount: 15,
    rating: 4.9,
    reviewCount: 44,
    stock: true,

    material: "Canvas (Cotton blend)",
    fit: "Adjustable",
    season: "All Season",
    condition: "New",

    images: [
      p15Img1,
      p15Img2,
      p15Img3,
      p15Img4,
      p15Img5
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "DIO-HAT-OBL-BLK-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 16,

    title: "Gucci White GG Monogram Swim Shorts with Web Stripe",
    brand: "Gucci",
    category: "shorts",
    gender: "men",
    description: "A pair of white Gucci swim shorts featuring an all-over tonal GG monogram jacquard pattern. The shorts include an elasticated waistband with a white drawstring and black aglets, and side pockets. Finished with the iconic green and red Web stripe at the hem. Includes original Gucci hangtags and comes in original packaging, confirming authenticity.",

    currentPrice: 520,
    oldPrice: 620,
    discount: 16,
    rating: 4.8,
    reviewCount: 29,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p16Img1,
      p16Img2,
      p16Img3
    ],

    colors: [],

    sizes: [],

    bestSeller: false
  },
  {
    id: 17,

    title: "Prada Logo Triangle Tank Top",
    brand: "Prada",
    category: "tops",
    gender: "women",
    description: "A classic ribbed tank top by Prada, featuring the iconic Prada triangle logo plaque centered on the chest. Available in black and white colorways, this sleeveless top has a scoop neckline, wide straps, and a comfortable stretch fit. Includes original Prada hangtags and is packaged in the original Prada plastic bag, confirming authenticity.",

    currentPrice: 450,
    oldPrice: 550,
    discount: 18,
    rating: 4.9,
    reviewCount: 71,
    stock: true,

    material: "Cotton blend / Ribbed knit",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p17Img1,
      p17Img3
    ],

    colors: [
      {
        name: "Black",
        code: "#000000",
        sku: "PRA-TNK-BLK-001",

        images: [
          p17Img1,
          p17Img2
        ],

        sizes: [
          {
            name: "S",
            code: "S",
            sku: "PRA-TNK-BLK-S",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "M",
            code: "M",
            sku: "PRA-TNK-BLK-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "L",
            code: "L",
            sku: "PRA-TNK-BLK-L",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "White",
        code: "#FFFFFF",
        sku: "PRA-TNK-WHT-001",

        images: [
          p17Img3,
          p17Img4
        ],

        sizes: [
          {
            name: "S",
            code: "S",
            sku: "PRA-TNK-WHT-S",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "M",
            code: "M",
            sku: "PRA-TNK-WHT-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "L",
            code: "L",
            sku: "PRA-TNK-WHT-L",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      }
    ],

    bestSeller: false
  },
  {
    id: 18,

    title: "Miu Miu Cream Ribbed Knit Tank Top with Crystal Logo",
    brand: "Miu Miu",
    category: "tops",
    gender: "women",
    description: "A cream ribbed knit tank top by Miu Miu, featuring the brand's signature logo embellished with sparkling crystals on the front. The top has a round neckline, wide shoulder straps, and a flattering fitted silhouette. Includes original Miu Miu hangtags and comes in original packaging, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 580,
    oldPrice: 720,
    discount: 19,
    rating: 4.9,
    reviewCount: 42,
    stock: true,

    material: "Ribbed Knit (Cotton blend)",
    fit: "Slim Fit",
    season: "Summer",
    condition: "New",

    images: [
      p18Img1,
      p18Img2,
      p18Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "MIU-TNK-CRM-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 19,

    title: "Burberry Check Pattern Triangle Bikini Set",
    brand: "Burberry",
    category: "swimwear",
    gender: "women",
    description: "A classic Burberry two-piece bikini set featuring the iconic check pattern in brown, black, and cream. The top is a triangle halter style with adjustable straps and soft cups, while the bottoms feature a matching check design with a low-rise fit and side ties. Includes original Burberry hangtags and comes in original packaging, confirming authenticity.",

    currentPrice: 380,
    oldPrice: 460,
    discount: 17,
    rating: 4.8,
    reviewCount: 33,
    stock: true,

    material: "Polyamide / Elastane",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p19Img1,
      p19Img2
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "BUR-BIK-CHK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 20,

    title: "Miu Miu Black Ribbed Knit Tank Top with Crystal Logo",
    brand: "Miu Miu",
    category: "tops",
    gender: "women",
    description: "A black ribbed knit tank top by Miu Miu, featuring the brand's signature logo embellished with sparkling crystals on the front. The top has a round neckline, wide shoulder straps, and a flattering fitted silhouette. Includes original Miu Miu hangtags and comes in original packaging, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 580,
    oldPrice: 720,
    discount: 19,
    rating: 4.9,
    reviewCount: 39,
    stock: true,

    material: "Ribbed Knit (Cotton blend)",
    fit: "Slim Fit",
    season: "Summer",
    condition: "New",

    images: [
      p20Img1,
      p20Img2,
      p20Img3,
      p20Img4
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "MIU-TNK-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 21,

    title: "Gucci GG Jacquard Triangle Bikini Set",
    brand: "Gucci",
    category: "swimwear",
    gender: "women",
    description: "A luxurious two-piece triangle bikini set by Gucci, featuring an all-over tonal GG jacquard pattern. The top has adjustable halter straps, while the bottoms feature a low-rise cut with side ties. Available in black and navy colorways. Includes original Gucci hangtags with size M, confirming authenticity.",

    currentPrice: 420,
    oldPrice: 520,
    discount: 19,
    rating: 4.8,
    reviewCount: 27,
    stock: true,

    material: "Polyamide / Elastane",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p21Img1,
      p21Img3
    ],

    colors: [
      {
        name: "Black",
        code: "#000000",
        sku: "GUC-BIK-BLK-001",

        images: [
          p21Img1,
          p21Img2
        ],

        sizes: [
          {
            name: "M",
            code: "M",
            sku: "GUC-BIK-BLK-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "Navy Blue",
        code: "#1C2333",
        sku: "GUC-BIK-NVY-001",

        images: [
          p21Img3
        ],

        sizes: [
          {
            name: "M",
            code: "M",
            sku: "GUC-BIK-NVY-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      }
    ],

    bestSeller: false
  },
  {
    id: 22,

    title: "Miu Miu White Ribbed Tank Top with Embroidered Logo",
    brand: "Miu Miu",
    category: "tops",
    gender: "women",
    description: "A white ribbed tank top by Miu Miu, featuring the brand's signature logo embroidered in black on the front. The top has a scoop neckline, wide shoulder straps, and a fitted silhouette. Includes original Miu Miu hangtags and a 'Made in Italy' label, confirming authenticity and premium craftsmanship.",

    currentPrice: 420,
    oldPrice: 520,
    discount: 19,
    rating: 4.9,
    reviewCount: 45,
    stock: true,

    material: "Ribbed Cotton",
    fit: "Slim Fit",
    season: "Summer",
    condition: "New",

    images: [
      p22Img1,
      p22Img2,
      p22Img3,
      p22Img4
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "MIU-TNK-WHT-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 23,

    title: "Christian Dior Oblique Bikini Set",
    brand: "Christian Dior",
    category: "swimwear",
    gender: "women",
    description: "A stunning two-piece bikini set by Christian Dior, featuring the iconic Oblique monogram pattern in navy and white. The top is a classic triangle halter style with adjustable ties, while the bottoms feature a matching pattern with side ties. Includes original Christian Dior hangtags and size tag (M), confirming authenticity.",

    currentPrice: 680,
    oldPrice: 820,
    discount: 17,
    rating: 4.9,
    reviewCount: 31,
    stock: true,

    material: "Polyamide / Elastane",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p23Img1,
      p23Img2,
      p23Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "CDR-BIK-OBL-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 24,

    title: "Prada Black Nylon Baseball Cap with Triangle Logo",
    brand: "Prada",
    category: "hats",
    gender: "unisex",
    description: "A sleek black baseball cap by Prada, crafted from durable nylon with a slight sheen. Features the iconic Prada triangle logo plaque in silver-tone metal on the front. The cap has a curved brim, an adjustable back strap with a metal buckle, and a black lining. Includes original Prada green hangtags, confirming authenticity.",

    currentPrice: 380,
    oldPrice: 460,
    discount: 17,
    rating: 4.9,
    reviewCount: 56,
    stock: true,

    material: "Nylon",
    fit: "Adjustable",
    season: "All seasons",
    condition: "New",

    images: [
      p24Img1,
      p24Img2,
      p24Img3
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "PRA-CAP-NYL-BLK-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 25,

    title: "Prada Nylon Bucket Hat with Triangle Logo",
    brand: "Prada",
    category: "hats",
    gender: "unisex",
    description: "A classic bucket hat by Prada, crafted from durable nylon with a slight sheen. Features the iconic Prada triangle logo plaque in metal on the front. The hat has a quilted brim and an inner drawstring for an adjustable fit. Available in four colors: Beige, Black, White, and Pink. Includes original Prada hangtags, confirming authenticity.",

    currentPrice: 420,
    oldPrice: 520,
    discount: 19,
    rating: 4.9,
    reviewCount: 52,
    stock: true,

    material: "Nylon",
    fit: "Adjustable",
    season: "All seasons",
    condition: "New",

    images: [
      p25Img1,  // Black
      p25Img5,  // White
      p25Img10, // Pink
      p25Img13  // Beige
    ],

    colors: [
      {
        name: "Beige",
        code: "#D2B48C",
        sku: "PRA-BKT-NYL-BGE-001",

        images: [
          p25Img13,
          p25Img14,
          p25Img15
        ],

        sizes: [
          {
            name: "One Size",
            code: "OS",
            sku: "PRA-BKT-NYL-BGE-OS",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "Black",
        code: "#000000",
        sku: "PRA-BKT-NYL-BLK-001",

        images: [
          p25Img1,
          p25Img2,
          p25Img3,
          p25Img4
        ],

        sizes: [
          {
            name: "One Size",
            code: "OS",
            sku: "PRA-BKT-NYL-BLK-OS",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "White",
        code: "#FFFFFF",
        sku: "PRA-BKT-NYL-WHT-001",

        images: [
          p25Img5,
          p25Img6,
          p25Img7,
          p25Img8,
          p25Img9
        ],

        sizes: [
          {
            name: "One Size",
            code: "OS",
            sku: "PRA-BKT-NYL-WHT-OS",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "Pink",
        code: "#FFC0CB",
        sku: "PRA-BKT-NYL-PNK-001",

        images: [
          p25Img10,
          p25Img11,
          p25Img12
        ],

        sizes: [
          {
            name: "One Size",
            code: "OS",
            sku: "PRA-BKT-NYL-PNK-OS",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      }
    ],

    bestSeller: false
  },
  {
    id: 26,

    title: "Gucci Multicolor GG Star Print Swim Shorts",
    brand: "Gucci",
    category: "shorts",
    gender: "men",
    description: "A vibrant pair of Gucci swim shorts featuring an all-over multicolor GG monogram and star print on a dark background. The shorts include an elasticated waistband with a black drawstring, side pockets, and a comfortable regular fit. Includes original Gucci hangtags with size M, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 550,
    oldPrice: 680,
    discount: 19,
    rating: 4.9,
    reviewCount: 38,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p26Img1,
      p26Img2,
      p26Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "GUC-SHT-MUL-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 27,

    title: "Prada Black Ribbed Tank Top with Triangle Logo",
    brand: "Prada",
    category: "tops",
    gender: "women",
    description: "A classic black ribbed tank top by Prada, featuring the iconic Prada triangle logo plaque centered on the chest. The top has a scoop neckline, wide shoulder straps, and a comfortable stretch fit. Includes original Prada hangtags and is packaged in the original Prada plastic bag, confirming authenticity.",

    currentPrice: 450,
    oldPrice: 550,
    discount: 18,
    rating: 4.9,
    reviewCount: 67,
    stock: true,

    material: "Cotton blend / Ribbed knit",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p27Img1,
      p27Img2,
      p27Img3,
      p27Img4,
      p27Img5
    ],

    colors: [],

    sizes: [
      {
        name: "S",
        code: "S",
        sku: "PRA-TNK-BLK-S-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      },
      {
        name: "M",
        code: "M",
        sku: "PRA-TNK-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      },
      {
        name: "L",
        code: "L",
        sku: "PRA-TNK-BLK-L-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 28,

    title: "Burberry Black Check Trim Bikini Set",
    brand: "Burberry",
    category: "swimwear",
    gender: "women",
    description: "A chic black two-piece bikini set by Burberry, featuring the brand's iconic signature check pattern on the adjustable straps and trim. The top is a classic triangle halter style with soft cups, while the bottoms feature a low-rise fit with side ties. Includes original Burberry hangtags with size M, confirming authenticity.",

    currentPrice: 350,
    oldPrice: 430,
    discount: 19,
    rating: 4.8,
    reviewCount: 25,
    stock: true,

    material: "Polyamide / Elastane",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p28Img1,
      p28Img2,
      p28Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "BUR-BIK-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 29,

    title: "Gucci Beige GG Jacquard Triangle Bikini Set",
    brand: "Gucci",
    category: "swimwear",
    gender: "women",
    description: "A luxurious two-piece triangle bikini set by Gucci, featuring the iconic GG jacquard pattern in beige and brown. The top is a classic triangle halter style with adjustable straps and soft cups, while the bottoms feature a matching low-rise design with side ties. Includes original Gucci hangtags with size S, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 450,
    oldPrice: 560,
    discount: 20,
    rating: 4.9,
    reviewCount: 32,
    stock: true,

    material: "Polyamide / Elastane",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p29Img1,
      p29Img2,
      p29Img3,
      p29Img4
    ],

    colors: [],

    sizes: [
      {
        name: "S",
        code: "S",
        sku: "GUC-BIK-BGE-S-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 30,

    title: "Prada Re-Nylon Triangle Bikini Set with Triangle Logo",
    brand: "Prada",
    category: "swimwear",
    gender: "women",
    description: "A sophisticated two-piece bikini set by Prada, crafted from recycled nylon with a sleek, satin-like finish. The top is a triangle halter style with adjustable straps and features the iconic Prada triangle logo on the underband. The bottoms are high-waisted with a matching triangle logo at the center. Available in Black and Navy Blue. Includes original Prada hangtags, confirming authenticity.",

    currentPrice: 590,
    oldPrice: 720,
    discount: 18,
    rating: 4.9,
    reviewCount: 44,
    stock: true,

    material: "Recycled Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p30Img1,
      p30Img4
    ],

    colors: [
      {
        name: "Black",
        code: "#000000",
        sku: "PRA-BIK-BLK-001",

        images: [
          p30Img1,
          p30Img2,
          p30Img3
        ],

        sizes: [
          {
            name: "M",
            code: "M",
            sku: "PRA-BIK-BLK-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "Navy Blue",
        code: "#1C2333",
        sku: "PRA-BIK-NVY-001",

        images: [
          p30Img4
        ],

        sizes: [
          {
            name: "M",
            code: "M",
            sku: "PRA-BIK-NVY-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      }
    ],

    bestSeller: false
  },
  {
    id: 31,

    title: "Designer Swim Shorts with Monogram and Check Patterns",
    brand: "Mixed (Dior / Burberry)",
    category: "shorts",
    gender: "men",
    description: "A pair of premium swim shorts available in two distinct patterns: a light blue Dior Oblique monogram design with white drawstring, and a light pink Burberry check pattern with brown drawstring. Both feature elasticated waistbands and side pockets. Includes original brand hangtags, confirming authenticity.",

    currentPrice: 520,
    oldPrice: 650,
    discount: 20,
    rating: 4.8,
    reviewCount: 27,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p31Img1,
      p31Img4
    ],

    colors: [
      {
        name: "Light Pink",
        code: "#FFB6C1",
        sku: "DZ-SHT-PNK-001",

        images: [
          p31Img4,
          p31Img5,
          p31Img6
        ],

        sizes: [
          {
            name: "S",
            code: "S",
            sku: "DZ-SHT-PNK-S",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "M",
            code: "M",
            sku: "DZ-SHT-PNK-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "L",
            code: "L",
            sku: "DZ-SHT-PNK-L",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "Light Blue",
        code: "#ADD8E6",
        sku: "DZ-SHT-BLU-001",

        images: [
          p31Img1,
          p31Img2,
          p31Img3
        ],

        sizes: [
          {
            name: "S",
            code: "S",
            sku: "DZ-SHT-BLU-S",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "M",
            code: "M",
            sku: "DZ-SHT-BLU-M",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          },
          {
            name: "L",
            code: "L",
            sku: "DZ-SHT-BLU-L",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      }
    ],

    bestSeller: false
  },
  {
    id: 32,

    title: "Burberry TB Monogram Check Baseball Cap",
    brand: "Burberry",
    category: "hats",
    gender: "unisex",
    description: "A beige baseball cap by Burberry, featuring the brand's iconic signature check pattern in black, white, and red stripes. The front displays a large embroidered 'TB' monogram logo in black. The cap has a curved brim, an adjustable snapback strap at the rear, and a top button. A classic accessory that combines heritage check styling with modern streetwear appeal.",

    currentPrice: 320,
    oldPrice: 395,
    discount: 19,
    rating: 4.9,
    reviewCount: 41,
    stock: true,

    material: "Cotton Twill",
    fit: "Adjustable",
    season: "All seasons",
    condition: "New",

    images: [
      p32Img1,
      p32Img2,
      p32Img3,
      p32Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "BUR-CAP-TB-BGE-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 33,

    title: "Fendi Zucca Pattern Baseball Cap with Embroidered Logo",
    brand: "Fendi",
    category: "hats",
    gender: "unisex",
    description: "A brown and khaki baseball cap by Fendi, featuring the iconic Zucca monogram pattern throughout. The front displays an embroidered 'FENDI ROMA' logo in gold-tone thread. The cap has a curved brim, an adjustable strap with a gold-tone buckle at the rear, and a black interior lining. Includes original Fendi hangtags, confirming authenticity.",

    currentPrice: 380,
    oldPrice: 460,
    discount: 17,
    rating: 4.9,
    reviewCount: 35,
    stock: true,

    material: "Jacquard Fabric / Cotton",
    fit: "Adjustable",
    season: "All seasons",
    condition: "New",

    images: [
      p33Img1,
      p33Img2,
      p33Img3,
      p33Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "FEN-CAP-ZUC-BRN-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 34,

    title: "Amiri MA Logo Trucker Hat",
    brand: "Amiri",
    category: "hats",
    gender: "men",
    description: "A black and dark blue trucker hat by Amiri, featuring the brand's signature 'MA' gothic logo embroidered in white on the front. The hat has a solid front panel, mesh back panels for breathability, a curved brim, and an adjustable snapback strap at the rear. Includes original Amiri branding and tags, confirming authenticity.",

    currentPrice: 195,
    oldPrice: 240,
    discount: 19,
    rating: 4.8,
    reviewCount: 28,
    stock: true,

    material: "Cotton / Polyester Mesh",
    fit: "Adjustable",
    season: "All seasons",
    condition: "New",

    images: [
      p34Img1,
      p34Img3
    ],

    colors: [
      {
        name: "Black",
        code: "#000000",
        sku: "AMR-HAT-TRK-BLK-001",

        images: [
          p34Img1,
          p34Img2
        ],

        sizes: [
          {
            name: "One Size",
            code: "OS",
            sku: "AMR-HAT-TRK-BLK-OS",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      },

      {
        name: "Dark Blue",
        code: "#00008B",
        sku: "AMR-HAT-TRK-DBL-001",

        images: [
          p34Img3,
          p34Img4,
          p34Img5,
          p34Img6
        ],

        sizes: [
          {
            name: "One Size",
            code: "OS",
            sku: "AMR-HAT-TRK-DBL-OS",

            ebayAffiliateUrl: "",
            depopAffiliateUrl: "",
            poshmarkAffiliateUrl: ""
          }
        ]
      }
    ],

    bestSeller: false
  },
  {
    id: 35,

    title: "Louis Vuitton Monogram Embroidered Swim Shorts",
    brand: "Louis Vuitton",
    category: "shorts",
    gender: "men",
    description: "A pair of dark navy swim shorts by Louis Vuitton, featuring the brand's signature LV monogram embroidered in blue thread throughout. The shorts have an elasticated waistband with a black drawstring and gold-tone aglets, side pockets, and a relaxed fit. Includes original Louis Vuitton hangtags with size M, confirming authenticity and premium craftsmanship.",

    currentPrice: 680,
    oldPrice: 820,
    discount: 17,
    rating: 4.9,
    reviewCount: 36,
    stock: true,

    material: "Polyamide / Elastane",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p35Img1,
      p35Img2,
      p35Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "LVM-SHT-MON-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 36,

    title: "Versace Baroque Print Swim Shorts with Polka Dot Trim",
    brand: "Versace",
    category: "shorts",
    gender: "men",
    description: "A vibrant pair of Versace swim shorts featuring an all-over 'VERSACE' typographic print in light blue and yellow. The shorts include a white drawstring with black aglets, an elasticated waistband, and side pockets. The hem features a contrasting blue polka dot trim and a gold-tone Baroque Medusa motif. Includes original Versace hangtags, confirming authenticity.",

    currentPrice: 450,
    oldPrice: 560,
    discount: 20,
    rating: 4.8,
    reviewCount: 22,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p36Img1,
      p36Img2,
      p36Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "VER-SHT-BAR-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 37,

    title: "Versace Black Greca Border Swim Shorts",
    brand: "Versace",
    category: "shorts",
    gender: "men",
    description: "A pair of black swim shorts by Versace, featuring a striking gold-tone Greca border along the elasticated waistband. The shorts include a metal Medusa head emblem at the center of the waistband, a white drawstring with black aglets, and side pockets. Includes original Versace hangtags, confirming authenticity.",

    currentPrice: 480,
    oldPrice: 590,
    discount: 19,
    rating: 4.9,
    reviewCount: 31,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p37Img1,
      p37Img2,
      p37Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "VER-SHT-GRC-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 38,

    title: "Burberry Classic Check Swim Shorts",
    brand: "Burberry",
    category: "shorts",
    gender: "men",
    description: "A pair of classic beige swim shorts by Burberry, featuring the brand's iconic signature check pattern in black, white, and red. The shorts have an elasticated waistband with a beige drawstring, side pockets, and a relaxed fit. Includes original Burberry hangtags, confirming authenticity and heritage craftsmanship.",

    currentPrice: 380,
    oldPrice: 460,
    discount: 17,
    rating: 4.8,
    reviewCount: 29,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p38Img1,
      p38Img2,
      p38Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "BUR-SHT-CHK-BGE-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 39,

    title: "Versace Baroque Print Swim Shorts",
    brand: "Versace",
    category: "shorts",
    gender: "men",
    description: "A pair of black swim shorts by Versace, featuring the brand's iconic Baroque print in vibrant yellow, gold, and pink tones. The shorts have an elasticated waistband with a black drawstring, side pockets, and a relaxed fit. Includes original Versace hangtags, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 460,
    oldPrice: 570,
    discount: 19,
    rating: 4.9,
    reviewCount: 34,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p39Img1,
      p39Img2,
      p39Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "VER-SHT-BAR-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 40,

    title: "Versace Black Greca Border Swim Shorts with Embroidered Logo",
    brand: "Versace",
    category: "shorts",
    gender: "men",
    description: "A pair of black swim shorts by Versace, featuring a gold-tone Greca border along the hem and waistband. The shorts include an embroidered 'VERSACE' logo on the left leg, an elasticated waistband with a black drawstring, and side pockets. Includes original Versace hangtags with size M, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 470,
    oldPrice: 580,
    discount: 19,
    rating: 4.9,
    reviewCount: 27,
    stock: true,

    material: "Polyester / Nylon",
    fit: "Regular Fit",
    season: "Summer",
    condition: "New",

    images: [
      p40Img1,
      p40Img2,
      p40Img3
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "VER-SHT-GRC-BLK-M-002",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 41,

    title: "Burberry Classic Check Cashmere Scarf",
    brand: "Burberry",
    category: "accessories",
    gender: "unisex",
    description: "A timeless Burberry scarf crafted from 100% cashmere, featuring the iconic signature check pattern in beige, black, white, and red. The scarf is finished with traditional fringed ends and includes the original Burberry hangtags, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 420,
    oldPrice: 520,
    discount: 19,
    rating: 4.9,
    reviewCount: 67,
    stock: true,

    material: "100% Cashmere",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p41Img1,
      p41Img2,
      p41Img3,
      p41Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "BUR-SCF-CHK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: true
  },
  {
    id: 42,

    title: "Givenchy Black Distressed Logo T-Shirt",
    brand: "Givenchy",
    category: "tops",
    gender: "men",
    description: "A black short-sleeve T-shirt by Givenchy, featuring a distressed white 'GIVENCHY PARIS' logo print on the front. The shirt has a classic crew neckline, a regular fit, and a comfortable cotton construction. Includes original Givenchy hangtags and comes in original packaging, confirming authenticity.",

    currentPrice: 420,
    oldPrice: 520,
    discount: 19,
    rating: 4.8,
    reviewCount: 39,
    stock: true,

    material: "100% Cotton",
    fit: "Regular Fit",
    season: "All seasons",
    condition: "New",

    images: [
      p42Img1,
      p42Img2,
      p42Img3,
      p42Img4
    ],

    colors: [],

    sizes: [
      {
        name: "M",
        code: "M",
        sku: "GIV-TSH-DIS-BLK-M-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 43,

    title: "Celine Black Leather Belt with Triomphe Gold Buckle",
    brand: "Celine",
    category: "accessories",
    gender: "women",
    description: "A sleek black leather belt by Celine, featuring the iconic Triomphe gold-tone metal buckle. The belt has a smooth, polished finish and is a versatile accessory for both casual and formal styling. Includes original Celine packaging and dust bag, confirming authenticity.",

    currentPrice: 550,
    oldPrice: 680,
    discount: 19,
    rating: 4.9,
    reviewCount: 23,
    stock: true,

    material: "Leather",
    fit: "Regular",
    season: "All seasons",
    condition: "New",

    images: [
      p43Img1,
      p43Img2,
      p43Img3
    ],

    colors: [],

    sizes: [
      {
        name: "85",
        code: "85",
        sku: "CEL-BLT-TRI-BLK-85",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 44,

    title: "Celine Black Ribbed Knit Beanie with Triomphe Logo",
    brand: "Celine",
    category: "hats",
    gender: "women",
    description: "A black ribbed knit beanie by Celine, featuring the iconic Triomphe logo embroidered in cream thread on the front. The hat has a classic folded cuff design, a snug fit, and a soft, warm construction. Includes original Celine hangtags, confirming authenticity and premium craftsmanship.",

    currentPrice: 380,
    oldPrice: 460,
    discount: 17,
    rating: 4.9,
    reviewCount: 32,
    stock: true,

    material: "Wool",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p44Img1,
      p44Img2,
      p44Img3
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "CEL-BNE-TRI-BLK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 45,

    title: "Burberry Heart Print Cashmere Scarf",
    brand: "Burberry",
    category: "accessories",
    gender: "women",
    description: "A charming Burberry scarf crafted from 100% cashmere, featuring the brand's iconic signature check pattern in beige, black, white, and red, adorned with scattered red heart motifs. The scarf is finished with traditional fringed ends and includes original Burberry hangtags, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 450,
    oldPrice: 550,
    discount: 18,
    rating: 4.9,
    reviewCount: 41,
    stock: true,

    material: "100% Cashmere",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p45Img1,
      p45Img2,
      p45Img3,
      p45Img4,
      p45Img5
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "BUR-SCF-HRT-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: true
  },
  {
    id: 46,

    title: "Amiri Black Knit Beanie with Embroidered Logo",
    brand: "Amiri",
    category: "hats",
    gender: "unisex",
    description: "A black ribbed knit beanie by Amiri, featuring the brand's signature 'AMIRI' logo embroidered in white thread on the front. The hat has a classic folded cuff design, a snug fit, and a soft, warm construction. Includes original Amiri hangtags and comes in original packaging, confirming authenticity.",

    currentPrice: 240,
    oldPrice: 295,
    discount: 19,
    rating: 4.8,
    reviewCount: 26,
    stock: true,

    material: "Wool / Acrylic Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p46Img1,
      p46Img2,
      p46Img3,
      p46Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "AMR-BNE-LOG-BLK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 47,

    title: "Amiri MA Logo Black Knit Beanie",
    brand: "Amiri",
    category: "hats",
    gender: "unisex",
    description: "A black ribbed knit beanie by Amiri, featuring the brand's signature 'MA' gothic logo embroidered in white thread on the front. The hat has a classic folded cuff design, a snug fit, and a soft, warm construction. Includes original Amiri hangtags and comes in original packaging, confirming authenticity.",

    currentPrice: 250,
    oldPrice: 310,
    discount: 19,
    rating: 4.8,
    reviewCount: 31,
    stock: true,

    material: "Wool / Acrylic Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p47Img1,
      p47Img2,
      p47Img3
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "AMR-BNE-MA-BLK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 48,

    title: "Acne Studios Checked Wool Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A soft and cozy scarf by Acne Studios, featuring a large check pattern in shades of blue, grey, and cream. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 280,
    oldPrice: 350,
    discount: 20,
    rating: 4.8,
    reviewCount: 55,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p48Img1,
      p48Img2,
      p48Img3,
      p48Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-CHK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 49,

    title: "Acne Studios Multicolor Checked Mohair Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A vibrant and soft scarf by Acne Studios, featuring a large check pattern in a mix of blue, green, yellow, brown, and grey tones. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 290,
    oldPrice: 360,
    discount: 19,
    rating: 4.9,
    reviewCount: 48,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p49Img1,
      p49Img2,
      p49Img3,
      p49Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-MUL-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: true
  },
  {
    id: 50,

    title: "Amiri Black Knit Beanie with Embroidered Logo",
    brand: "Amiri",
    category: "hats",
    gender: "unisex",
    description: "A black ribbed knit beanie by Amiri, featuring the brand's signature 'AMIRI' logo embroidered in white thread on the front. The hat has a classic folded cuff design, a snug fit, and a soft, warm construction. Includes original Amiri hangtags and comes in original packaging, confirming authenticity.",

    currentPrice: 240,
    oldPrice: 295,
    discount: 19,
    rating: 4.8,
    reviewCount: 26,
    stock: true,

    material: "Wool / Acrylic Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p50Img1,
      p50Img2
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "AMR-BNE-LOG-BLK-OS-002",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 51,

    title: "Acne Studios Multicolor Checked Wool Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A vibrant and soft scarf by Acne Studios, featuring a large check pattern in a mix of orange, green, brown, and grey tones. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 310,
    oldPrice: 390,
    discount: 21,
    rating: 4.9,
    reviewCount: 62,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p51Img1,
      p51Img2,
      p51Img3,
      p51Img4,
      p51Img5
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-MUL-OS-002",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: true
  },
  {
    id: 52,

    title: "Acne Studios Multicolor Checked Alpaca Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A vibrant and soft scarf by Acne Studios, featuring a large check pattern in a mix of blue, orange, pink, purple, and green tones. The scarf is crafted from a wool, alpaca, and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 320,
    oldPrice: 400,
    discount: 20,
    rating: 4.9,
    reviewCount: 58,
    stock: true,

    material: "Wool / Alpaca / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p52Img1,
      p52Img2,
      p52Img3,
      p52Img4,
      p52Img5,
      p52Img6
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-MUL-OS-003",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: true
  },
  {
    id: 53,

    title: "Burberry Black Knit Beanie with Logo",
    brand: "Burberry",
    category: "hats",
    gender: "unisex",
    description: "A black ribbed knit beanie by Burberry, featuring a bold white 'BURBERRY' knit logo band across the front. The hat has a classic fitted design, a soft and warm construction, and a folded cuff. Includes original Burberry hangtags, confirming authenticity and premium craftsmanship.",

    currentPrice: 280,
    oldPrice: 350,
    discount: 20,
    rating: 4.9,
    reviewCount: 35,
    stock: true,

    material: "Wool",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p53Img1,
      p53Img2,
      p53Img3
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "BUR-BNE-LOG-BLK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 54,

    title: "Acne Studios Brown Checked Mohair Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A soft and cozy scarf by Acne Studios, featuring a large check pattern in shades of brown, beige, grey, and cream. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 300,
    oldPrice: 380,
    discount: 21,
    rating: 4.9,
    reviewCount: 52,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p54Img1,
      p54Img2,
      p54Img3,
      p54Img4,
      p54Img5
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-BRN-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 55,

    title: "Acne Studios Grey and Black Checked Mohair Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A soft and cozy scarf by Acne Studios, featuring a large check pattern in shades of grey, black, beige, and cream. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 290,
    oldPrice: 360,
    discount: 19,
    rating: 4.9,
    reviewCount: 47,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p55Img1,
      p55Img2,
      p55Img3,
      p55Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-GRY-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 56,

    title: "Acne Studios Pink and Orange Checked Mohair Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A soft and vibrant scarf by Acne Studios, featuring a large check pattern in shades of pink, orange, beige, and grey. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity.",

    currentPrice: 310,
    oldPrice: 390,
    discount: 21,
    rating: 4.9,
    reviewCount: 44,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p56Img1,
      p56Img2,
      p56Img3,
      p56Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-PNK-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  },
  {
    id: 57,

    title: "Burberry Giant Check Cashmere Scarf with Equestrian Knight Logo",
    brand: "Burberry",
    category: "accessories",
    gender: "unisex",
    description: "A luxurious Burberry scarf crafted from 100% cashmere, featuring the brand's iconic Giant Check pattern in beige, black, white, and red. The scarf includes a woven Equestrian Knight Design logo and 'BURBERRY' text, finished with traditional fringed ends. Includes original Burberry hangtags and authenticity labels, confirming premium Italian craftsmanship.",

    currentPrice: 480,
    oldPrice: 590,
    discount: 19,
    rating: 4.9,
    reviewCount: 72,
    stock: true,

    material: "100% Cashmere",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p57Img1,
      p57Img2,
      p57Img3,
      p57Img4
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "BUR-SCF-GNT-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: true
  },
  {
    id: 58,

    title: "Acne Studios Orange and Brown Checked Mohair Scarf",
    brand: "Acne Studios",
    category: "accessories",
    gender: "unisex",
    description: "A soft and cozy scarf by Acne Studios, featuring a large check pattern in shades of orange, brown, beige, and grey. The scarf is crafted from a wool and mohair blend for a fuzzy, textured finish and includes the signature Acne Studios woven label. Finished with long fringed ends. Includes original Acne Studios hangtags, confirming authenticity and premium Italian craftsmanship.",

    currentPrice: 290,
    oldPrice: 360,
    discount: 19,
    rating: 4.9,
    reviewCount: 51,
    stock: true,

    material: "Wool / Mohair Blend",
    fit: "One Size",
    season: "Autumn / Winter",
    condition: "New",

    images: [
      p58Img1,
      p58Img2,
      p58Img3,
      p58Img4,
      p58Img5,
      p58Img6
    ],

    colors: [],

    sizes: [
      {
        name: "One Size",
        code: "OS",
        sku: "ACN-SCF-ORG-OS-001",

        ebayAffiliateUrl: "",
        depopAffiliateUrl: "",
        poshmarkAffiliateUrl: ""
      }
    ],

    bestSeller: false
  }
]

export const getProductById = (id) => products.find((p) => p.id === Number(id))

export const getBestSellers = () => products.filter((p) => p.bestSeller).slice(0, 10)

export const getRelatedProducts = (product, limit = 8) =>
  products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, limit)
