import string, anagram_checker

def main():
    print("Welcome to the Anagram Generator!\n")

    while True:
        word = input("Type a word to find its anagrams or type 0 to exit: ")
        word = word.lstrip().rstrip()
        if word == '0':
            print("Goodbye!")
            break
        elif len(word.split()) > 1:
            print("\nInvalid input: You can only type one word.\n")
            pass
        else:
            invalid_char = string.punctuation + string.digits
            is_invalid = False
            for letter in word:
                if letter in invalid_char:
                    is_invalid = True
                    print(f"\nInvalid input '{letter}': no digits or special characters allowed.\n")
                    break
            
            with open('sowpods.txt', 'r') as f:
                text_file = f.read()
            anagram_base = anagram_checker.AnagramChecker(text_file)
            if anagram_base.is_valid_word(word):
                print(f"\nYour word: {word.lower()}\nThis is a valid English word.")
                anagrams = anagram_base.get_anagrams(word)
                print("Anagrams for your word: ", end="")
                for item in anagrams:
                    if anagrams.index(item) == len(anagrams) - 1:
                        print(f"{item.lower()}.\n")
                    else:
                        print(f"{item.lower()},", end="")
            elif is_invalid:
                pass
            else:
                print("\nNot a valid English word.\n")
                pass

main()