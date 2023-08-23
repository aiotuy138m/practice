public class Calc {
  public static void main(String[] args) {
    int a = 10; int b = 2;
    int total = CalcLogic.tasu(a, b); //ただtasuだけだと別のクラスで記載しているものだから引っ張って来れない
    int delta = CalcLogic.hiku(a, b);
    System.out.println("足すと" + total + "、引くと" + delta);
  }
}

// メインをコンパイルしただけだけど、CalcLogicの方もコンパイルされた。使用するものは全てコンパイルされるっぽい