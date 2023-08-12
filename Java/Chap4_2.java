public class Chap4_2 {
  public static void main(String[] args) {
    int[] seq = new int[10]; //10個の要素の塩基配列を作成

    for (int i = 0; i < seq.length; i++) {
      seq[i] = new java.util.Random().nextInt(4); // 塩基配列をランダムに生成
    }

    for (int i = 0; i < seq.length; i++) { // 生成した塩基配列の記号を表示
      switch (seq[i]) {
        case 0:
          System.out.print("A ");
          break;
        case 1:
          System.out.print("T ");
          break;
        case 2:
          System.out.print("G ");
          break;
        case 3:
          System.out.print("C ");
          break;
      }
    }
  }
} //毎回出力結果が異なる10個の塩基配列が完成

//swich文はやや冗長のため、以下のように書き直すことも可能

// char[] base = {'A', 'T', 'G', 'C'};
// System.out.print(base[seq[i]] + " ");
//⇒base[seq[i]]は配列baseの[]の中にseq[i]が指定されている