# Write code that asks the user for a number and determines whether this number is odd or even.

user_number = input("Type a number: ")
if int(user_number)%2 == 0:
    print(f"{user_number} is an even number.")
else:
    print(f"{user_number} is an odd number.")