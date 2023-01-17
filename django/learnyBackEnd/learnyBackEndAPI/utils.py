import numpy as np
import pandas as pd
from learnyBackEndAPI.models import Tutor, Tutee

def matching_algorithm(tutor_df, tutee_df):
    new_columns = {
    "Kindlespark Point-of-Contact" : "poc",
    "Tutee Index" : "tutee_index",
    "Gender" : "gender",
    "Level in 2023" : "level",
    "Subject #1" : "subject1",
    "Subject #2" : "subject2",
    "Subject #3" : "subject3",
    "Financial Aid?" : "fa",
    "Available?" : "available",
    "Comments" : "comments"
    }
    
    tutee_df = tutee_df.rename(columns=new_columns)

    #simplify levels to p (primary) and s (secondary)
    #fa and available from yes/no to y/n
    def level(x):
        return np.char.lower(x[0])

    tutee_df['level'] = tutee_df['level'].apply(lambda x: level(x))
    tutee_df['fa'] = tutee_df['fa'].apply(lambda x: level(x))
    tutee_df['available'] = tutee_df['available'].apply(lambda x: level(x))

    #fill na values with nothing
    tutee_df[['subject1','subject2','subject3']] = tutee_df[['subject1','subject2','subject3']].fillna('')

    #fill na values with nothing
    tutor_df[['subject1','subject2']] = tutor_df[['subject1','subject2']].fillna('')

    #Do an inner merge between tutors and tutee
    #i.e. return rows based on 3 conditions
    #1. The level the tutor teaches is the same as the tutee
    #2. Pro bono tutees are matched with financial assistance tutees and the converse is true
    #3. Both tutor and tutee are available
    match_df = pd.merge(tutor_df,tutee_df, how='inner',left_on=['level','probono','available'],right_on=['level','fa','available'])

    #This function matches the subjects the tutor teaches and the tutee receives
    #Returns the total matched subjects as a new column "matched_subjects"
    def match_subjects(df):
        subjects_list = []
        #check for na values
        tutor_subjects = [df['subject1_x'],df['subject2_x']]
        tutee_subjects = [df['subject1_y'],df['subject2_y'],df['subject3']]
        #Gives set of matched subjects
        matched = set(tutor_subjects).intersection(tutee_subjects)
        return ",".join(matched) if matched != set('') else np.nan
        
    match_df['matched_subjects'] = match_df.apply(lambda df : match_subjects(df), axis=1)

    #Take only relavant information to output
    truncated_df = match_df[['tutor_index','tutee_index','matched_subjects','poc','comments']].dropna(axis=0,subset=['matched_subjects'])

    #dictionary of more readable names
    readable_names = {
        'tutor_index' : "Tutor Index",
        'tutee_index' : "Tutee Index",
        'matched_subjects' : 'Matching Subjects',
        'poc' : 'Kindlespark Point-of-Contact',
        "comments" : "Comments"
    }
    truncated_df = truncated_df.rename(columns = readable_names)

    #Group by tutors for clarity
    truncated_df = truncated_df.set_index('Tutor Index', append=True).swaplevel(0,1)

    return truncated_df



def format_df(tutor_df, tutee_df):
    tutor_df = tutor_df.rename(columns={'id': 'tutor_index'})
    tutee_df = tutee_df.rename(columns={
        'id': 'Tutee Index', 
        'poc': 'Kindlespark Point-of-Contact',
        'gender' : 'Gender', 
        'level_2023': 'Level in 2023',
        'subject1' : 'Subject #1', 
        'subject2': 'Subject #2', 
        'subject3' : 'Subject #3', 
        'financial_aid' : 'Financial Aid?', 
        'available' : 'Available?', 
        'comments' : 'Comments',
        })

    tutor_df = tutor_df[['tutor_index', 'gender', 'level', 'subject1', 'subject2', 'probono', 'available']]
    tutee_df = tutee_df[['Kindlespark Point-of-Contact', 'Tutee Index', 'Gender', 'Level in 2023', 'Subject #1', 'Subject #2', 'Subject #3', 'Financial Aid?', 'Available?', 'Comments']]

    return tutor_df, tutee_df