public class Chap5_5_3 {
  public static int[] makeArray(int size) { //int型配列を作成して戻すメソッド
    int[] newArray = new int[size];
    for (int i = 0; i < newArray.length; i++ ) {
      newArray[i] = i;
    }
    return newArray; //配列を戻す（配列のアドレスを戻している）
  }
  public static void main(String[] args) {
    int[] array = makeArray(4);
    for (int i : array) {  //arrayの全容そを出力
      System.out.println(i);
    }
  }
}
