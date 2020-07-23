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
- has_many :groups, through: :user-groups
- has_many :user-groups 

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|group_mname|string|null: false, unique: ture|
### Association
- has_many :meassages
- has_many  :users, through: :user-groups
- has_many :user-groups 

## user-groupsテーブル
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
