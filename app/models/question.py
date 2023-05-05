from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Question(db.Model):
    __tablename__ = "questions"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    details = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    space_id = db.Column(db.Integer, db.ForeignKey("spaces.id"))
    created_at = db.Column(db.Date, nullable=False, default=datetime.now())
    updated_at = db.Column(db.Date)

    space = db.relationship("Space", back_populates="questions")
    answers = db.relationship("Answer", back_populates="question")


    def to_dict(self):
        return {
            "id": self.id,
            "details": self.details,
            "userId": self.user_id,
            "spaceId": self.space_id,
            "createdAt": str(self.created_at),
            "updatedAt": str(self.updated_at)
        }