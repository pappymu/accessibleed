from rest_framework import serializers

class MatchingSerializer(serializers.Serializer):
    tutor_index = serializers.IntegerField()
    level = serializers.IntegerField()
    tutee_index = serializers.IntegerField()
    matching_subjects = serializers.CharField()
    kindlespark_poc = serializers.CharField()
    comments =  serializers.CharField()
    