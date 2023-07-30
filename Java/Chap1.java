public class Chap1 { // ここのクラスはファイル名と同じじゃないとダメだとコンパイルのエラーで言われた。大文字アルファベットから命名する。ファイル名と大文字か小文字かも合わせる。
  public static void main(String[] args) { //ここのmainもchap1に変えるべき？→ここは変更しない。
    System.out.println("Hello World"); //Hello Worldを出力
    int age; //変数宣言の文（ageという箱を用意）
    age = 30; //箱の数字「30」を入れる
    System.out.println(age);
    //データ型：整数：準備されるメモリの量に違いがある。
    byte glasses; //1バイト、-128〜127までの整数
    glasses = 2;
    short price; //2バイト、-32768〜32767
    price = 189;
    int salary; //4バイト、-2147483648〜2147483647
    salary = 152000;
    long worldPeople; //8バイト、-9223372036854775808〜9223372036854775807
    worldPeople = 6900000000L;
    //データ型：浮動小数点型
    float weight;
    weight = 67.5F;
    double height; //floatよりも多くのメモリを消費するがより厳密な計算を行うことができるため特別な事情がない限りこっちを使用
    height = 171.2;
    //boolean型(真偽値型)
    boolean isError;
    isError = true;
    boolean result;
    result = false;
    //文字
    char zodiac; //全角・半角問わず1文字のみ
    zodiac = '辰'; //文字データはシングルクォーテーション
    String name; //0文字以上の文字の集まり
    name = "すがわら"; //文字列データはダブルクォーテーション
    int quantity = 22; //変数の初期化
    //定数
    final double PI = 3.14;
  }
}
