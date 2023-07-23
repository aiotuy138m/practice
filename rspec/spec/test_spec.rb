describe '四則演算' do  # 四足演算のテストのグループ
  context '足し算' do # 足し算のテストをまとめている
    it '1 +1 は 2 になる' do # テストの具体的な内容を記述
      expect(1 + 1).to eq 2 # 括弧内に期待値を記述し、to期待している値が〜であることを意味
    end
  end
  context '足し算' do # 失敗パターン
    it '1 + 1 は 2 になる' do
      expect(1 + 1).to eq 3
    end
  end
end