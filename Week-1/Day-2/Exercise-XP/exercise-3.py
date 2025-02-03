# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.
# Remove “Blueberries” from the list.
# Add “Kiwi” to the end of the list.
# Add “Apples” to the beginning of the list.
# Count how many apples are in the basket.
# Empty the basket.
# Print(basket)

print()
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
print(f"the original basket: {basket}\n")

basket.remove("Banana")
print(f"after removing Banana: {basket}\n") 

basket.remove("Blueberries")
print(f"after removing Blueberries: {basket}\n")

basket.append("Kiwi")
print(f"after adding Kiwi to the end of the basket: {basket}\n")

basket.insert(0, "Apples")
print(f"after adding Apples to the beginning of the basket: {basket}\n")

apples = basket.count("Apples")
print(f"number of Apples in the basket: {apples}\n")

basket.clear()
print(f"how the basket looks like after emptying it: {basket}\n")








