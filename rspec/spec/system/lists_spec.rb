# frozen_string_literal: true

require 'rails_helper'

Rspec.describe List, "コントローラーのテスト" do
  describe '投稿テスト' do
    let! (:list) { create(:list, title:'test', body:'testtest', img:'app/assets/images/no-icon.png') }
    discribe 'トップ画面(top_path)のテスト' do
      before 'top画面への遷移' do
        visit top_path
      end
      context '表示の確認' do
        it 'トップ画面(top_path)に「ここはTopページです」が表示されているか' do
          expect(page).to have_content 'ここはTopページです'
        end
        it 'top_pathが"/top"であるか' do
          expect(current_path).to eq('/top')
        end
      end
    end
  
    describe '投稿画面のテスト' do
      before '投稿画面への遷移' do
        visit lists_new_path
      end
      context '表示の確認' do
        it 'new_list_pathが"/lists/new"であるか' do
          expect(current_path).to eq('/lists/new')
        end
        it '投稿ボタンが表示されているか' do
          expect(page).to have_button '投稿'
        end
      end
      context '投稿処理のテスト' do
        it '投稿後のリダイレクト先は正しいか' do
          fill_in 'list[title]', with: Facker::Lorem.characters(number:5)
          fill_in 'list[body]', with: Facker::Lorem.characters(number:5)
          click_button '投稿'
          expect(page).to have_current_path list_path(List.last)
        end
      end
    end
    
    describe '一覧画面のテスト' do
      before '一覧画面への遷移' do
        visit lists_path
      end
      context '一覧の表示とリンクの確認'
        it '一覧表示画面に投稿されたものが表示されているか' do
          expect(page).to have_content list.title
          expect(page).to have_content book.body
        end
      end
    end
    
    describe '詳細画面のテスト' do
      before '詳細画面への遷移' do
        visit list_path(list)
      end
      context '表示の確認' do
        it '削除リンクが存在しているか' do
          show_link = find_all('a')[0]
          expect(show_link.native.inner_text).to match(/destroy/i)
        end
        it '編集リンクが存在しているか'
        end
      end
    end
  end
end