public class Chap2 {
  public static void main(String[] args) {
    int a;
    int b;
    a = 20;
    b = a + 5;
    System.out.println(a);
    System.out.println(b);
    //￥つけないと私の好きな記号は二重引用符(までが範囲とみなされ;がないためコンパイルエラー
    System.out.println("私の好きな記号は（\"）です。");
    float f = 3; //float型の変数にint型を代入
    double d = f; //double型の変数にfloat型を代入
    System.out.println(f);
    System.out.println(d);
    int age = (int)3.2; //小数をintに型変換して代入
    System.out.println(age);
    double dou = 8.5 / 2; //異なる型同士の算術演算
    long l = 5 + 2L;
    System.out.println(dou);
    System.out.println(l);
    String msg = "私の年齢は" + 23;
    System.out.println(msg);
    String name = "すがわら"; //変数宣言の文
    String message; //変数宣言の文
    message = name + "さん、こんにちは"; //計算の文
    System.out.println(message); //命令実行の文
    System.out.print("私の名前は"); //改行しない
    System.out.print(name); //改行しない
    System.out.print("です"); //改行しない
    int e = 5;
    int g = 3;
    int m = Math.max(e, g); //eとg大きい方が代入される
    System.out.println("比較実験：" + e + "と" + g + "とで大きい方は…" + m);
    String age2 = "31";
    int n = Integer.parseInt(age2); //文字列を数値に変換する
    System.out.println("あなたは来年、" + (n + 1) + "歳になりますね。");
    int r = new java.util.Random().nextInt(90); //ランダム
    System.out.println("あなたはたぶん、" + r + "歳ですね？");
    System.out.println("あなたの名前を入力してください。");
    String name2 = new java.util.Scanner(System.in).nextLine(); //文字列を入力
    System.out.println("あなたの年齢を入力してください。");
    int age3 = new java.util.Scanner(System.in).nextInt(); //数値を入力
    System.out.println("ようこそ、" + age3 + "歳の" + name2 + "さん");
  }
}