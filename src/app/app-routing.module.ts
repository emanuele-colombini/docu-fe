import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkdownReaderComponent } from './pages/markdown-reader/markdown-reader.component';
import { MarkdownEditorComponent } from './pages/markdown-editor/markdown-editor.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'markdown-reader', component: MarkdownReaderComponent },
  { path: 'markdown-editor', component: MarkdownEditorComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
