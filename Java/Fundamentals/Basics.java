import java.util.ArrayList;
import java.util.*;


class Basics{
    public void twofiftyfive(){
        for (int i = 0; i<=255; i++){
            System.out.println(i);
        }
    }
    public void oddtwofiftyfive(){
        for (int i = 0; i <=255; i++){
            if(i % 2 == 1){
                System.out.println(i);
            }
        }
    }
    public void sum(){
        int sum = 0;
        for (int i = 0; i<=255; i++){
            sum = i + sum;
            System.out.println("Number is: "+ i);
            System.out.println("New Sum is " + sum);        }
    }

    public void Iterate(){
        int[] arr;
        arr = new int[5];
        arr[0] = 7;
        arr[1] = 54;
        arr[2] = 14;
        arr[3] = 10;
        arr[4] = 9;
        for (int i =0; i<arr.length; i++){
            System.out.println(arr[i]);
        }
    }

    public void findmax(){
        int[] arr;
        arr = new int[5];
        arr[0] = 12;
        arr[1] = 35;
        arr[2] = 67;
        arr[3] = 10;
        arr[4] = 9;

        int max = 0;
        for (int i = 0; i < arr.length; i++){
            if(arr[i] > max){
                max = arr[i];
            }
        }
        System.out.println(max);
    }

    public void findavg(){
        int[] arr;
        arr = new int[5];
        arr[0] = 10;
        arr[1] = 20;
        arr[2] = 30;
        arr[3] = 40;
        arr[4] = 50;

        int sum = 0;
        int count = 0;
        int avg;
        for( int i =0; i<arr.length; i++){
            sum = arr[i] + sum;
            count++;
        }
        avg = sum/count;
        System.out.println(avg);
    }

    public void OddNumArr(){
        ArrayList<Integer> myArray = new ArrayList<>();
        for (int i = 0; i<=255; i++){
            if(i % 2 == 1){
                myArray.add(i);
            }
        }
        System.out.println(myArray);
    }
    public void GreaterThanY(int[] arr, int y){
        int count = 0;
        for (int i = 0; i < arr.length; i++){
            if (arr[i] > y) {
                count++;
            }
        }
        System.out.println(count);
    }
    public void sqVals(int[] arr){
        for (int i =0; i < arr.length; i++){
            arr[i] = arr[i] * arr[i];
        }
        System.out.println(Arrays.toString(arr));
    }
    public void noNegs(int[] arr){
        for (int i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 0;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
    public void mma(int[] arr){
        int sum = 0;
        int max = arr[0];
        int min = arr[0];
        int avg;
        for (int i = 0; i < arr.length; i++){
            sum += arr[i];
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        avg = sum / arr.length;
        int[] mma = {sum, max, min, avg};
        System.out.println(Arrays.toString(mma));
    }
    public void shift(int[] arr){
        for (int i = 0; i < arr.length; i++){
            try{
                arr[i] = arr[i + 1];
            }
            catch (ArrayIndexOutOfBoundsException e){
                arr[i] = 0;
            }
        }
        System.out.println(Arrays.toString(arr));
    }
}
