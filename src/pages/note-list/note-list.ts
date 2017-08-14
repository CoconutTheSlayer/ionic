import { NoteEditPage } from './../note-edit/note-edit';
import { NoteDetailPage } from './../note-detail/note-detail';
import { NoteCreatePage } from './../note-create/note-create';
import { Observable } from 'rxjs/Observable';
import { NotesService } from './../../providers/notes/notes.service';
import { Note } from './../../models/note.model';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'note-list-page',
  templateUrl: 'note-list.html'
})
export class NoteListPage {

  notes$: Observable<{}>;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private noteService: NotesService,
  ) { }

  ionViewDidLoad() {
    this.noteService.fetchNotes();
    this.notes$ = this.noteService.getStoreNotes();
  }

  addNote() {
    const addModal = this.modalCtrl.create(NoteCreatePage);
    addModal.present();
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note.id);
  }

  editNote(note: Note) {
    const editModal = this.modalCtrl.create(NoteEditPage, { note });
    editModal.present();
  }

  openNote(note: Note) {
    this.navCtrl.push(NoteDetailPage, {
      note
    });
  }
}
