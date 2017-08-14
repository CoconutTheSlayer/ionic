import { Note } from './../../models/note.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../data.service';

@Injectable()
export class NoteDataService {

    constructor(
        private dataService: DataService,
    ) { }

    fetchNotes(): Observable<Note[]> {
        return this.dataService.get<Note[]>('notes', {});
    }

    getNote(id: Note['id']): Observable<Note> {
        return this.dataService.get(`notes/${id}`);
    }

    createNote(note: Note): Observable<void | object> {
        return this.dataService.request('POST', `notes`, note);
    }

    updateNote(id: Note['id'], text: string): Observable<void | object> {
        return this.dataService.request('PUT', `notes/${id}`, {text});
    }

    deleteNote(id: Note['id']): Observable<void | object> {
        return this.dataService.request('DELETE', `notes/${id}`);
    }
}
