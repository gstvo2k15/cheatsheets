from django.db import models

class Example(models.Model):
    name = models.CharField(max_length=128, unique=True)

    def __str__(self):
        return self.name
