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
    def __init__(self, cards): # cards is a list of objects of type Card
        self.cards = cards
    
    def shuffle(self):
        # create the base card list with which cards will be compared
        card_base = list()
        for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']:
            for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
                card_base.append(Card(suit, value))
        # check if there is any card missing (I'm assuming there are no
        # card repetitions and only valid cards are supplied by the user)
        missing_cards = list()
        for b_card in card_base:
            is_in_deck = 0
            for card in cards:
                if b_card.suit == card.suit and b_card.value == card.value:
                    is_in_deck += 1
                    break
            if is_in_deck == 0:
                missing_cards.append(b_card)

        if missing_cards != []:
            print("The following cards are missing:")
            for card in missing_cards:
                print(f"{card.value} of {card.suit}")
            pass
        # shuffle the cards randomly and return the shuffeld deck
        return random.shuffle(self.cards)
    
    def deal(self):
        # check if there are any cards to be dealt
        if self.cards == []:
            print("The deck is empty.")
            pass
        else:
        # remove the top card from deck and return it to the user
            return self.cards.pop()
            
# >>>>>> TESTING THE CODE
# cards = list()
# for suit in ['Hearts', 'Diamonds', 'Clubs', 'Spades']:
#             for value in ['A','2','3','4','5','6','7','8','9','10','J','Q','K']:
#                 cards.append(Card(suit, value))
# deck = Deck(cards)
# print("Printing unshuffeld deck:\n")
# for card in deck.cards:
#     print(f"{card.value} of {card.suit}")
# print()    

# deck.shuffle()
# print(f"Printing shuffled deck:\n")
# for card in deck.cards:
#     print(f"{card.value} of {card.suit}")
# print() 

# deal = deck.deal()
# print(f"Your card: {deal.value} of {deal.suit}")
# print("Now there must be one card missing!")
# deck.shuffle()
# print(f"Let's take out the following card: {cards[1].value} of {cards[1].suit}.")
# cards.remove(cards[1])
# print("Now there must be two cards missing!")
# deck.shuffle()
