import rog1 from "../assets/products/labtop/Rog1.png";
import zephyrus from "../assets/products/labtop/rog2.png";
import tuf from "../assets/products/labtop/tuf.png";
import VivoBook from "../assets/products/labtop/vivobook.png";
import zenbook from "../assets/products/labtop/zenbook.png";
import flox from "../assets/products/labtop/rog3.png";

import gt35 from "../assets/products/destkop/des1.png";
import g22ch from "../assets/products/destkop/des2.png";
import expertCenter from "../assets/products/destkop/des3.png";
import huracan from "../assets/products/destkop/des4.png";
import proArt from "../assets/products/destkop/des5.png";
import VivoMini from "../assets/products/destkop/des6.png";

import Z790E from "../assets/products/component/comp1.png";
import RTX4080 from "../assets/products/component/comp2.png";
import PSU from "../assets/products/component/comp2.png";

import Swift from "../assets/products/display/dis1.png";
import VG27AQ from "../assets/products/display/dis2.png";
import PA278CV from "../assets/products/display/dis3.png";

const products = [
  {
    id: 1,
    name: "ASUS ROG Strix G16 G614PR-RV083W",
    image: rog1,
    category: "Labtop",
    specs: "RTX 5070Ti 12GB • 16GB RAM • 1TB NVMe",
    price: 1999.0,
    rating: 5,
    reviews: 428,
    detail: [
      "CPU     : AMD Ryzen 9 8940HX",
      "RAM     : 16GB DDR5",
      "STORAGE : 1TB SSD",
      "DISPLAY : 16” 165Hz",
      "GRAPHIC : RTX 5070Ti",
      "OS      : Windows 11",
    ],
  },

  {
    id: 2,
    name: "ASUS TUF Gaming A15",
    image: tuf,
    category: "Labtop",
    specs: "RTX 4060 • 16GB RAM • 512GB SSD",
    price: 1299.0,
    rating: 4.5,
    reviews: 210,
    detail: [
      "CPU     : Ryzen 7",
      "RAM     : 16GB RAM",
      "STORAGE : 512GB SSD",
      "DISPLAY : 15.6” 144Hz",
      "GRAPHIC : RTX 4060",
      "OS      : Windows 11",
    ],
  },

  {
    id: 3,
    name: "ASUS ROG Zephyrus G14",
    image: zephyrus,
    category: "Labtop",
    specs: "RTX 4070 • 32GB RAM • 1TB SSD",
    price: 1799.0,
    rating: 4.8,
    reviews: 320,
    detail: [
      "CPU     : Ryzen 9",
      "RAM     : 32GB RAM",
      "STORAGE : 1TB SSD",
      "DISPLAY : 14” QHD 165Hz",
      "GRAPHIC : RTX 4070",
      "OS      : Windows 11",
    ],
  },

  {
    id: 4,
    name: "ASUS VivoBook Pro 15",
    image: VivoBook,
    category: "Labtop",
    specs: "RTX 3050 • 16GB RAM • 512GB SSD",
    price: 999.0,
    rating: 4.3,
    reviews: 150,
    detail: [
      "CPU     : Intel i7",
      "RAM     : 16GB RAM",
      "STORAGE : 512GB SSD",
      "DISPLAY : 15.6” OLED",
      "GRAPHIC : RTX 3050",
      "OS      : Windows 11",
    ],
  },

  {
    id: 5,
    name: "ASUS ZenBook 14 OLED",
    image: zenbook,
    category: "Labtop",
    specs: "Intel i7 • 16GB RAM • 1TB SSD",
    price: 1199.0,
    rating: 4.6,
    reviews: 190,
    detail: [
      "CPU     : Intel i7",
      "RAM     : 16GB RAM",
      "STORAGE : 1TB SSD",
      "DISPLAY : 14” OLED",
      "GRAPHIC : Integrated GPU",
      "OS      : Windows 11",
    ],
  },

  {
    id: 6,
    name: "ASUS ROG Flow X13",
    image: flox,
    category: "Labtop",
    specs: "RTX 4050 • 16GB RAM • 1TB SSD",
    price: 1499.0,
    rating: 4.4,
    reviews: 170,
    detail: [
      "CPU     : Ryzen 9",
      "RAM     : 16GB RAM",
      "STORAGE : 1TB SSD",
      "DISPLAY : 13.4” Touch",
      "GRAPHIC : RTX 4050",
      "OS      : Windows 11",
    ],
  },

  //   Destop

  {
    id: 7,
    name: "ASUS ROG Strix GT35 Gaming Desktop",
    image: gt35,
    category: "Desktop",
    specs: "RTX 4090 • 32GB RAM • 2TB SSD",
    price: 3299.0,
    rating: 5,
    reviews: 120,
    detail: [
      "CPU     : Intel Core i9",
      "RAM     : 32GB RAM",
      "STORAGE : 2TB SSD",
      "GRAPHIC : RTX 4090",
      "TYPE    : Liquid Cooling",
      "OS      : Windows 11",
    ],
  },

  {
    id: 8,
    name: "ASUS ROG G22CH Mini Gaming PC",
    image: g22ch,
    category: "Desktop",
    specs: "RTX 4070 • 16GB RAM • 1TB SSD",
    price: 1899.0,
    rating: 4.6,
    reviews: 95,
    detail: [
      "CPU     : Intel i7",
      "RAM     : 16GB RAM",
      "STORAGE : 1TB SSD",
      "GRAPHIC : RTX 4070",
      "TYPE    : Compact Design",
      "OS      : Windows 11",
    ],
  },

  {
    id: 9,
    name: "ASUS ExpertCenter D7 Tower",
    image: expertCenter,
    category: "Desktop",
    specs: "Intel i7 • 16GB RAM • 512GB SSD",
    price: 999.0,
    rating: 4.3,
    reviews: 80,
    detail: [
      "CPU     : Intel i7",
      "RAM     : 16GB RAM",
      "STORAGE : 512GB SSD",
      "GRAPHIC : Integrated GPU",
      "TYPE    : Business Desktop",
      "OS      : Windows 11 Pro",
    ],
  },

  {
    id: 10,
    name: "ASUS ROG Huracan G21",
    image: huracan,
    category: "Desktop",
    specs: "RTX 3080 • 32GB RAM • 1TB SSD",
    price: 2499.0,
    rating: 4.7,
    reviews: 110,
    detail: [
      "CPU     : Intel i9",
      "RAM     : 32GB RAM",
      "STORAGE : 1TB SSD",
      "GRAPHIC : RTX 3080",
      "TYPE    : Gaming Design",
      "OS      : Windows 11",
    ],
  },

  {
    id: 11,
    name: "ASUS ProArt Station PD5",
    image: proArt,
    category: "Desktop",
    specs: "RTX 4070 • 32GB RAM • 2TB SSD",
    price: 2799.0,
    rating: 4.8,
    reviews: 70,
    detail: [
      "CPU     : Intel i9",
      "RAM     : 32GB RAM",
      "STORAGE : 2TB SSD",
      "GRAPHIC : RTX 4070",
      "TYPE    : Creator PC",
      "OS      : Windows 11",
    ],
  },

  {
    id: 12,
    name: "ASUS VivoMini VC66",
    image: VivoMini,
    category: "Desktop",
    specs: "Intel i5 • 8GB RAM • 256GB SSD",
    price: 599.0,
    rating: 4.2,
    reviews: 60,
    detail: [
      "CPU     : Intel i5",
      "RAM     : 8GB RAM",
      "STORAGE : 256GB SSD",
      "GRAPHIC : Integrated GPU",
      "TYPE    : Compact Mini PC",
      "OS      : Windows 11",
    ],
  },

  // Component

  {
    id: 13,
    name: "ASUS ROG Strix Z790-E Gaming WiFi Motherboard",
    image: Z790E,
    category: "Component",
    specs: "Intel Z790 • DDR5 • PCIe 5.0 • WiFi 6E",
    price: 499.0,
    rating: 4.8,
    reviews: 150,
    detail: [
      "GRAPHIC    : Intel LGA 1700 Socket",
      "MEMORY     : DDR5 Support",
      "EXPANSION  : PCIe 5.0",
      "WIRELESS   : WiFi 6E",
      "PORTS      : Thunderbolt 4",
      "TYPE       : ROG Cooling Design",
    ],
  },
  {
    id: 14,
    name: "ASUS ROG Strix RTX 4080 Graphics Card",
    image: RTX4080,
    category: "Component",
    specs: "16GB GDDR6X • PCIe 4.0 • DLSS 3",
    price: 1199.0,
    rating: 4.8,
    reviews: 220,
    detail: [
      "GRAPHIC     : NVIDIA RTX 4080",
      "MEMORY      : 16GB GDDR6X",
      "FEATURES    : DLSS 3",
      "RAY TRACING : YES",
      "TYPE        : Triple Fan Cooling",
      "USAGE       : High Performance Gaming",
    ],
  },

  {
    id: 15,
    name: "ASUS TUF Gaming 850W PSU",
    image: PSU,
    category: "Component",
    specs: "850W • 80+ Gold • Fully Modular",
    price: 149.0,
    rating: 4.6,
    reviews: 175,
    detail: [
      "POWER       : 850W Power Supply",
      "EFFICIENCY  : 80+ Gold Certified",
      "TYPE        : Fully Modular",
      "COOLING     : Silent Cooling Fan",
      "STABILITY   : Stable Power Output",
      "SERIES      : TUF Reliability",
    ],
  },

  // Display

  {
    id: 16,
    name: "ASUS ROG Swift PG279QM Gaming Monitor",
    image: Swift,
    category: "Display",
    specs: "27” • 1440p • 240Hz • IPS",
    price: 799.0,
    rating: 4.8,
    reviews: 210,
    detail: [
      "SIZE          : 27-inch IPS Panel",
      "RESOLUTION    : 2560x1440 Resolution",
      "REFRESH RATE  : 240Hz Refresh Rate",
      "RESPONSE TIME : 1ms Response Time",
      "SYNC          : G-Sync Compatible",
      "HDR           : HDR Support",
    ],
  },

  {
    id: 17,
    name: "ASUS TUF Gaming VG27AQ",
    image: VG27AQ,
    category: "Display",
    specs: "27” • 1440p • 165Hz • IPS",
    price: 399.0,
    rating: 4.6,
    reviews: 320,
    detail: [
      "SIZE         : 27-inch IPS Panel",
      "RESOLUTION   : 2560x1440 Resolution",
      "REFRESH RATE : 165Hz Refresh Rate",
      "FEATURES     : ELMB Sync",
      "SYNC         : G-Sync Compatible",
      "HDR          : HDR10",
    ],
  },

  {
    id: 18,
    name: "ASUS ProArt Display PA278CV",
    image: PA278CV,
    category: "Display",
    specs: "27” • 1440p • Color Accurate IPS",
    price: 499.0,
    rating: 4.7,
    reviews: 180,
    detail: [
      "SIZE           : 27-inch IPS Panel",
      "RESOLUTION     : 2560x1440 Resolution",
      "COLORGAMUT     : 100% sRGB",
      "CALIBRATION    : Factory Calibrated",
      "CONNECTIVITIES : USB-C Hub",
      "STAND          : Ergonomic Stand",
    ],
  },

  //    peripherals

  {
    id: 19,
    name: "ASUS ROG Strix Impact III Gaming Mouse",
    image: "/products/rog-mouse.png",
    category: "Peripherals",
    specs: "Wireless • RGB • 36,000 DPI",
    price: 79.0,
    rating: 4.7,
    reviews: 260,
    detail: [
      "36,000 DPI Sensor",
      "Wireless / Wired Mode",
      "RGB Lighting",
      "Lightweight Design",
      "Low Latency",
      "Ergonomic Shape",
    ],
  },

  {
    id: 20,
    name: "ASUS ROG Strix Scope RX Gaming Keyboard",
    image: "/products/rog-keyboard.png",
    category: "Peripherals",
    specs: "Mechanical • RGB • RX Switches",
    price: 129.0,
    rating: 4.8,
    reviews: 340,
    detail: [
      "Optical Mechanical Switches",
      "RGB Backlighting",
      "Durable Aluminum Frame",
      "Dedicated Media Keys",
      "Gaming Macro Support",
      "Ergonomic Design",
    ],
  },

  {
    id: 21,
    name: "ASUS ROG Delta S Gaming Headset",
    image: "/products/rog-headset.png",
    category: "Peripherals",
    specs: "USB-C • Hi-Res Audio • RGB",
    price: 149.0,
    rating: 4.6,
    reviews: 220,
    detail: [
      "Hi-Res ESS DAC",
      "USB-C Connectivity",
      "RGB Lighting",
      "Clear Mic",
      "Lightweight Build",
      "Surround Sound",
    ],
  },

  // Storage

  {
    id: 22,
    name: "ASUS ROG Strix Arion Portable SSD",
    image: "/products/rog-ssd-portable.png",
    category: "Storage",
    specs: "1TB • USB-C • Portable NVMe Enclosure",
    price: 149.0,
    rating: 4.7,
    reviews: 210,
    detail: [
      "Portable SSD Enclosure",
      "USB-C Interface",
      "Tool-Free Design",
      "Aluminum Alloy Case",
      "High-Speed Transfer",
      "NVMe Support",
    ],
  },

  {
    id: 23,
    name: "ASUS ROG Strix SQ7 1TB NVMe SSD",
    image: "/products/rog-nvme.png",
    category: "Storage",
    specs: "1TB • PCIe 4.0 • Up to 7000MB/s",
    price: 129.0,
    rating: 4.8,
    reviews: 320,
    detail: [
      "PCIe Gen 4 NVMe",
      "Up to 7000MB/s Speed",
      "M.2 2280 Form Factor",
      "Gaming Optimized",
      "High Endurance",
      "Thermal Control",
    ],
  },

  {
    id: 24,
    name: "ASUS TUF Gaming AS1000 External SSD",
    image: "/products/tuf-external-ssd.png",
    category: "Storage",
    specs: "1TB • USB 3.2 • Rugged Design",
    price: 119.0,
    rating: 4.6,
    reviews: 180,
    detail: [
      "1TB Capacity",
      "USB 3.2 Gen 2",
      "Shock Resistant",
      "Portable Design",
      "Fast Transfer Speed",
      "Plug and Play",
    ],
  },
];
export default products;
