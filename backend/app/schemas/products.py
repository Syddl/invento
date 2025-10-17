from pydantic import BaseModel 

class Product(BaseModel):
  name: str
  price: float
  category: str
  status: str # e.g., "available", "low_stock", "out_of_stock"
  sku: str
  quantity: int

class ProductCreate(Product):
  pass

class ProductUpdate(Product):
  name: str
  price: float
  category: str
  status: str
  sku: str
  quantity: int

class ProductResponse(Product):
  id: int

  class Config:
    orm_mode = True
  