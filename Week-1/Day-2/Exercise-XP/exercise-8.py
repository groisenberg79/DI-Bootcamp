#1. Write a loop that asks a user to enter a series of pizza toppings, when the user inputs ‘quit’ stop asking for toppings.
#2. As they enter each topping, print a message saying you’ll add that topping to their pizza.
#3. Upon exiting the loop print all the toppings on the pizza pie and what the total price is (10 + 2.5 for each topping).

list_of_toppings = []
while True:
    topping = input("Enter a pizza topping (enter 'quit' to finish the order): ").lower()
    if topping == 'quit':
        break
    else:
        list_of_toppings.append(topping)
        print("I'll add this topping to the pizza.")

price = 10
for n in list_of_toppings:
    price += 2.5
print(f"Your toppings: {list_of_toppings}")
print(f"Final price: {price} shekels.")
