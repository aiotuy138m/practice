public class Chap4exercises3 {
  public static void main(String[] args) {
    //5行目と6行目で発生する例外の名前は？
    int[] counts = null;
    float[] heights = {171.3F, 175.0F};
    System.out.println(counts[1]); //NullPointerExceptionエラーが起きる（NULLのため）
    System.out.println(heights[2]); //ArrayIndexOutOfBoundsExceptionエラーが起きる（型が異なるため）
  }
}