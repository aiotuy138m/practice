public class Chap3 {
  public static void main(String[] args) {
    //あえてbreak文を書かない記述
    System.out.println("あなたの運勢を占います");
    int fortune = new java.util.Random().nextInt(5) + 1;
    switch (fortune) {
     case 1:
     case 2:
       System.out.println("いいね！");
       break;
     case 3:
       System.out.println("普通です");
       break;
     case 4:
     case 5:
       System.out.println("うーん…");
    }
  }
}
