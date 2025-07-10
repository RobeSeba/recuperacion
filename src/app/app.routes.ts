import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TaskList } from './task-list/task-list';
import { TaskForm } from './task-form/task-form';
import { NoteList } from './note-list/note-list';
import { NoteForm } from './note-form/note-form';
import { NoteEdit } from './note-edit/note-edit';

export const routes: Routes = [
    {path:'', component:NoteForm},
    {path:'listar', component: TaskList },
    {path:'home', component: Home },
    {path:'listarTareas',component:NoteList},
    {path:'editar',component:NoteEdit}
];
