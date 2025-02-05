# items 1-3
def make_shirt(size, text):
    print(f"The size of the shirt is {size} and the text is '{text}'")
make_shirt("L", "Hello there!")

# item 4-5
def make_shirt(size="L", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{text}'")
make_shirt()

# item 6
make_shirt("M")

# item 7
make_shirt("S", "Python is ok ...")

