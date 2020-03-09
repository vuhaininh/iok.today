
from products.models import Category
from products.models import Product
from customers.models import CustomerGroup


def create_products():
    bttp = Category(code="BTTP", name="Bê Tông")
    bttp.save()
    bom = Category(code="BOM", name="Bơm")
    bom.save()
    Product(category=bttp, code="M100", name="Mác 100",
            attributes="+-14", listed_price=890000).save()
    Product(category=bttp, code="M150", name="Mác 150",
            attributes="+-14",  listed_price=1000000).save()
    Product(category=bttp, code="M200", name="Mác 200",
            attributes="+-14",  listed_price=1200000).save()
    Product(category=bttp, code="M250", name="Mác 250",
            attributes="+-14",  listed_price=1100000).save()
    Product(category=bttp, code="M300", name="Mác 300",
            attributes="+-14",  listed_price=1300000).save()
    Product(category=bttp, code="M350", name="Mác 350",
            attributes="+-14",  listed_price=1120000).save()
    Product(category=bom, code="BOM37", name="Bơm 37m",
            attributes="+-14",  listed_price=2000000).save()
    Product(category=bom, code="BOM45", name="Bơm 45m",
            attributes="+-14",  listed_price=3000000).save()


def create_customer_groups():
    CustomerGroup(code="CTY", name="Công ty").save()
    CustomerGroup(code="CNH", name="Cá nhân").save()
    CustomerGroup(code="BET", name="Bê tông").save()
    CustomerGroup(code="CXD", name="Cai xây dựng").save()
