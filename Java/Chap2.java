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
  }
}