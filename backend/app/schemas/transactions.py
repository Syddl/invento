from pydantic import BaseModel

class Transaction(BaseModel):
    product_name: int
    sku: int
    transaction_type: str  # e.g., "sale", "restock",
    transaction_quantity: int
    user: str
    client: str
    date_and_time: str
    notes: str

class TransactionCreate(Transaction):
    pass

class TransactionUpdate(Transaction):
    product_name: int
    sku: int
    transaction_type: str
    transaction_quantity: int
    user: str
    client: str
    date_and_time: str
    notes: str 

class TransactionResponse(Transaction):
    id: int

    class Config:
        orm_mode = True