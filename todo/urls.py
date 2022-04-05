from rest_framework import routers
from .api import TodoViewset

router = routers.DefaultRouter()
router.register('api/todo', TodoViewset, 'todo')

urlpatterns = router.urls
