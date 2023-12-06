/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  // Create an object to store the total spent for each category
  const categoryTotals = {};

  // Iterate through each transaction using a for loop
  for (let i = 0; i < transactions.length; i++) {
    // Retrieve the category and price from the current transaction
    const currentCategory = transactions[i].category;
    const currentPrice = transactions[i].price;

    // Check if the category is not already in categoryTotals
    if (!categoryTotals[currentCategory]) {
      // If not, initialize it with the current transaction's price
      categoryTotals[currentCategory] = currentPrice;
    } else {
      // If the category already exists, add the current transaction's price to the total
      categoryTotals[currentCategory] += currentPrice;
    }
  }

  // Create an array of objects with category and totalSpent properties
  const result = Object.keys(categoryTotals).map(category => ({
    category,
    totalSpent: categoryTotals[category],
  }));

  // Log the result to the console
  console.log(result);

  // Return the final result
  return result;
}

module.exports = calculateTotalSpentByCategory;
