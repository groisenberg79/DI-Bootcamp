class AnagramChecker:
    def __init__(self, text_file):
        self.correct_words = text_file

    def is_valid_word(self, word):
        pos = self.correct_words.find(word.upper())
        if pos == -1:
            return False
        else:
            return True
    # helper function that creates a dictionary of entries 
    # <'letter': number of occurances> for any given word
    @staticmethod
    def letter_dict(word):
        list_of_letters = list(word.upper())
        letter_dictionary = dict()
        index = 1
        for letter in list_of_letters:
            if letter not in letter_dictionary.keys():
                letter_dictionary[letter] = index
            else:
                letter_dictionary[letter] += 1
        return letter_dictionary

    @staticmethod
    def is_anagram(word1, word2):
        if word1.upper() == word2.upper():
            return False
        else:
            if AnagramChecker.letter_dict(word1.upper()) == AnagramChecker.letter_dict(word2.upper()):
                return True
            else:
                return False
                    
    def get_anagrams(self, word):
        list_anagrams = list()
        if self.is_valid_word(word.upper()):
            words_list = self.correct_words.split('\n')
            for item in words_list:
                if AnagramChecker.is_anagram(item, word.upper()):
                    list_anagrams.append(item)
            return list_anagrams
        else:
            return -1

# >>>>>>> TESTING THE CODE

# with open('sowpods.txt', 'r') as f:
#     text_file = f.read()
# anagram_base = AnagramChecker(text_file)
# print(anagram_base.is_valid_word("meat"))
# print(anagram_base.get_anagrams("meat"))
        