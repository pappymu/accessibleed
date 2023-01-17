from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class Tutor(models.Model):
    gender = models.CharField(max_length=2)
    level = models.CharField(max_length=5)
    subject1 = models.CharField(max_length=100)
    subject2 = models.CharField(max_length=100)
    probono = models.CharField(max_length=2)
    available = models.CharField(max_length=2)

class Tutee(models.Model):
    poc = models.CharField(max_length=200)
    gender = models.CharField(max_length=10)
    level_2023 = models.CharField(max_length=100)
    subject1 = models.CharField(max_length=100)
    subject2 = models.CharField(max_length=100)
    subject3 = models.CharField(max_length=100)
    financial_aid = models.CharField(max_length=5)
    available = models.CharField(max_length=5)
    comments = models.TextField()