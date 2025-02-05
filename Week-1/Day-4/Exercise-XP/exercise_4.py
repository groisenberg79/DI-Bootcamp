def extra_random(number):
    import random
    another_random = int(random.random()*100)
    if another_random == number:
        print("You have selected the correct number!")
    else:
        print("Wrong number ...")
        print(f"Your number: {number}")
        print(f"Correct number: {another_random}")

extra_random(53)