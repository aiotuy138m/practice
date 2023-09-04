num = 11 #問題条件が10以上なので11からスタートしている
while true
  if num.to_s == num.to_s.reverse && num.to_s(8) == num.to_s(8).reverse && num.to_s(2) == num.to_s(2).reverse #reverse使って順番通りと逆順が一致している場合だけを条件指定している
    puts num
    break
  end
  num += 2 #回文条件が2進数の最初と最後が1の時のため奇数なので奇数から2足して奇数にしている
end