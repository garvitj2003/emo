-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invitees" (
    "id" SERIAL NOT NULL,
    "emails" TEXT NOT NULL,
    "inviteFor" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Invitees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invitees_userId_emails_key" ON "Invitees"("userId", "emails");

-- AddForeignKey
ALTER TABLE "Invitees" ADD CONSTRAINT "Invitees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
