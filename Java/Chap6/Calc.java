package calcapp.main; //パッケージ
import calcapp.logics.CalcLogic; //インポート
public class Calc {
  public static void main(String[] args) {
    int a = 10; int b = 2;
    int total = calcapp.logics.CalcLogic.tasu(a, b); //ただtasuだけだと別のクラスで記載しているものだから引っ張って来れない完全限定クラス名または完全修飾クラス名（FQCN）で書く.import文書いててもFQCNで書いても良い
    int delta = CalcLogic.hiku(a, b); //calcapp.logics.CalcLogicがimport文未使用時のFQCN
    System.out.println("足すと" + total + "、引くと" + delta);
  }
}

// メインをコンパイルしただけだけど、CalcLogicの方もコンパイルされた。使用するものは全てコンパイルされるっぽい(cloud9の使用？JDKではそれぞれコンパイルする必要があるみたい)
//パッケージの名前はJavaの識別子のルールに従ってれば自由だが、アルファベットは小文字にするのが一般的で、上記のようなドットで区切ったパッケージ名も多く用いられる
//パッケージに親子関係や階層関係はない
//FQCNはimport文を使うことによって手間を削減できる