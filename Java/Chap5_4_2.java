public class Chap5_4_2 {
  //オーバーロード（多重定義）：引数の数が異なる場合
  //1つ目のaddメソッド
  public static int add(int x, int y) {
    return x + y;
  }
  //2つ目のaddメソッド
  public static int add(int x, int y, int z) {
    return x + y + z;
  }

  public static void main(String[] atgs) {
    System.out.println("10+20=" + add(10, 20)); //1つ目のaddメソッドが呼び出される
    System.out.println("10+20+30=" + add(10, 20, 30)); //2つ目のaddメソッドが呼び出される
  }
// ⇒引数の数の違いもJVMが判断して適切なメソッドを使用してくれる
}