public class Chap5_4_1 {
  //オーバーロード（多重定義）：引数の型が異なる場合
  //1つ目のaddメソッド
  public static int add(int x, int y) {
    return x + y;
  }
  //2つ目のaddメソッド
  public static double add(double x, double y) {
    return x + y;
  }
  //3つ目のaddメソッド
  public static String add(String x, String y) {
    return x + y;
  }

  public static void main(String[] atgs) {
    System.out.println(add(10, 20)); //1つ目のaddメソッドが呼び出される
    System.out.println(add(3.5, 2.7)); //2つ目のaddメソッドが呼び出される
    System.out.println(add("Hello", "World")); //3つ目のaddメソッドが呼び出される
  }

  // ⇒仮引数が異なれば同じ名前のメソッドを複数定義することがゆるさえている
}