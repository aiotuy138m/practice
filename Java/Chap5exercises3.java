public class Chap5exercises3 {
  public static void main(String[] args) {
    email("重要案件", "x＠ｘ", "案件確認次第連絡ください");
    email("y@y", "お元気ですか");
  }
  
  public static void email(String title, String address, String text) {
    System.out.println(address + "に、以下のメールを送信しました");
    System.out.println("件名：" + title);
    System.out.println("本文：" + text);
  }
  
  public static void email(String address, String text) {
    System.out.println(address + "に、以下のメールを送信しました");
    System.out.println("件名：無題");
    System.out.println("本文：" + text);
  }
}