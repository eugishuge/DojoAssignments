import java.util.*;
import java.util.Collection;
import java.util.Random;
import java.util.HashMap;

class Puzzling{
// Create an array with the following values: 3,5,1,2,7,9,8,13,25,32. Print the sum of all numbers in the array. Also have the function return an array that only includes numbers that are greater than 10 (e.g. when you pass the array above, it should return an array with the values of 13,25,32)
    public void SumNum(int[] arr, int y){
        int sum = 0;
        ArrayList<Integer> GT = new ArrayList<>();
        for (int i = 0; i < arr.length; i++){
            sum += arr[i];
            if (y < arr[i]) {
                GT.add(arr[i]);
            }
        }
        System.out.println(GT);
        System.out.println("Total Sum is: " + sum);
    }

    public void shuffle(String[] arr){
// Create an array with the following values: Nancy, Jinichi, Fujibayashi, Momochi, Ishikawa. Shuffle the array and print the name of each person. Have the method also return an array with names that are longer than 5 characters.
        ArrayList<String> shuffled = new ArrayList<>();
        for (int i = 0; i < arr.length; i++){
            shuffled.add(arr[i]);
        }
        Collections.shuffle(shuffled);
        System.out.println("Shuffled Array List: "+shuffled);

        ArrayList<String> high_name = new ArrayList<>();
        for (int j = 0; j < arr.length; j++){
            if(arr[j].length() > 5){
            high_name.add(arr[j]);
            }
        }
        System.out.println("All Names with more than 5 Characters: " +high_name);
    }
// Create an array that contains all 26 letters in the alphabet (this array must have 26 values). Shuffle the array and display the last letter of the array. Have it also display the first letter of the array. If the first letter in the array is a vowel, have it display a message
    public void alphabet (String[] arr){
        ArrayList<String> alpha_shuffle = new ArrayList<>();
        for (int i = 0; i < arr.length; i++){
            alpha_shuffle.add(arr[i]);
        }
        Collections.shuffle(alpha_shuffle);

        String[] new_alpha = new String[alpha_shuffle.size()];
        new_alpha = alpha_shuffle.toArray(new_alpha);

        if (new_alpha[0] == "a"|| new_alpha[0] == "e" ||new_alpha[0] == "i"||new_alpha[0] == "o"||new_alpha[0] == "u") {
            System.out.println("You ran into a vowel");
        }
        else{
            System.out.println(new_alpha[0]);
        }
        if (new_alpha[new_alpha.length-1] == "a"|| new_alpha[new_alpha.length-1] == "e" ||new_alpha[new_alpha.length-1] == "i"||new_alpha[new_alpha.length-1] == "o"||new_alpha[new_alpha.length-1] == "u") {
            System.out.println("You ran into a vowel");
        }
        else{
            System.out.println(new_alpha[new_alpha.length-1]);
        }
    }
// Generate and return an array with 10 random numbers between 55-100.
    public void random(){
        int[] numbers = new int[10];

        for (int i = 0; i < numbers.length; i++){
            numbers[i] = (int)(Math.random() * 45 + 55);
        }
        System.out.println(Arrays.toString(numbers));
    }

// Generate and return an array with 10 random numbers between 55-100 and have it be sorted (showing the smallest number in the beginning). Display all the numbers in the array. Next, display the minimum value in the array as well as the maximum value.
    public void random_sort(){
        int[] numbers = new int[10];
        ArrayList<Integer> numbers_sort = new ArrayList<>();
        for (int i = 0; i < numbers.length; i++){
            numbers[i] = (int)(Math.random() * 45 + 55);
            numbers_sort.add(numbers[i]);
        }
        Collections.sort(numbers_sort);
        System.out.println(numbers_sort);
    }
}
