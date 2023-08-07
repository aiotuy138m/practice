# frozen_string_literal: true

require 'rails_helper'


FactoryBot.define do
  factory :list do
    title { Faker::Lorem.characters(number:10) }
    body { Faker::Lorem.characters(number:30) }
  end
end

Rspec.describe List, "コントローラーのテスト" do
  describe '投稿テスト' do
    let!(:list) { create(:list, title:'test', body:'testtest') }  #image:'app/assets/images/no-icon.png'は不要？
    describe 'トップ画面(top_path)のテスト' do
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
  
    describe '投稿画面(new_list_path)のテスト' do #(new_list_path)を追記
      before '投稿画面への遷移' do
        visit new_list_path #path記載ミス修正
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
          fill_in 'list[title]', with: Faker::Lorem.characters(number:10) #number:5⇒10に修正
          fill_in 'list[body]', with: Faker::Lorem.characters(number:30) #number:20⇒30に修正
          # fill_in 'list[image]'
          click_button '投稿'
          expect(page).to have_current_path list_path(List.last)
        end
      end
    end
    
    describe '一覧画面のテスト' do
      before '一覧画面への遷移' do
        visit lists_path
      end
      context '一覧の表示とリンクの確認' do
        it '一覧表示画面に投稿されたものが表示されているか' do
          expect(page).to have_content list.title
          expect(page).to have_content list.body
          # expect(page).to have_content list.image
        end
      end
    end
    
    describe '詳細画面のテスト' do
      before '詳細画面への遷移' do
        visit list_path(list)
      end
      context '表示の確認' do
        it '削除リンクが存在しているか' do
          # destroy_link = find_all('a')[0]
          # expect(destroy_link.native.inner_text).to match(/destroy/i)
          expect(page).to have_link '削除'
        end
        it '編集リンクが存在しているか' do
          # edit_link = find_all('a')[1]
          # expect(edit_link.native.inner_text).to match(/edit/i)
          expect(page).to have_link '編集'
        end
      end
      context 'リンクの遷移先は編集画面か' do
        it '編集の遷移先は編集画面か' do
          edit_link = find_all('a')[3] #1⇒3に修正
          edit_link.click
          expect(current_path).to eq('/lists/' + list.id.to_s + '/edit') #'/lists'から'/lists/'に修正
        end
      end
      context 'list削除のテスト' do
        it 'listの削除' do
          expect{list.destroy}.to change{List.count}.by(-1)
        end
      end
    end
    
    describe '編集画面のテスト' do
      before '編集画面への遷移' do
        visit edit_list_path(list)
      end
      context '表示の確認' do
        it '編集前のタイトルと本文がフォームに表示（セット）されている' do
          expect(page).to have_field 'list[title]', with: list.title
          expect(page).to have_field 'list[body]', with: list.body
          # expect(page).to have_filed 'list[body]', whth: list.image
        end
        it '保存ボタンが表示される' do
          expect(page).to have_button '保存'
        end
      end
      context '更新処理に関するテスト' do
        it '更新後のリダイレクト先は正しいか' do
          fill_in 'list[title]', with: Faker::Lorem.characters(number:10) #number:5⇒10に修正
          fill_in 'list[body]', with: Faker::Lorem.characters(number:30) #number:20⇒30に修正
          # fill_in 'list[image]'
          click_button '保存'
          expect(page).to have_current_path list_path(list) #List.last⇒listに修正
        end
      end
    end
  end
end