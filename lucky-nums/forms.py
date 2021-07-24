from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired, Email, NumberRange


class LuckyNumForm(FlaskForm):
    """Form for adding users."""

    name = StringField('Name', validators=[DataRequired()])
    email = StringField('E-mail', validators=[DataRequired(), Email()])
    year = IntegerField('Year', validators=[NumberRange(min=1900, max=2001)])
    color = SelectField('Choices', choices = ['red', 'green', 'orange', 'blue'], validators=[DataRequired])