-- CreateEnum
CREATE TYPE "States" AS ENUM ('ABERTO', 'ATENDIMENTO', 'FECHADO');

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "state" "States" NOT NULL DEFAULT 'ABERTO';
