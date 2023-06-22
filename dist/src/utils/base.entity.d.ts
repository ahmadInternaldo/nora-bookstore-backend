import { BaseEntity } from 'typeorm';
import { BaseInterface } from './base.interface';
export default class Base extends BaseEntity implements BaseInterface {
    uuid?: string;
    created_at: number | Date;
    updated_at?: number | Date;
    createTimestamps(): void;
    getTimeStamps(): void;
}
