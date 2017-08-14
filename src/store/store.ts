import { Note } from './../models/note.model';

export interface AppState {
    notes: {
        [key: number] : Note
    } 
}
