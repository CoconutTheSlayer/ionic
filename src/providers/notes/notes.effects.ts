import { Note } from './../../models/note.model';
import { NoteDataService } from './notes.data.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import * as NoteActions from './notes.action';

@Injectable()
export class NoteEffects {

  constructor(
    private noteDataService: NoteDataService,
    private actions$: Actions
  ) { }

  @Effect() fetchNotes$: Observable<Action> = this.actions$.ofType(NoteActions.GET_NOTES)
    .map(toPayload)
    .switchMap(payload => this.noteDataService.fetchNotes().map(data => {
      return new NoteActions.GetNotesSucess(data);
    }));

  @Effect() createNote$: Observable<Action> = this.actions$.ofType(NoteActions.CREATE_NOTE)
    .map(toPayload)
    .switchMap(({ title }) => this.noteDataService.createNote({ title } as Note).map(data => {
      return new NoteActions.CreateNoteSucess({ id: Math.round(Math.random() * 100), title });
    }));

  @Effect() editNote$: Observable<Action> = this.actions$.ofType(NoteActions.EDIT_NOTE)
    .map(toPayload)
    .switchMap(payload => this.noteDataService.updateNote(payload.id, payload.title).map(data => {
      return new NoteActions.EditNoteSucess({ id: payload.id, title: payload.title });
    })
    );

  @Effect() deleteNote$: Observable<Action> = this.actions$.ofType(NoteActions.DELETE_NOTE)
    .map(toPayload)
    .switchMap(payload => this.noteDataService.deleteNote(payload).map(data => {
      return new NoteActions.DeleteNoteSucess(payload);
    }));

}