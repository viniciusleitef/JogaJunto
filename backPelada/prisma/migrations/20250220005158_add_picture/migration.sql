-- AlterTable
ALTER TABLE "User" ADD COLUMN     "picture" TEXT DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
ALTER COLUMN "username" DROP NOT NULL;
