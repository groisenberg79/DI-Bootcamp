# item 1
def get_random_temp():
    import random
    return random.randrange(-10, 41)
print(f"Today the temperature is {get_random_temp()} degrees Celsius.")

# item 2
def main():
    temp = get_random_temp()
    print(f"Today the temperature is {temp} degrees Celsius.")
main()

# item 3
def main():
    temp = get_random_temp()
    print(f"Today the temperature is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp >= 0 and temp < 16:
        print("Quite chilly! Don't forget your coat")
    elif temp >= 16 and temp <= 23:
        print("That's a plesant temperature. No need for coat today.")
    elif temp >= 24 and temp < 32:
        print("Ok, this is actually a hot day. Bring some water with you.")
    else:
        print("Wow, this is a stinking hot day! Try not wearing clothes today.")
main()

# item 4
def get_random_temp (season):
    import random
    if season.lower() == "winter":
        return random.randrange(-10, 17)
    elif season.lower() == "spring":
        return random.randrange(17, 32)
    elif season.lower() == "summer":
        return random.randrange(32, 40)
    elif season.lower() == "fall":
        return random.randrange(17,32)
    
# item 3
def main():
    season = input("Please enter the current season: ")
    temp = get_random_temp(season)
    print(f"Today the temperature is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp >= 0 and temp < 16:
        print("Quite chilly! Don't forget your coat")
    elif temp >= 16 and temp <= 23:
        print("That's a plesant temperature. No need for coat today.")
    elif temp >= 24 and temp < 32:
        print("Ok, this is actually a hot day. Bring some water with you.")
    else:
        print("Wow, this is a stinking hot day! Try not wearing clothes today.")
main()