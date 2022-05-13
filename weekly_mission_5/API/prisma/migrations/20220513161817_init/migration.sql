-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(50) NOT NULL,
    "missionCommander" VARCHAR(50) NOT NULL,
    "enrollments" INTEGER,
    "hasCertification" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "student_name_key" ON "student"("name");
