# 1. Recap – What is a float? 
# What is the difference between an integer and a float?
# 2. Create a list containing the following sequence of floats
# and integers (it should be a list with mixed types): 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).
# 3. Can you think of another way to generate a sequence of floats?

#1. Answer: a float is a (finite) decimal number that represents
# either rational numbers or real numbers (but with limited precision, obviously).


list_of_numbers = []
number = 1.5
while number <= 5:
    list_of_numbers.append(number)
    if type(number) == float:
        number = int(number + 0.5)
    else:
        number += 0.5
print(list_of_numbers)

# 3. Answer: yes, using a for loop:

list_of_numbers = []
number = 1.5
for x in range(8):
    list_of_numbers.append(number)
    if type(number) == float:
        number = int(number + 0.5)
    else:
        number += 0.5
print(list_of_numbers)