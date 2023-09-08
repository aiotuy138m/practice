# Q2.4つの数字を組みわせて四則演算子を最低でも1つ入れて結果が元の数の桁を逆から並べた数字と同じになる1000〜9999のうちで条件を満たす数字は？

n = ["+", "-", "*", "/", ""]
puts n[3] #とりあえず配列登録は完了したこと確認

num = [*1000...9999]
 while true
  ans = num.sample + n.sample.to_i + num.sample + n.sample.to_i + num.sample + n.sample.to_i + num.sample
  if num.to_s == ans.to_s.reverse
    puts ans
  end
 end