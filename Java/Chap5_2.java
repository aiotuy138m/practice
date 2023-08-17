public class Chap5_2 {
  public static void main(String[] atgs) {
    System.out.println("メソッドを呼び出します");
    hello("湊");
    hello("あやか");
    hello("すがわら");
    add(100, 20); //実引数
    add(200, 50); //実引数
    System.out.println("メソッドの呼び出しが終わりました");
  }
  
  public static void hello(String name) { //helloメソッドの引数内に文字列変数nameを宣言
    System.out.println(name + "さん、こんにちは");
  }
  
  //引数は複数渡せる
  public static void add(int x, int y) { //仮引数
    int ans = x + y;
    System.out.println(x + "+" + y + "=" + ans);
  }
}
//引捨と変数の型が一致しない場合はコンパイルエラーが起きる
// メソッド内で宣言した変数はそのメソッドのブロック内でしか使用できない（ローカル変数）