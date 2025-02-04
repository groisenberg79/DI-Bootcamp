# A movie theater charges different ticket prices depending on a person’s age.
# if a person is under the age of 3, the ticket is free.
# if they are between 3 and 12, the ticket is $10.
# if they are over the age of 12, the ticket is $15.

# Given the following object:

# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}


# How much does each family member have to pay ?

# Print out the family’s total cost for the movies.
# Bonus: Ask the user to input the names and ages instead of using the provided family variable (Hint: ask the user for names and ages and add them into a family dictionary that is initially empty).

family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
for member in family.keys():
    if family[member] >= 3 and family[member] <= 12:
        price += 10
    elif family[member] > 12:
        price += 15
print(f"The total price is {price} shekels.")
print()

# bonus item

# construct the new family dictionary
family = {}
while True:
    member = input("Please type the name and the age of a family member separated by space (type 'quit' to stop'): ")
    if member.lower() == 'quit':
        break
    else:
        member = member.split()
        family[member[0]] = int(member[1])
print()
print(f"The new family is {family}")
#give the price for the new family
price = 0
for member in family.keys():
    if family[member] >= 3 and family[member] <= 12:
        price += 10
    elif family[member] > 12:
        price += 15
print(f"The total price for this new family is {price} shekels.")
print()
