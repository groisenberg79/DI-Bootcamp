# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# wallet = "$300"

# items_purchase = {
#   "Apple": "$4",
#   "Honey": "$3",
#   "Fan": "$14",
#   "Bananas": "$4",
#   "Pan": "$100",
#   "Spoon": "$2"
# }
# wallet = "$100" 

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 

#first turn wallet string into integers
wallet_string = ""
for letter in wallet:
    if letter != "$" and letter != ",":
      wallet_string += letter
wallet = int(wallet_string)

#now turn values in each dict entry into an integer 
for item in items_purchase.keys():
  price_str = ""
  for letter in items_purchase[item]:
    if letter != "$" and letter != ",":
      price_str += letter
  items_purchase[item] = int(price_str)

# in order to add each bought item to the final list,
# create a list of (price, item) tuples (i.e. the order of
# the dict items is inverted) and order it according to 
# ascending prices
item_price_list = list(items_purchase.items())
inv_item_price_list = []
for member in item_price_list:
    inv_item_price_list.append((member[1], member[0]))
inv_item_price_list.sort()

# finally, compute the biggest set of items that
# can be bought without exceeding the wallet
money_spent = 0
final_list = []
for member in inv_item_price_list:
   if money_spent + member[0] > wallet:
      break
   else:
      final_list.append(member[1])
      money_spent += member[0]

print(inv_item_price_list)
print(items_purchase)
print(final_list)