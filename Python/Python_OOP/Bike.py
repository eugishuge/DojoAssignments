class Bike(object):
    def __init__ (self, price, max_speed, miles=0):
        self.price = price
        self.max_speed = max_speed
        self.miles = miles
    def displayInfo(self):
        print self.price, self.max_speed, self.miles
        return self

    def ride(self):
        var = 0
        self.miles = var + self.miles
        print "Riding", self.miles
        return self

    def reverse(self):
        self.miles -= 5
        print "Reversing",abs(self.miles)
        return self

Bike1 = Bike(200,"25mph",10)
# Bike1.ride().ride().ride().reverse()
Bike1.displayInfo()
