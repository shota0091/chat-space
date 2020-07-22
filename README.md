# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false,  unique: ture|
|email|string|null: false, true, unique: ture|
|passwrod|string|null: false|
### Association
- has_many :groups
- has_many :message,through:groups

## guropsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|interger|null: false, foreign_key: true|
|gurop_menber|string|null: false, true, unique: ture|
### Association
- belong_to :user
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|interger|null: false, foreign_key: true|
|group_id|interger|null: false, foreign_key: true|
|message|text|||
|image|text|||
### Association
- belong_to :user
- belong_to :guroup