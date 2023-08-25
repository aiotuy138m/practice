public class Main {
  public static void main(String[] args) {
    int[] heights = {172, 149, 152, 191, 155};
    java.util.Arrays.sort(heights); //Jabaが備える並び替え命令。java.utilパッケージのArrayクラスにあるsortメソッドを呼び出している（javaAPIの一つ）
    for (int h : heights) {
      System.out.println(h);
    }
  }
}

//APIのクラスには「java.」または「javax.」で始まるパッケージ名が利用されている。