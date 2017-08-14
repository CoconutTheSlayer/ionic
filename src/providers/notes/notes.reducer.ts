import * as NoteActions from './notes.action';
export type Action = NoteActions.All;

export const notesReducer = (notes, action: Action) => {
    switch (action.type) {
        case NoteActions.GET_NOTES_SUCESS:
            return action.payload.reduce((result, current, index) => {
                result[current.id] = current;
                return result;
              }, {});
        case NoteActions.CREATE_NOTE_SUCESS:
            notes[action.payload.id] = {
                id: action.payload.id,
                title: action.payload.title
            };

            return {...notes};
        case NoteActions.EDIT_NOTE_SUCESS:
            notes[action.payload.id] = {
                ...notes[action.payload.id],
                title: action.payload.title
            };

            return {...notes};
        case NoteActions.DELETE_NOTE_SUCESS:
            delete notes[action.payload];

            return {...notes};
        default:
            return notes;
    }
};
