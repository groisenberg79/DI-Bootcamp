# item 2
brand = {}
brand['name'] = 'Zara'
brand['creation_date'] = 1975
brand['creator_name'] = 'Amancio Ortega Gaona' 
brand['types_of_clothes'] = ['men', 'women', 'children', 'home']
brand['international_competitors'] = ['Gap', 'H&M', 'Benetton']
brand['number_stores'] = 7000
brand['major_color'] = {'France':['blue',], 'Spain':['red',], 'US':['pink', 'green']}
print(brand)
print()

# item 3
brand['number_stores'] = 2
print(f'now with 2 in number_stores: {brand}')
print()

# item 4
print(f"Zara caters to {brand['types_of_clothes'][0]}, {brand['types_of_clothes'][1]} and {brand['types_of_clothes'][2]}.")
print()

# item 5
brand['country_creation'] = 'Spain'
print(f'adding country_creation: Spain, we have: {brand} ')
print()

# item 6
if 'international_competitors' in brand.keys():
    brand['international_competitors'].append('Desigual')
print(f'adding Desigual to international_competitors, we get: {brand}')
print()

# item 7
del brand['creation_date']
print(f'after deleting creation_date: {brand}')
print()

# item 8
print(f"The last international competitor is {brand['international_competitors'][-1]}.")
print()

# item 9
print(brand['major_color']['US'])
print()

# item 10
print(f'lentgh of dict: {len(brand)}.')
print()

# item 11
print(list(brand.keys()))
print()

# item 12
more_on_zara ={'creation_date':1975, 'number_stores':10000 }

# item 13
brand.update(more_on_zara)
print(f'brand updated with creation_date and number_stores: {brand}')
print()

# item 14
print(f"now there are {brand['number_stores']} stores (and not 2).")
#the number_stores gor updated with the value of more_on_zara