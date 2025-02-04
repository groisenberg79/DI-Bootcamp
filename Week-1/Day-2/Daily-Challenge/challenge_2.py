crazy_word = input("Type any string: ")
list_of_letters = []
for letter in crazy_word:
    list_of_letters.append(letter)

no_repetition_list = [list_of_letters[0]]
for i in range(len(list_of_letters) - 1):
    if list_of_letters[i] != list_of_letters[i + 1]:
        no_repetition_list.append(list_of_letters[i + 1])

print(''.join(no_repetition_list))
