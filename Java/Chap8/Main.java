public class Main {
  public static void main(String[] args) {
    //（以下の内容をJavaで記述していく）
    //勇者よ、この可能世界に生まれよ！
    //1.勇者生成
    Hero h = new Hero(); //Heroクラスからインスタンスを生成し、変数hに入れる
    //2.フィールドに初期値をセット
    h.name = "ミナト";
    h.hp = 100;
    System.out.println("勇者" + h.name + "を生み出しました！");
    //3.勇者のメソッドを呼び出していく
    h.sit(5); //5秒座れ
    h.slip(); //転べ
    h.sit(25); //25秒座れ
    h.run(); //逃げろ
    //お化けキノコよ、この仮想世界に生まれよ！
    Matango m1 = new Matango();
    m1.hp = 50;
    m1.suffix = 'A';
    Matango m2 = new Matango();
    m2.hp = 48;
    m2.suffix = 'B';
    //冒険の始まり
    h.slip();
    m1.run();
    m2.run();
    h.run();
  }
}
//オブジェクト指向の記述では、HPを増やしたり減らしたりの細かい計算処理や戦闘中画面にどのようなメッセージを出すかという細かい内容が一切出てこない。
//→スッキリしている。