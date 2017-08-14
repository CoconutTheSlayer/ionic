import { AppState } from './../../store/store';
import { Note } from './../../models/note.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as NotesActions from '../../providers/notes/notes.action';

@Injectable()
export class NotesService {
    constructor(
        private store: Store<AppState>,
    ) {}

    fetchNotes(): void {
        this.store.dispatch(new NotesActions.GetNotes());
    }

    createNote(title: string): void {
        this.store.dispatch(new NotesActions.CreateNote({ title }));
    }

    deleteNote(id: Note['id']): void {
        this.store.dispatch(new NotesActions.DeleteNote(id));
    }

    editNote(id: number, title: string): void {
        this.store.dispatch(new NotesActions.EditNote({ id, title }));
    }

    getStoreNotes() {
        return this.store.select('notes');
    }

}
