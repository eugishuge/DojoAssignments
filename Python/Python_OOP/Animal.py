class Animal (object):
    def __init__ (self, name, health=100):
        self.name = name
        self.health = health

    def walk(self):
        self.health -= 1
        # print self.health
        return self

    def run (self):
        self.health -=5
        # print self.health
        return self

    def display_health(self):
        print "Name: ", self.name
        print "Health: ", self.health
        return self

elephant = Animal("Elephant", 100)
elephant.walk().walk().walk().run().run().display_health()

class Dog (Animal):
    def __init__(self, name, health=150):
        super(Dog,self).__init__(name, health=150)
    def pet(self):
        self.health += 5
        return self

dog1 = Dog("Dog")
dog1.walk().walk().walk().run().run().pet().display_health()

# class Dragon(Animal):
#     def __init__(self,name,health=170):
#         self.name = name
#         self.health = health
#
#     def fly(self):
#         self.health -= 10
#         # print self.health
#         return self
#
#     def display_health_Drag(self):
#         print "This is a Dragon!"
#         self.display_health()
#         return self
#
# Dragon1 = Dragon("Drago")
# Dragon1.fly().display_health_Drag()
