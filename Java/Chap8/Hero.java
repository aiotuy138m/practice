public class Hero {
  //属性の定義
  String name; //名前の宣言
  int hp; //HPの宣言
  //上記の記述で2つのフィールドが宣言された
  //操作の定義
  public void attack() {}
  //「眠る」メソッド
  public void sleep() {
    this.hp = 100;
    //this.hpは自分自身のhpフィールド
    System.out.println(this.name + "は、眠って回復した！");
    //this.nameは自分自身のnameフィールド
  }
  //「座る」メソッド
  public void sit(int sec) { //何秒座るか引数（int sec）で受け取る
    this.hp += sec; //座る秒数だけHPを増やす
    System.out.println(this.name + "は、" + sec + "秒座った！");
    System.out.println("HPが" + sec + "ポイント回復した！");
  }
  //「転ぶ」メソッド
  public void slip() {
    this.hp -= 5;
    System.out.println(this.name + "は、転んだ！");
    System.out.println("5のダメージ！");
  }
  public void run() {
    System.out.println(this.name + "は、逃げ出した！");
    System.out.println("GAMEOVER");
    System.out.println("最終HPは" + this.hp + "でした");
  }
}