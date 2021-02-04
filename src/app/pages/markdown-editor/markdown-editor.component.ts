import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  editorOptions = {theme: 'vs', language: 'markdown'};
  code: string = '# Hello Api';
  
  constructor(
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.http
      .get(environment.markdownApi, { responseType: 'text'})
      .subscribe(msg => this.code = msg['content']);
  }

}
