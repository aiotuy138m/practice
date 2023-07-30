# frozen_string_literal: true

require 'rails_helper'

describe '投稿テスト' do
  let! (:list) { create(:list, title:'test', body:'testtest', img:'app/assets/images/no-icon.png') }
  discribe 'トップ画面(top_path)のテスト' do
    before 'top画面への遷移' do
      redirect_to '/top'
    end
    context '表示の確認' do
      it 'トップ画面(top_path)に「ここはTopページです」が表示されているか' do
        expect(page).to have_content 'ここはTopページです'
      end
      it 'top_pathが"/top"であるか' do
        expect(page).to have_current_path '/top'
      end
    end
  end
end