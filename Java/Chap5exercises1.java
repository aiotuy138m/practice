public class Chap5exercises1 {
  public static void main(String[] args) {
    introduceOneself();
  }
  
  public static void introduceOneself() {
    String name = "田中";
    int age = 20;
    double height = 168.5;
    char zodiac = '戌'; //ダブルクォーテーションだと文字列となるのでコンパイルエラー起きる
    System.out.println("私の名前は" + name + "です。年齢は" + age + "歳で、身長は" + height + "ｃｍで、干支は" + zodiac + "です。");
  }
}