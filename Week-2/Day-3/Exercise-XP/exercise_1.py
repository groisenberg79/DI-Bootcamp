class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self, money):
        return f"{money.amount} {money.currency}s"

    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f"{self.amount} {self.currency}s"

c1 = Currency('shekels', 12)
print(repr(c1))
