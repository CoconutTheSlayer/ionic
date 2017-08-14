import { Note } from '../../models/note.model';
import { Action } from '@ngrx/store';

export const GET_NOTES = 'GET_NOTES';
export const GET_NOTES_SUCESS = 'GET_NOTES_SUCESSS';
export const GET_NOTES_FAIL = 'GET_NOTES_FAIL';

export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTE_SUCESS = 'CREATE_NOTE_SUCESS';
export const CREATE_NOTE_FAIL = 'CREATE_NOTE_FAIL';

export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_SUCESS = 'EDIT_NOTE_SUCESS';
export const EDIT_NOTE_FAIL = 'EDIT_NOTE_FAIL';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_SUCESS = 'DELETE_NOTE_SUCESS';
export const DELETE_NOTE_FAIL = 'DELETE_NOTE_FAIL';

export class GetNotes implements Action {
    readonly type = GET_NOTES;
}

export class GetNotesSucess implements Action {
    readonly type = GET_NOTES_SUCESS;
    constructor(public payload: Note[]) { }
}

export class GetNotesFail implements Action {
    readonly type = GET_NOTES_FAIL;
}

export class CreateNote implements Action {
    readonly type = CREATE_NOTE;
    constructor (public payload: Note) {}
}

export class CreateNoteSucess implements Action {
    readonly type = CREATE_NOTE_SUCESS;
    constructor(public payload: Note) { }
}

export class CreateNoteFail implements Action {
    readonly type = CREATE_NOTE_FAIL;
}

export class EditNote implements Action {
    readonly type = EDIT_NOTE;
    constructor(public payload: Note) {}
}

export class EditNoteSucess implements Action {
    readonly type = EDIT_NOTE_SUCESS;
    constructor(public payload: Note) { }
}

export class EditNoteFail implements Action {
    readonly type = EDIT_NOTE_FAIL;
}

export class DeleteNote implements Action {
    readonly type = DELETE_NOTE;
    constructor(public payload: Note['id']) {}
}

export class DeleteNoteSucess implements Action {
    readonly type = DELETE_NOTE_SUCESS;
    constructor(public payload: Note['id']) { }
}

export class DeleteNoteFail implements Action {
    readonly type = DELETE_NOTE_FAIL;
}

export type All =
    DeleteNote
    | DeleteNoteSucess
    | DeleteNoteFail
    | EditNote
    | EditNoteSucess
    | EditNoteFail
    | CreateNote
    | CreateNoteSucess
    | CreateNoteFail
    | GetNotes
    | GetNotesSucess
    | GetNotesFail;
