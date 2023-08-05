# frozen_string_literal: true

require 'rails_helper'

describe 'モデルのテスト' do
  context 'モデルのテスト' do
    it '有効な投稿内容の場合は保存されるか' do
      expect(FactoryBot.build(:list)).to be_valid  #Listモデルのインスタンスの作成,有効であるか
    end
  end
end