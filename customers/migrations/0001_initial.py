# Generated by Django 3.1.3 on 2020-11-20 22:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=70)),
                ('age', models.PositiveIntegerField()),
                ('city', models.CharField(default='', max_length=200)),
            ],
        ),
    ]
