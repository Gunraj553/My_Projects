import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the length of the array");
        int length = input.nextInt();
        int[] array = new  int[length];

        System.out.println("Enter elements of the array");
        for ( int i =0 ; i < length ; i ++){
            array[i] = input.nextInt();
        }
        int max_result = 0;
        int max_number = 0;

        for (int i = 0 ; i < array.length; i++){
            int counter = 1;
            int num = array[i];
            for ( int j = i+1 ; j < array.length ; j++){
                if (num == array[j]){
                    counter ++;

                }
            }
            if (counter > max_result){
                max_result = counter;
                max_number = num;
            }
        }
        System.out.println(max_number + "(" + max_result +" x )");

    }
}