import csv
from learnyBackEndAPI.models import Tutee

def run():
    fhand = open('scripts/sample_tutee.csv')
    reader = csv.reader(fhand)
    next(reader)

    Tutee.objects.all().delete()

    #Kindlespark Point-of-Contact, Tutee Index, Gender, Level in 2023, Subject #1, Subject #2, Subject #3, Financial Aid?, Available?, Comments
    #Benjamin, 254, Female, P4, english, science, , Yes, Yes, Not available for tuition on Wednesdays

    for row in reader:
        t = Tutee(poc=row[0], gender=row[2], level_2023=row[3], subject1=row[4], subject2=row[5], subject3=row[6], financial_aid=row[7], \
            available=row[8], comments=row[9])
        t.save()