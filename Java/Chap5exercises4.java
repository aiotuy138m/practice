public class Chap5exercises4 {
  public static double calcTriangleArea(double bottom, double height) {
    return (bottom * height) /2;
  }
  public static double calcCircleArea(double radius) {
    return radius * radius * 3.14;
  }
  public static void main(String[] args) {
    double triangle = calcTriangleArea(10.0, 5.0);
    double circle = calcCircleArea(5.0);
    System.out.println("三角形の底辺のながさが10.0ｃｍ、高さが5.0ｃｍの場合、面積は" + triangle + "cm2");
    System.out.println("円の半径が5.0ｃｍの場合、面積は" + circle + "cm2");
  }
}