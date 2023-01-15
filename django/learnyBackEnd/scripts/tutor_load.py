import csv
from learnyBackEndAPI.models import Tutor

def run():
    fhand = open('scripts/sample_tutor.csv')
    reader = csv.reader(fhand)
    next(reader)

    Tutor.objects.all().delete()

    #tutor_index, gender, level, subject1, subject2, probono, available
    #1, m, p, science, english, y, y

    for row in reader:
        t = Tutor(gender=row[1], level=row[2], subject1= row[3], subject2=row[4], probono=row[5], available=row[6])
        t.save()
