import numpy as np
import pandas as pd
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from learnyBackEndAPI.serializers import MatchingSerializer
from learnyBackEndAPI.models import Tutor, Tutee
from learnyBackEndAPI.utils import matching_algorithm, format_df


def index(request):
    return HttpResponse("Hello, world.")


class MatchingView(APIView):
    def get(self, request):
        tutee_df = pd.DataFrame(list(Tutee.objects.all().values()))
        tutor_df = pd.DataFrame(list(Tutor.objects.all().values()))
        tutor_df, tutee_df = format_df(tutor_df, tutee_df)
        match_df = matching_algorithm(tutor_df, tutee_df).reset_index()
        
        qs = []
        for index, row in match_df.iterrows():
            qs.append({
                'tutor_index': row[0],
                'level' : row[1],
                'tutee_index' : row[2],
                'matching_subjects' : row[3],
                'kindlespark_poc' : row[4],
                'comments' : row[5]
            })
        
        results = MatchingSerializer(qs, many=True).data
        return Response(results, status=status.HTTP_200_OK)


