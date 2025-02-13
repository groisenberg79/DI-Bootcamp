import game

scoreboard = {'win': 0, 'loss': 0, 'draw': 0}

def get_user_menu_choice():
    print("Main menu:\n")
    print("(g) Play a new game")
    print("(q) Show scores and quit\n")
    user_choice = input("> ").lower().lstrip().rstrip()
    if user_choice in ['g', 'q']:
        return user_choice
    else:
        return -1

def print_results(results):
    print("GAME RESULTS:\n")
    print(f"You lost {results['win']} times")
    print(f"You lost {results['loss']} times")
    print(f"You drew {results['draw']} times\n")
    print(f"Thanks for playing!")

def main():
    user_choice = get_user_menu_choice()
    if user_choice == 'g':
        new_game = game.Game()
        result = new_game.play()
        scoreboard[result] += 1
        main()
    elif user_choice == 'q':
        print_results(scoreboard)
        pass
    else:
        print('\nInvalid choice\n')
        main()

main()

