# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_name|string|null: false, unique: ture|
|email|string|null: false, unique: ture|
|passwrod|string|null: false|
### Association
- has_many :groups
- has_many :messages

## chat-space_usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|users_id|integer|null: false, foreign_key: true|
### Association
- has_many :users
- has_many :groups

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_menber|string|null: false, unique: ture|
### Association
- belongs_to :user
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user-id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
|message|text||
|image|text||
### Association
- belongs_to :user
- belongs_to :group
