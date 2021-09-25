// A mock function to mimic making an async request for data - this will probably become an actual API call when an API is setup
export function fetchShoppingList() {
    return {
        data: [
            'iPhone 13', 
            'iPad mini 6'
        ]
    }
}

export function fetchEmptyShoppingList() {
    return {
        data: []
    }
}
  
