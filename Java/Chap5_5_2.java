public class Chap5_5_2 {
  public static void incArray(int[] array) {
    for (int i = 0; i < array.length; i++) {
      array[i]++; //配列内の要素全てに1を加える
    } //結果をreturnで返していない
  }
  public static void main(String[] args) {
    int[] array = {1, 2, 3};
    incArray(array); //メソッド実行（1,2,3に1ずつ加えられて2,3,4に書き換えられる
    for (int i : array) { //arrayの全要素を出力
      System.out.println(i);
    }
  }
}
