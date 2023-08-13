public class Chap4exercises4 {
  public static void main(String[] args) {
    int[] numbers = {3, 4, 9}; //①int型で要素数3の配列nuumbersを準備、この時の初期値は「3」「4」「9」
    System.out.println("1桁の数字を入力してください"); //②画面に「1桁の数字を入力してください」と表示
    int input = new java.util.Scanner(System.in).nextInt(); //③←を用いてキーボードから数字の入力をつけつけ、変数inputに代入
    for (int hit :numbers) { //配列をループで回しながら、いずれかの要素と等しいかを調べる。もし等しければ「アタリ！」と表示
      if (input == hit) {
        System.out.println("アタリ！");
        //はすれパターンの記載不要だったので修正
      // } else {
        // System.out.println("ハズレ");
      }
    }
  }
}