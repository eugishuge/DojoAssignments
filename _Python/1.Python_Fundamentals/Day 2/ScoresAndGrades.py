import random
def grades(random_num):
    for x in range (0,10):
        random_num = random.randint(60,101)
        # print random_num
        if(random_num >= 60 and random_num <=69):
            print "Score:", random_num, "Your grade is a D"
        elif (random_num >= 70 and random_num <=79):
            print "Score:", random_num, "Your grade is a C"
        elif (random_num >= 80 and random_num <=89):
            print "Score:", random_num, "Your grade is a B"
        elif (random_num >= 90 and random_num <=100):
            print "Score:", random_num, "Your grade is an A"
grades (random.randint(60,101))
