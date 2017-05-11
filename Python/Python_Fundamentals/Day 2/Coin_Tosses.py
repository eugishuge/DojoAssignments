import random

def CoinToss():
    attempt = 0
    hcount = 0
    tcount = 0

    for x in range (0,5000):
        coin_toss = random.random()
        # print coin_toss
        coin_toss = round(coin_toss)
        # print coin_toss
        if (coin_toss ==0):
            attempt += 1
            hcount +=1
            print "Attempt #", attempt, ":", "Throwing a coin... It's a Heads!... Got", hcount, "so far and", tcount, "so far"

        elif (coin_toss ==1):
            attempt += 1
            tcount +=1
            print "Attempt #", attempt, ":", "Throwing a coin... It's a Tails!... Got", hcount, "so far and", tcount, "so far"
CoinToss()
