public class Chap5_5_1 {
  public static void printArray(int[] array) {  //引数に配列型を指定
    for (int element : array) {
      System.out.println(element);
      array[0] = 100;  //arrayの1番目の要素を書き換えている
    }
  }
  public static void main(String[] args) {
    int[] array = {1, 2, 3};
    printArray(array);    // 配列を渡す
    System.out.println(array[0]); //printArrayメソッドで書き換えられた数値で出力される
  }
}
// ⇒引数として渡しているのは、「配列まるごと」ではなく、アドレス情報のみ
// ⇒配列アドレス情報をコピーしているので、printArrayメソッド終了後にarray[0]を取り出すと、printArrayメソッドで書き換えた100が出力されることになる