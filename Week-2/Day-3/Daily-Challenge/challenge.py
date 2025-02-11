import math

class Circle():
    def __init__(self, radius):
        self.radius = radius
        self.diameter = 2*self.radius

    def area(self):
        return math.pi*(self.radius**2)

    def __str__(self):
        return f"radius: {self.radius}, diameter: {self.diameter}"
    
    def __add__(self, other):
        new_circle = Circle(self.radius + other.radius)
        return new_circle

    def __gt__(self, other):
        if self.radius > other.radius:
            return True
        else:
            return False
        
    def __eq__(self, other):
        if self.radius == other.radius:
            return True
        else:
            return False

    def order(self, other):
        if self.__gt__(other) or self.__eq__(other):
            return [self, other]
        else:
            return [other, self]


# >>>>>> TESTING THE CODE
circle1 = Circle(4)
circle2 = Circle(5)
print(circle1.area())
print(circle1)
print(circle1 + circle2)
print(circle1 > circle2)
print(circle1 == circle2)
print(circle1.order(circle2))

