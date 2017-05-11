x = [4,6,1,3,5,7,25]
def draw_stars(x):
    count = 0
    for val in x:
        stars = ''
        for y in range (0, val):
            stars += '*'
        print stars
draw_stars(x)

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
def new_draw_stars(x):
    for val in range (0, len(x)):
        # print val
        if type(x[val]) == int:
            print "*" * x[val]
        elif type(x[val]) == str:
            print x[val][0].lower() * len(x[val])
new_draw_stars(x)
