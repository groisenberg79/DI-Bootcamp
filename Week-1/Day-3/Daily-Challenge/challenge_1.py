word = input("Type any word: ").lower()

list_of_letters = []
for letter in word:
    list_of_letters.append(letter)

letter_dictionary = {}
index = 0
for letter in list_of_letters:
    if letter not in letter_dictionary.keys():
        letter_dictionary[letter] = [index]
    else:
        letter_dictionary[letter].append(index)
    index += 1
print(letter_dictionary)
