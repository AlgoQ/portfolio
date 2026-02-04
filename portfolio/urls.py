from django.contrib import admin
from django.urls import path

from core.views import index, resume, contact

urlpatterns = [
    path('', index, name='index'),
    path('resume/', resume, name='resume'),
    path('contact/', contact, name='contact'),
    path('admin/', admin.site.urls),
]