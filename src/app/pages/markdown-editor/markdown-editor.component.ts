import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { MarkdownService } from 'src/app/services/markdown/markdown.service';

@Component({
  selector: 'app-markdown-editor',
  templateUrl: './markdown-editor.component.html',
  styleUrls: ['./markdown-editor.component.scss']
})
export class MarkdownEditorComponent implements OnInit {

  editorOptions = {theme: 'vs', language: 'markdown'};
  code: string = '# Hello Api';
  
  get preview(): string {
    return this.markdownService.renderMarkdown(this.code);
  } 
  
  constructor(
    private markdownService: MarkdownService
  ) { }

  async ngOnInit() {
    this.markdownService.loadMarkdown()
      .subscribe(markdown => this.code = markdown);
  }

}
