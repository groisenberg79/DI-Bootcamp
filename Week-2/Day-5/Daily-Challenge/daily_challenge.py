# OOP Quiz
#
# -- Definition of Class: in Python, a class is a user-defined type
# endowed with attributes and methods -- i.e. a data structure. 
# In practice, they function as an abstraction for "real world" objects.
#
# -- Definition of Instance: an instance of a class is the actual realization 
# of that class as a unique object belonging to that class, having
# its atribute values initialized.
#
# -- Definition of Encapsulation: encapsulation is the processes of wrapping
# together attributes and methods into a single unit (an object), thus retricting
# user access to the internal state of the object (it must always be mediated 
# by the methods associeated with the class).
#
# -- Definition of Abstraction: abstraction is the process of representing 
# features of a given "object" (here in the more general sense of the word)
# through an interface with the user hiding the actual algorithmic implementation.
# 
# -- Definition of Inheritance: an object O of a class C inherits attributes and
# methods if O is endowed with such attributes/methods by virtue C being 
# a subclass of another class C' that has these attributes and methods.
# 
# -- Definition of Multiple Inheritance: multiple inheritance is the property
# a class has of inheriting attributes and methods from multiple parent classes.
#
# -- Definition of Polymorphism: polymorphism is a property of OOP languages
# that allows the same interface (in Python, methods) to apply to objects of 
# different types.
#
# -- Definition of Method Resolution Order (MRO): MRO is the strategy used by
# Python to define which definition of a given method is chosen when the same
# method name is used in two or more classes belonging to 
# a shared class hierarchy.

# >>>>>> PART 2
import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self, cards): # cards is a set of objects of type Card
        self.cards = cards
    
    def shuffle(self, cards):
        # create the base card set with which cards will be compared
        card_base = set()
        for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']:
            for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
                card_base.add(Card(suit, value))

        # see if there are more cards than allowed and check if they are 
        # repetiions or alien cards

        # shuffle the cards randomly

    def deal(self):
        pass
        # deals a single card from the deck. 
        # After a card is dealt, it should be removed from the deck.
            
        