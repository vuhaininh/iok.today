from users.models import Role

def create_roles():
    Role(code="BGD",name="Ban giám đốc",description='Quản lý',permission='manage_all').save()
    Role(code="ADM",name="Admin",description='Quản trị hệ thống',permission='manage_all').save()
    Role(code="KTA",name="Kế toán",description='Kiểm soát kế toán',permission='account').save()
    Role(code="MKT",name="Kinh doanh",description='Quản lý kinh doanh',permission='marketing').save()
     