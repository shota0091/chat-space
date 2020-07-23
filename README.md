# README

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_name|string|null: false, unique: ture|
|email|string|null: false, unique: ture|
|passwrod|string|null: false|
### Association
- has_many :meassages
- has_many :groups, through: :Intermediates
- has_many :Intermediates

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_mname|string|null: false, unique: ture|
### Association
- has_many :meassages
- has_many  :users, through: :Intermediates
- has_many :Intermediates

## users-groups Intermediatesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|users_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

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
