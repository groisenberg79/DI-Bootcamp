from menu_item import MenuItem
from menu_manager import MenuManager


def show_user_menu():
    print("\n**** Main Menu ****\n")
    print("View an Item (V)\n"
        "Add an Item (A)\n"
        "Delete an Item (D)\n"
        "Update an Item (U)\n"
        "Show the Menu (S)\n"
        "Exit the Menu (X)\n")
    usr_choice = input('What would you like to do? ').lower().strip()

    if usr_choice not in ['v', 'a', 'd', 'u', 's', 'x']:
        print('Invalid choice.')
        show_user_menu()

    elif usr_choice == 'v':
        usr_item = input('Type the name of a menu item: ').lower().strip()
        result = MenuManager.get_by_name(usr_item)
        if result == None:
            print('This item is not on the menu.')
            show_user_menu()
        else:
            print(f"name: {result.name}| price: $ {result.price}")
            show_user_menu()
    
    elif usr_choice == 'a':
        add_item_to_menu()
        show_user_menu()

    elif usr_choice == 'd':
         remove_item_from_menu()
         show_user_menu()
    
    elif usr_choice == 'u':
        update_item_from_menu()
        show_user_menu()

    elif usr_choice == 's':
        show_restaurant_menu()
        show_user_menu()
    else:
        pass

def add_item_to_menu():
    name = input('Type the name of the food item: ').lower().strip()
    price = input('Type the price of the food item '
                  '(positive integer): ').strip()
    if price.isdecimal():
        item = MenuItem(name, int(price))
        item.save()
        print('Item was added successfully.')
    else:
        print('Invalid price (must be a positive integer).')

def remove_item_from_menu():
    usr_item = input('Type the name of the food item'
                     ' to be removed: ').lower().strip()
    query_result = MenuManager.get_by_name(usr_item)
    if query_result == None:
        print("Can't remove item: item not in the menu.")
    else:
        query_result.delete()
        print('Item removed successfully.')
    
def update_item_from_menu():
    old_name = input('Type the name of the item'
                     ' to be updated: ').lower().strip()
    old_price = input('Type the price of the item'
                     ' to be updated: ').strip()
    query_result = MenuManager.get_by_name(old_name)

    if query_result == None:
        print("Can't update item: item not in the menu.")
    elif not old_price.isdecimal():
        print('Invalid price (must be a positive integer).')
    elif query_result.price != int(old_price):
        print("Can't update item: no item with input price.")
    else:
        new_name = input('Type a new name for item: ').lower().strip()
        new_price = input('Type a new price for item: ').strip()
        query_result.update(new_name, new_price)
        print('Item updated successfully.')

def show_restaurant_menu():
    menu_list = MenuManager.all_items()
    print('\n*Menu*\n')
    for item in menu_list:
        print(f'item: {item.name}| price: $ {item.price}')
    
show_user_menu()