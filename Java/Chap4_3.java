public class Chap4_3 {
  public static void main(String[] args) {
    int[][] scores = new int[2][3]; //2行3列の2次元配列
    scores[0][0] = 40;
    scores[0][1] = 50;
    scores[0][2] = 60;
    scores[1][0] = 80;
    scores[1][1] = 60;
    scores[1][2] = 70;
    System.out.println(scores[1][1]); //1行めの2番めの配列を表示
  }
}
//表になっているという表現はあくまでイメージで実際は配列の