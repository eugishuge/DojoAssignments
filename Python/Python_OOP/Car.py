class Car(object):
    def __init__(self, Price, Speed, Fuel, Mileage):
        self.Price = Price
        self.Speed = Speed
        self.Fuel = Fuel
        self.Mileage = Mileage
        self.Tax = 0.12
        # if self.Price > 10000:
        #     self.tax = .15
        # else:
        #     self.tax = .12

    def display_all(self):
        if self.Price > 10000:
            self.Tax = 0.15
        print "Price: ", str(self.Price)
        print "Speed: ", str(self.Speed)
        print "Fuel: ", str(self.Fuel)
        print "Mileage: ", str(self.Mileage)
        print "Tax: ", str(self.Tax)
        print "------------------------------"

Car1 = Car(2000, "35mph", "Full", "15mpg")
Car1.display_all()

Car2 = Car(2000, "5mph", "Not Full", "105mpg")
Car2.display_all()

Car3 = Car(2000, "15mph", "Kind of Full", "95mpg")
Car3.display_all()

Car4 = Car(2000, "45mph", "Empty", "95mpg")
Car4.display_all()

Car5 = Car(2000000000, "35mph", "Empty", "15mpg")
Car5.display_all()
