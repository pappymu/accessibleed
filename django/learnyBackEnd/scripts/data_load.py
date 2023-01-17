import csv
from learnyBackEndAPI.models import Tutor, Tutee

def run():
    #Load Tutor dataset
    fhand = open('scripts/sample_tutor.csv')
    reader = csv.reader(fhand)
    next(reader)
    Tutor.objects.all().delete()

    for row in reader:
        t = Tutor(gender=row[1], level=row[2], subject1= row[3], subject2=row[4], probono=row[5], available=row[6])
        t.save()

    #Load Tutee dataset
    fhand = open('scripts/sample_tutee.csv')
    reader = csv.reader(fhand)
    next(reader)
    Tutee.objects.all().delete()

    for row in reader:
        t = Tutee(poc=row[0], gender=row[2], level_2023=row[3], subject1=row[4], subject2=row[5], subject3=row[6], financial_aid=row[7], \
            available=row[8], comments=row[9])
        t.save()