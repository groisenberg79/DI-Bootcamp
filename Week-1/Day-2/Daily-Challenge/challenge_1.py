number = int(input("Type a number (integer): "))
length = int(input("Type a length (integer): "))

list_of_multiples = []
for n in range(1, length + 1):
    list_of_multiples.append(n * number)
print(list_of_multiples)