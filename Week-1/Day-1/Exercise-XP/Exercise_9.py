# Write code that will ask the user for their height in centimeters.
# If they are over 145cm print a message that states they are tall enough to ride.
# If they are not tall enough print a message that says they need to grow some more to ride.

user_height = int(input("Please type your height in centimeters: "))
if user_height > 145:
    print("You are tall enough to ride.")
else:
    print("Sorry, but you need to grow some more to ride.")