const inventory = [
    { name: "Laptop", category: "Electronics", price: 999.99, stock: 15 },
    { name: "Desk Chair", category: "Furniture", price: 149.50, stock: 3 },
    { name: "Coffee Maker", category: "Appliances", price: 59.99, stock: 8 },
    { name: "Monitor", category: "Electronics", price: 199.99, stock: 12 },
    { name: "Desk", category: "Furniture", price: 249.50, stock: 4 },
    { name: "Blender", category: "Appliances", price: 39.99, stock: 2 }
  ];
  

  function getMostStockedCategory(items) {
    const categoryCounts = {};
  
    for (let item of items) {
      categoryCounts[item.category] = (categoryCounts[item.category] || 0) + item.stock;
    }
  
    let maxCategory = null;
    let maxStock = 0;
  
    for (let [category, stock] of Object.entries(categoryCounts)) {
      if (stock > maxStock) {
        maxStock = stock;
        maxCategory = category;
      }
    }
  
    return { category: maxCategory, totalStock: maxStock };
  }
  
  
  function getTotalInventoryValue(items) {
    return items.reduce((total, item) => total + (item.price * item.stock), 0);
  }
  
  
  function getProductsNeedingRestock(items) {
    return items.filter(item => item.stock < 5).map(item => item.name);
  }
  
  const mostStocked = getMostStockedCategory(inventory);
  const totalValue = getTotalInventoryValue(inventory);
  const restockItems = getProductsNeedingRestock(inventory);
  
  