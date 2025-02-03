#1. A movie theater charges different ticket prices depending on a person’s age.
#-- if a person is under the age of 3, the ticket is free.
#-- if they are between 3 and 12, the ticket is $10.
#-- if they are over the age of 12, the ticket is $15.
#2. Ask a family the age of each person who wants a ticket.
#3. Store the total cost of all the family’s tickets and print it out.
#4. A group of teenagers are coming to your movie theater and 
#want to watch a movie that is restricted for people 
#between the ages of 16 and 21.
#Given a list of names, write a program that asks teenager for 
#their age, if they are not permitted to watch the movie, 
#remove them from the list.
#At the end, print the final list.

#items 1, 2 & 3 of the exercise

list_of_ages = []
while True:
    age = input("Enter the age of a family member who wants a ticket (type 'quit' to stop): ").lower()
    if age == "quit":
        break
    else:
        list_of_ages.append(age)
price = 0
for age in list_of_ages:
    if int(age) >= 3 and int(age) <= 12:
        price += 10
    elif int(age) > 12:
        price += 15
print(f"The total price is {price} shekels.")
print()

# item 4 of the exercise

list_of_names = ['Bill', 'John', 'Mary', 'Bob']
list_of_names_copy = ['Bill', 'John', 'Mary', 'Bob']
for name in list_of_names_copy:
    age_of_teen = int(input(f"What's your age, {name}? "))
    if age_of_teen < 16 or age_of_teen > 21:
        list_of_names.remove(name)
print(f"This is the list of kids who can watch the movie: {list_of_names}")
