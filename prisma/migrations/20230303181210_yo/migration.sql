-- CreateTable
CREATE TABLE "_FarmerProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FarmerProduct_AB_unique" ON "_FarmerProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_FarmerProduct_B_index" ON "_FarmerProduct"("B");

-- AddForeignKey
ALTER TABLE "_FarmerProduct" ADD CONSTRAINT "_FarmerProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Farmer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmerProduct" ADD CONSTRAINT "_FarmerProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
