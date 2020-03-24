class FavouriteSerializer(serializers.ModelSerializer):
    # user = UserSerializer(many=True, read_only=True)
    # animals = AnimalSerializer(many=True)
    class Meta:
        fields = (
            'id',
            'user_id',
            'animal_id',
            'active',
        )
        model = Favourite