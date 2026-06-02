export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    category: "Appetizers",
    items: [
      { name: "Hummus & Pita", description: "Creamy house-made hummus with warm pita bread and a drizzle of olive oil", price: "$8.95" },
      { name: "Baba Ganoush", description: "Smoky roasted eggplant blended with tahini, garlic, and lemon", price: "$9.95" },
      { name: "Falafel Plate", description: "Crispy chickpea fritters served with tahini sauce and fresh vegetables", price: "$11.95" },
      { name: "Mixed Mezze", description: "Selection of hummus, baba ganoush, tabbouleh, and warm pita", price: "$16.95" },
      { name: "Grape Leaves", description: "Tender grape leaves stuffed with herbed rice and pine nuts", price: "$8.95" },
    ],
  },
  {
    category: "Mains",
    items: [
      { name: "Lamb Shawarma Plate", description: "Slow-roasted marinated lamb with garlic sauce, rice, and grilled vegetables", price: "$18.95" },
      { name: "Chicken Souvlaki", description: "Grilled marinated chicken skewers served with rice, salad, and tzatziki", price: "$16.95" },
      { name: "Beef Kofta Kebab", description: "Seasoned ground beef skewers with grilled vegetables and rice pilaf", price: "$17.95" },
      { name: "Maza Mixed Grill", description: "Combination of lamb shawarma, chicken souvlaki, and kofta with all sides", price: "$26.95" },
      { name: "Mediterranean Salmon", description: "Grilled Atlantic salmon with herb oil, quinoa, and seasonal vegetables", price: "$22.95" },
      { name: "Vegetable Shish Kabob", description: "Colorful grilled vegetable skewers with hummus and rice", price: "$14.95" },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Rice Pilaf", description: "Fragrant basmati rice with toasted orzo and herbs", price: "$4.95" },
      { name: "Tabbouleh Salad", description: "Fresh parsley, bulgur wheat, tomatoes, mint, and lemon dressing", price: "$5.95" },
      { name: "Fattoush Salad", description: "Crisp romaine, tomatoes, cucumber, radish, and sumac dressing", price: "$6.95" },
      { name: "Grilled Vegetables", description: "Seasonal vegetables with herb marinade", price: "$5.95" },
      { name: "Garlic Potatoes", description: "Crispy roasted potatoes with garlic and herbs", price: "$5.95" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Baklava", description: "Layers of phyllo, honey, and crushed walnuts with orange blossom", price: "$7.95" },
      { name: "Kunafa", description: "Warm shredded pastry with stretchy cheese, rose water syrup, and pistachios", price: "$8.95" },
      { name: "Rice Pudding", description: "Creamy rice pudding with cinnamon and a hint of orange", price: "$5.95" },
      { name: "Turkish Coffee & Dates", description: "Traditional strong Turkish coffee with medjool dates", price: "$6.95" },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Turkish Tea", description: "Strong black tea served in traditional tulip glasses", price: "$3.50" },
      { name: "Ayran", description: "Refreshing cold yogurt drink with a hint of mint", price: "$4.50" },
      { name: "Fresh Mint Lemonade", description: "House-made lemonade with fresh mint and Meyer lemons", price: "$5.50" },
      { name: "Turkish Coffee", description: "Rich, aromatic coffee served with chocolate dust", price: "$4.95" },
      { name: "Sparkling Pomegranate", description: "House-made sparkling pomegranate beverage", price: "$5.50" },
    ],
  },
];