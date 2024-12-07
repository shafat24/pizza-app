
# 🍕 Pizza Order Management System (TypeScript)

A simple pizza ordering and management system built with **TypeScript** to demonstrate mastery of key TypeScript concepts like types, utility types, unions, type narrowing, and more. This project simulates adding pizzas to a menu, placing orders, and completing them while keeping track of cash in the register and order details.

---

## **🚀 Features**
- Manage a dynamic pizza menu with unique IDs.
- Place and complete orders with real-time status updates.
- Retrieve pizza details by name or ID using TypeScript type narrowing.
- Demonstrates the use of utility types like `Omit`.
- Comprehensive error handling ensures type safety.

---

## **📚 What I Learned**
### 1️⃣ **Basic Literals and Custom Types**
- Defined reusable types for `Pizza` and `Order` using `type`.
- Represented properties like `status` with **string literal types** for stricter control.

```typescript
type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed" // Union type
}
```

---

### 2️⃣ **Optional Properties**
- Utilized optional properties (though not in this project) to make some fields non-mandatory when defining types.

---

### 3️⃣ **Unions**
- Allowed functions to accept multiple types for parameters using unions.

```typescript
function getPizzaDetail(identifier: string | number): Pizza | undefined {
    // Type narrowing ensures accurate behavior based on identifier type
}
```

---

### 4️⃣ **Type Narrowing**
- Used **type guards** (`typeof`) to handle different cases in functions safely.

```typescript
if (typeof identifier === "string") {
    return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
} else if (typeof identifier === "number") {
    return menu.find(pizza => pizza.id === identifier)
}
```

---

### 5️⃣ **Utility Types**
- Used the `Omit` utility type to exclude the `id` field when adding new pizzas to the menu.

```typescript
function addNewPizza(pizzaObj: Omit<Pizza, "id">): Pizza {
    const newPizza: Pizza = { id: nextPizzaId++, ...pizzaObj }
    menu.push(newPizza)
    return newPizza
}
```

---

### 6️⃣ **Generics**
- While not used in this project, I explored how generics allow for reusable and flexible code structures.

---

## **🛠 How It Works**
1. **Adding New Pizzas:** Dynamically add pizzas to the menu with automatically assigned IDs.
2. **Placing Orders:** Select pizzas from the menu, place orders, and update cash in the register.
3. **Completing Orders:** Mark orders as "completed" by their unique order ID.
4. **Retrieving Pizza Details:** Fetch pizza information by name or ID with a single utility function.

---

## **👨‍💻 Usage**
1. Clone this repository:
    ```bash
    git clone <repo_url>
    cd <project_directory>
    ```

2. Install dependencies (if applicable):
    ```bash
    npm install
    ```

3. Run the TypeScript file:
    ```bash
    npx ts-node index.ts
    ```

---

## **📊 Output**
- **Menu**: Displays all pizzas with their IDs, names, and prices.
- **Cash in Register**: Shows the current total cash.
- **Order Queue**: Lists all orders with their status (`ordered` or `completed`).

---

## **📝 Future Enhancements**
- Add support for updating menu items.
- Implement user authentication for placing orders.
- Build a frontend for the pizza ordering system using React with TypeScript.

---

Feel free to contribute or fork this repository for your own learning! 🚀

---

Let me know if you'd like me to add or refine anything! 😊
