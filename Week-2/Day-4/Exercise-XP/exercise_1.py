from random import choice

def get_words_from_file():
    f = open("C:/Users/grois/OneDrive/Desktop/DI-Bootcamp/Week-2/Day-4/Exercise-XP/word_source.txt")
    word_list = f.readlines()
    return word_list

def get_random_sentence(length):
    word_list = get_words_from_file()
    sentence = ""
    for i in range(length):
        if i == length - 1:
            sentence += choice(word_list).replace("\n", ".")
        else:
            sentence += choice(word_list).replace("\n", " ")
    return sentence.capitalize()

def main():
    print("This program generates a random sentence.")
    length = int(input("Enter the length of the sentence (min length: 2; max length: 22): "))
    if length < 2 or length > 22:
        print("Invalid length!\nAs a punishment for this offense, we shall terminate the program!")
    else:
        random_sentece = get_random_sentence(length)
        print(random_sentece)

main()

