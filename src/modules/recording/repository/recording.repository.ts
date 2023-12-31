import { CreateRecordingDto } from '../dto/create-recording.dto';
import { UpdateRecordingDto } from '../dto/update-recording.dto';
import { Recording } from '../entities/recording.entity';

export abstract class RecordingRepository {
  abstract create(
    recording: CreateRecordingDto,
  ): Promise<Recording> | Recording;
  abstract findOne(recordingId: number): Promise<Recording> | Recording;
  abstract findAll(): Promise<Recording[]> | Recording[];
  abstract update(
    updateRecording: UpdateRecordingDto,
    recordingId: number,
  ): Promise<Recording> | Recording;
  abstract delete(recordingId: number): Promise<void>;
}
