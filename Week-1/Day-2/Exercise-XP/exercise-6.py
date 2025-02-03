#Write a while loop that will continuously ask the user
#for their name, unless the input is equal to your name.

while True:
    answer = input("What is your name?").lower()
    if answer == "gabriel":
        break
