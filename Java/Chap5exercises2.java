public class Chap5exercises2 {
  public static void main(String[] args) {
    email("重要案件", "x＠ｘ", "案件確認次第連絡ください");
  }
  
  // String address = "x@x";
  // String title = "重要案件";
  // String text = "案件確認次第連絡ください";
  // email(title, address, text);
  // でもよかった
  
  public static void email(String title, String address, String text) {
    System.out.println(address + "に、以下のメールを送信しました");
    System.out.println("件名：" + title);
    System.out.println("本文：" + text);
  }
}