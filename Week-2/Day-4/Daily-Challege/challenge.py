import string

class Text:
    def __init__(self, text):
        self.text = text

    def text_list(self):
        text_list = self.text.strip(string.punctuation).lower().split()
        return text_list

    def frequency(self, word):
        text_list = self.text_list()
        count = 0
        for item in text_list:
            if item == word:
                count += 1
        if count == 0:
            print(f"No occurances of {word}")
            return 0
        else:
            return count
    
    def highest_freq(self):
        text_list = self.text_list()
        highest = [text_list[0], self.frequency(text_list[0])]
        for item in text_list:
            if item == highest[0]:
                pass
            else:
                count = self.frequency(item)
                if count > highest[1]:
                    highest = [item, count]
        return highest[0]
    
    def unique_words(self):
        unique = []
        text_list = self.text_list()
        for item in text_list:
            if self.frequency(item) == 1:
                unique.append(item)
            else:
                pass
        return unique
    
    @classmethod
    def from_file(cls, file):
        with open(file, 'r') as f:
            text = f.read()
        return Text(text)
    

# >>>>>>>>> TESTING THE CODE part I

# text = Text("A good book would sometimes cost as much as a good house.")
# print(text.frequency("good"))
# print(text.frequency("good"))
# print(text.frequency("much"))
# print(text.frequency("what"))
# print(text.highest_freq())
# print(text.unique_words())

# >>>>>>>>> TESTING THE CODE part II
# Obviously, I did not use the frequency method for this file
# because it would take a very, very long time to obtain the result.
# We would have to write a much more efficient algorithm to make it work.
# Either that or get a better computer!

big_text = Text.from_file("the_stranger.txt")
print(big_text.frequency("stranger"))
print(big_text.frequency("solitude"))
print(big_text.frequency("hands"))

