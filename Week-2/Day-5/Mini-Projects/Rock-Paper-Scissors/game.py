import random

class Game:
    def get_user_item(self):
        choices = ['r', 'p', 's']
        while True:
            user_item = input("Select (r)ock, (p)aper or (s)cissors: ").lower()
            if  user_item in choices:
                return  user_item
            else:
                print("Invalid option.\n")

    def get_computer_item(self):
        choices = ['r', 'p', 's']
        computer_item = random.choice(choices)
        return computer_item
    
    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return 'draw'
        if user_item == 'p' and computer_item == 'r':
            return 'win'
        if user_item == 'p' and computer_item == 's':
            return 'loss'
        if user_item == 'r' and computer_item == 's':
            return 'win'
        if user_item == 'r' and computer_item == 'p':
            return 'loss'
        if user_item == 's' and computer_item == 'p':
            return 'win'
        if user_item == 's' and computer_item == 'r':
            return 'loss'
        
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        game_result = self.get_game_result(user_item,computer_item)
        print(f"\nYou chose: {user_item}. The computer chose: {computer_item}.")
        if game_result == 'win':
            print("You won.")
            return game_result
        elif game_result == 'loss':
            print("You lost! Hahaha!")
            return game_result
        else:
            print("It's a draw.")
            return game_result
    

