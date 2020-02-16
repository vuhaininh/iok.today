from users.models import Role
from products.models import Category
from products.models import Product
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import Permission
from helpers.constants import ROLES, PERMISSIONS


def create_roles():
    content_type = ContentType.objects.get_for_model(Role)
    manage_all = Permission.objects.create(
        codename=PERMISSIONS['MNA']["codename"],
        name=PERMISSIONS['MNA']["name"],
        content_type=content_type,
    )

    Role(code=ROLES["BGD"]["code"], name=ROLES["BGD"]["name"],
         description=ROLES["BGD"]["description"],
         permission=manage_all).save()

    Role(code=ROLES["ADM"]["code"], name=ROLES["ADM"]["name"],
         description=ROLES["ADM"]["description"],
         permission=manage_all).save()

    accountant = Permission.objects.create(
        codename=PERMISSIONS['ACT']["codename"],
        name=PERMISSIONS['ACT']["name"],
        content_type=content_type,
    )
    Role(code=ROLES["KTA"]["code"], name=ROLES["KTA"]["name"],
         description=ROLES["KTA"]["description"],
         permission=accountant).save()
    marketing = Permission.objects.create(
        codename=PERMISSIONS['MKT']["codename"],
        name=PERMISSIONS['MKT']["name"],
        content_type=content_type,
    )
    Role(code=ROLES["MKT"]["code"], name=ROLES["MKT"]["name"],
         description=ROLES["MKT"]["description"],
         permission=marketing).save()


def create_products():
    bttp = Category(code="BTTP", name="Bê Tông Thương Phẩm")
    bttp.save()
    bom = Category(code="BOM", name="Bơm")
    bom.save()
    Product(category=bttp, code="M100", name="Mác 100", listed_price=890000).save()
    Product(category=bttp, code="M150", name="Mác 150", listed_price=1000000).save()
    Product(category=bttp, code="M200", name="Mác 200", listed_price=1200000).save()
    Product(category=bttp, code="M250", name="Mác 250", listed_price=1100000).save()
    Product(category=bttp, code="M300", name="Mác 300", listed_price=1300000).save()
    Product(category=bttp, code="M350", name="Mác 350", listed_price=1120000).save()
    Product(category=bom, code="BOM37", name="Bơm 37m", listed_price=2000000).save()
    Product(category=bom, code="BOM45", name="Bơm 45m", listed_price=3000000).save()
