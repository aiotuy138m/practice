public class Chap3exercises5 {
  public static void main(String[] args) {
    System.out.print("[メニュー]1:検索2:登録3:削除4:変更>"); //①画面に「[メニュー]1:検索2:登録3:削除4:変更>」と表示し表示後は改行しない
    int selected = new java.util.Scanner(System.in).nextInt(); //②数字を入力し、変数selectedに代入する
    switch (selected) {
      case 1: //③もし変数selectedが1なら「検索します」、2なら「登録します」、3なら「削除します」、4の場合は「変更します」と表示する。
        System.out.println("検索します");
        break;
      case 2:
        System.out.println("登録します");
        break;
      case 3:
        System.out.println("削除します");
        break;
      case 4:
        System.out.println("変更します");
        break;
        //④変数selected1から4のいずれでもない場合は何もしない。
    }
  }
}