import { Note } from './../../models/note.model';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'note-detail-page',
  templateUrl: 'note-detail.html'
})
export class NoteDetailPage {

  note: Note;

  constructor(
    private navParams: NavParams) {
    this.note = this.navParams.get('note');
  }
}
