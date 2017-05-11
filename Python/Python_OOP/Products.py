class Product (object):
    def __init__ (self, price, item_name, weight, brand, cost, status="for sale"):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.cost = cost
        self.status = status
        self.tax = .06
    #
    # def sell(self):
    #     self.status = "sold"
    #     print self.status
    #     return self

    # def add_tax(self):
    #     self.price = self.price + (self.price * self.tax)
    #     print self.price
    #     return self

    def Return(self):
        if self.status == "defective":
            self.status = "Free to a Good Home"
            self.price = 0

            return self

        elif self.status == "used":
            self.status = "Discounted"
            self.price = ((self.price * (1+self.tax)) * .8)

            return self

        elif self.status == "unopened":
            self.status = "For Sale"
            return self

    def display_all(self):
        self.Return()
        print "Price: ", self.price
        print "Item Name: ",self.item_name
        print "Weight: ", self.weight
        print "Brand: ", self.brand
        print "Cost: ", self.cost
        print "Status: ",self.status

        return self

item1 = Product(100, "Shakeweight","10lbs","Fitness Inc.", 50, "unopened")
item1.display_all()
