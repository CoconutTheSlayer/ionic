import { NotesService } from './../../providers/notes/notes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Note } from './../../models/note.model';
import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'note-edit-page',
    templateUrl: 'note-edit.html'
})
export class NoteEditPage {

    note: Note;
    isReadyToSave: boolean;
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private notesService: NotesService,
        private viewCtrl: ViewController,
        private navParams: NavParams) {

        this.note = this.navParams.get('note');

        this.form = this.formBuilder.group({
            title: ['', Validators.required]
        });

        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });

        this.form.patchValue({ title: this.note.title });
    }

    cancel() {
        this.viewCtrl.dismiss();
    }

    done() {
        if (!this.form.valid) {
            return;
        }

        this.notesService.editNote(this.note.id, this.form.value.title);
        this.viewCtrl.dismiss(this.form.value);
    }
}
