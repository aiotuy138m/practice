public class Chap5_3 {
  public static int add(int x, int y) { //戻り値の型をvoid（何もしない)から「int」に。
    int ans = x + y;
    return ans; //returnは値を戻すだけでなく、メソッドの終了も行うためこの後に処理を書いても実行されずコンパイルエラーとなる
  }
  
  public static void main(String[] atgs) {
    int ans = add(100, 10);  //左右の辺逆に書くとコンパイルエラー
    //add(100, 10);のみを書くとaddメソッドは正しく実行されて結果の110は返ってくるのだが、呼び出し元で受け取れていないためmainメソッド内で戻り値を利用できない
    System.out.println("100 + 10 = " + ans);
    System.out.println(add(add(10, 20), add(30, 40))); //30と70に化けてそれをまたaddメソッドで足している
  }
}