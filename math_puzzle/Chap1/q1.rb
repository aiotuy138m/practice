# 10進数から2進数変換
puts 11.to_s(2)
# 10進数から8進数に変換
puts 11.to_s(8)

# 2進数が奇数の時のみの答えが出るものとその時の10進数8進数も同時に出せば良い？
num = 11
num.to_s(2)[-1] #これで最後の文字列だけを取得できた

n = 11
ans = 0
while ans > 100
  n += 1
  if n.to_s(2)[-1] == 1
     puts n
     puts n.to_s(2)
     puts n.to_s(8)
  end
end