First Step
    We need to find the material type that can either be angle, flat bar, or channel
        once we have that we need to find the size of the welds that for now we will ignore that 
        and just focus on the algorythem for now we can just put a choice between weld lengths being
        3,4,5,or 6

Second Step
    we are going to need several inputs for the two legs left and right, top web if needed,
    bottom web if needed, bearing/cooler bar, and support bar.
        once we have that info we can then store it into a var

Third step
    so the standard weld pattern starts at 3 on the outside and 2 on the inside for 
    everything but the bearing/cooler bar and the support bar. those start with 2 on one side and 1 on the otherside.

        first thing we check for with every individual input from the second step if they were avalible. what we do 
        for the left and right leg, top web, and bottom web is add the lengths of the welds up which in this case 
        there will be 5 by default. then we take that number and divide it by 4 which should give us the distance 
        between the welds for those parts. now for these parts we have to handle if the indicidual part is up to 
        standard.
        with the information we have we can determain if we need to add or subtract welds and we always add or subtract by twos.
        first we check if the length of the welds together is greater than the length of the part. if it is then we subtract the 
        number of welds by 2 and do the algorithm again. if not then we check if the distance between the welds is greater than 
        30 inches. if it is greater we would then need to add 2 more welds and check again and if its still greater than 30 we 
        will add another 2 welds till it is no longer greater than 30

        second comes the bearing/cooler bar for this part there will never be fewer than 3 welds. but if the welds are greater
        than 30 inches apart then we will need to add one weld until it is no longer over 30 inches

        now for the support bar. for this we start at 3 just like the bearing bar if the distance between the welds are equal
        to or less than 9 we will subtract a weld. if its greater than 9 it will remain 3. if it is greater than 30 we will add
        2 more welds till its no longer greater than 30 inches
# FrameweldCal
