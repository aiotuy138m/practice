public class Chap3exercises3 {
  public static void main(String[] args) {
    int isHungry = 1; //①intt型の変数isHungryを定義し0か1を代入、またString型の変数foodを定義し、適当な食べ物の名前を代入
    String food = "apple";
    System.out.println("こんにちは"); //②画面に「こんにちは」と表示する
    if (isHungry == 0) { //③もし変数isHungryが0であれば「お腹がいっぱいです」、そうでなければ「はらぺこです」と表示する
      System.out.println("お腹がいっぱいです");
    } else {
      System.out.println("はらぺこです"); 
      System.out.println(food +"をいただきます"); //④もし変数isHungryが空腹を示すならば、変数foodを利用して「〇〇をいただきます」と表示する
      System.out.println("ごちそうさまでした"); //⑤最後に「ごちそうさまでした」と表示する
    }
  }
}