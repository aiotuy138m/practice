public class Chap4exercises2 {
  public static void main(String[] args) {
    int[] moneyList = {121902, 8302, 55100}; //①3つの口座残高「121902」「8302」「55100」が格納されているint型配列moneyListを宣言
    for (int i = 0; i < moneyList.length; i++) { //①の配列の要素を1つずつfor文で取り出して画面に表示
      System.out.println(moneyList[i]);
    }
    for (int value :moneyList) { //同じ配列の要素を拡張for文で1つずつ取り出して画面に表示
      System.out.println(value);
    }
  }
}