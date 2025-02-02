# Write code that asks the user for their name and determines whether or not you have the same name, print out a funny message based on the outcome.

my_name = "gabriel"
user_name = input("Type your name: ").lower()
if user_name == my_name:
    print("What a beautiful name!")
else:
    print("Wow, that's a hideous name!")