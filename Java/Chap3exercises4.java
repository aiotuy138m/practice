public class Chap3exercises4 {
  public static void main(String[] args) {
    boolean tenki = true;
    if (tenki == true) {
      System.out.println("洗濯をします");
      System.out.println("散歩に行きます");
    } else { //elseの後の波括弧がなかった。追記：１文だけの場合は波括弧を省略できるため、DVDの記述でelse文が終了扱いになってtrueでも寝ますが出力
    System.out.println("DVDをみます");
    System.out.println("寝ます");
    }
  }
}