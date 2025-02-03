#1. Ask the user to input their favorite fruit(s) (one or several fruits).
#2. Store the favorite fruit(s) in a list (convert the string of words into a list of words).
#3. Now that we have a list of fruits, ask the user to input a name of any fruit.
#--If the user’s input is in the favorite fruits list,
#print “You chose one of your favorite fruits! Enjoy!”.
#--If the user’s input is NOT in the list, print,
#“You chose a new fruit. I hope you enjoy”.

# item 1:
fruits = input("type your favorite fruits (separate each fruit with a single space):").lower()

# item 2:
list_of_fruits = fruits.split()

# item 3:
new_fruit = input("now type the name of any fruit: ").lower()
flag = 0
for fr in list_of_fruits:
    if new_fruit == fr:
        flag = 1
if flag == 1:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")