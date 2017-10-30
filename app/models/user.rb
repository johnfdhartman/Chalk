class User < ApplicationRecord
   validates :username, :password_digest, presence: true
   validates :username, uniqueness: true
   validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :boards,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'Board'

  has_attached_file :display_picture, styles: {
    thumb: '100x100>',
    square: '200x200#',
    medium: '300x300>'
  }

  validates_attachment_content_type :avatar, :content_type => /\Aimage\/.*\Z/

  attr_reader :password

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
    save
    self.session_token
  end

  def self.find_by_credentials(username,password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def created_boards(num, page)
    page = page.to_i if page.is_a?(String)
    Board.where(author_id: self.id).offset(num * (page - 1)).limit(num)
  end


end
