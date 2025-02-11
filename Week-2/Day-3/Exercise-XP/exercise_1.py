class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f"{self.amount} {self.currency}s"
    
    def __add__(self, money):
        if type(money) == int:
            return self.amount + money
        elif type(money) == Currency:
            if self.currency != money.currency:
                raise TypeError(f"Can't add currency type {self.currency} with {money.currency}")
            else:    
                return self.amount + money.amount

    def __iadd__(self, money):
        self.amount = self.__add__(money)
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)