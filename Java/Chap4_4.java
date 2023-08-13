public class Chap4_4 {
  public static void main(String[] args) {
    int[][] scores = {{40, 50, 60}, {80, 60, 70}}; //こういう初期値化の記載も可能
    System.out.println(scores.length); //親配列の要素数が表示される⇒2が表示される
    System.out.println(scores[0].length); //子配列の要素数が表示される3が表示される
  }
}
