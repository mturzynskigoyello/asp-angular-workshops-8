import { ActionPoint } from './action-point.model';

export interface TodoItem {
    id: number;
    name: string;
    actionPoints: ActionPoint[];
}
