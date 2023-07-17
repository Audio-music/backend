import { PrismaService } from 'src/database/prisma.service';
import { CreateRecordingDto } from '../../dto/create-recording.dto';

export class RecordingPrismaRepository {
  constructor(private prisma: PrismaService) {}

  async create(recording: CreateRecordingDto) {
    return await this.prisma.recording.create({ data: recording });
  }
}