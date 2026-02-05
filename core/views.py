from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST

from core.models import Job, Project, Contact

from datetime import datetime


def index(request):
    jobs = Job.objects.all()
    projects = Project.objects.all()
    currentYear = datetime.now().year
    return render(request, 'core/index.html', {
        'jobs': jobs,
        'projects': projects,
        'year': currentYear,
    })


def resume(request):
    skills = [
        'Python', 'JS, TS & Node.js', 'Django', 'FastAPI',
        'Rust', 'SQL', 'NoSQL', 'React', 'Next.js', 'Git',
        'Linux', 'Docker', 'PostgreSQL', 'Redis', 'Flask',
        'WebSockets', 'REST', 'HTML & CSS', 'Vue', 'AWS',
    ]
    interests = [
        'Reading', 'Entrepreneurship', 'Travel',
        'Fitness', 'Meeting new people', 'Sports',
    ]
    currentYear = datetime.now().year
    return render(request, 'core/resume.html', {
        'skills': skills,
        'interests': interests,
        'year': currentYear,
    })


@require_POST
def contact(request):
    email = request.POST.get('email', '').strip()
    message = request.POST.get('message', '').strip()
    if not email:
        return JsonResponse({'error': 'Email is required.'}, status=400)
    Contact.objects.create(email=email, message=message)
    return JsonResponse({'success': True})