-- CreateTable
CREATE TABLE "sprockets" (
    "id" SERIAL NOT NULL,
    "teeth" INTEGER,
    "pitch_diameter" INTEGER,
    "outside_diameter" INTEGER,
    "pitch" INTEGER
);

-- CreateTable
CREATE TABLE "factory" (
    "id" SERIAL NOT NULL,
    "sprocket_production_actual" JSONB,
    "sprocket_production_goal" JSONB,
    "time" JSONB
);

-- CreateIndex
CREATE UNIQUE INDEX "sprockets_id_key" ON "sprockets"("id");

-- CreateIndex
CREATE UNIQUE INDEX "factory_id_key" ON "factory"("id");
