# Generated by Django 2.1 on 2019-02-27 10:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AcisDB', '0002_dutstaticinfo_slavestaticinfo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dutstaticinfo',
            name='dead_date',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AlterField(
            model_name='slavestaticinfo',
            name='dead_date',
            field=models.CharField(max_length=25, null=True),
        ),
    ]