from django.test import TestCase

from .models import Todo

class TodoModelTest(TestCase):
    def setup_test_data(self):
        return Todo.objects.create(title='todo title', body='todo body')

    def test_title(self):
        self.setup_test_data()
        todo = Todo.objects.get(pk=1)
        self.assertEquals(todo.title, 'todo title')

    def test_body(self):
        self.setup_test_data()
        todo = Todo.objects.get(pk=1)
        self.assertEquals(todo.body, 'todo body')
