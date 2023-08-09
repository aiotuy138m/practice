public class Chap3exercises6 {
  public static void main(String[] args) {
    System.out.println("【数あてゲーム】"); //①画面に「【数あてゲーム】」と表示する。
    int ans = new java.util.Random().nextInt(10);; //②０から9までの整数の中からランダムな数を1つ生成して変数ansに代入する。
    for (int i = 0; i<5; i++) { //③for文を用いた「5回繰り返すループ]を作る。
      System.out.println("0〜9の数字を入力してください"); //④画面に「0〜9の数字を丹生ｙろくしてください」と表示する。
      int num = new java.util.Scanner(System.in).nextInt(); //⑤数字を入力し、変数numに代入する。
      if (num == ans) { //⑥もし変数numと変数ansと等しかったら「アタリ！」と画面に表示して繰り返しを終了する。
        System.out.println("アタリ！");
        break;
      } else { //⑦もし変数numが変数ansと等しくない場合は「違います」と表示する。
        System.out.println("違います");
      }
    }
    System.out.println("ゲームを終了します"); //⑧繰り返しのブロックの外側で。「ゲームを終了します」と画面に表示する。
  }
}