import { NotesService } from './../../providers/notes/notes.service';
import { Note } from './../../models/note.model';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'note-create-page',
  templateUrl: 'note-create.html'
})
export class NoteCreatePage {

  isReadyToSave: boolean;
  note: Note;
  form: FormGroup;

  constructor(
    public navCtrl: NavController,
    private notesService: NotesService,
    public viewCtrl: ViewController,
    private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      title: ['', Validators.required]
    });

    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

  }

  ionViewDidLoad() {
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  done() {
    if (!this.form.valid) {
       return; 
    }

    this.notesService.createNote(this.form.value.title);

    this.viewCtrl.dismiss(this.form.value);
  }
}
