from pydantic import BaseModel

class Supplier(BaseModel):
  company_name: str
  contact_email: str
  contact_phone: str
  status: str  # e.g., "active", "inactive"

class SupplierCreate(Supplier):
  pass

class SupplierUpdate(Supplier):
  company_name: str
  contact_email: str
  contact_phone: str
  status: str

class SupplierResponse(Supplier):
  id: int

  class Config:
    orm_mode = True