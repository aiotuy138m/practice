public class Chap5_1 {
  public static void main(String[] args) { //mainメソッド
    System.out.println("メソッドを呼び出します");
    hello(); //メソッドを呼び出す
    methodA();
    System.out.println("メソッドの呼び出しが終わりました");
  }
  
  public static void hello() { //helloメソッドの定義
    System.out.println("湊さん、こんにちは"); //helloメソッドが呼び出された時の処理（メソッドブロック）
  }
  
  //メソッドは別のメソッドから呼び出しも可能
  public static void methodA() {
    System.out.println("メソッドA");
    methodB();
  }
  
  public static void methodB() {
    System.out.println("メソッドB");
  }
}
//メソッドの定義場所は順序を入れ替えても動作には影響しない。ただ、mainメソッドより上に別のメソッドが定義されていても必ずmainメソッドから動き始める
// メソッドを定義する人は、メソッドを呼び出す人のことを考えてメソッドを作成すべき！