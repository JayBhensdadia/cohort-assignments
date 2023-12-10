/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


/*

  LOGIC:

  1. find the object in total array by category
  2. add the price of current transaction 

*/

// finds and returns object with given category in total array
// if missing then creates it, appends in array and then returns it

function findCategoryObject(category, total){
  for(let i = 0; i < total.length; i++){
    if(total[i]["category"]===category){
      return total[i];
    }
  }

  let newObj = { "category": category, "totalSpent": 0};
  total.push(newObj);
  return newObj;
}

//looping through the transactions array and summing up the categorical prices
function calculateTotalSpentByCategory(transactions) {
  let total = [];
  
  for(let i = 0; i < transactions.length; i++){
    let tr = transactions[i];

    let obj = findCategoryObject(tr["category"], total);
    obj["totalSpent"] += tr["price"];
    
    
  }

  return total;
}

module.exports = calculateTotalSpentByCategory;
