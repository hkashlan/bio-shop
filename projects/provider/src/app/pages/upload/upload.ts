import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-upload',
  standalone: true,
  templateUrl: './upload.html',
  styleUrl: './upload.scss',
  imports: [CommonModule]
})
export class UploadComponent {
  isDragging = signal(false);
  previews = signal<string[]>([]);

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(true);
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging.set(false);
    if (event.dataTransfer?.files) {
      this.handleFiles(event.dataTransfer.files);
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  handleFiles(fileList: FileList) {
    const files = Array.from(fileList).filter(f => f.type.startsWith('image/'));
    this.previews.set([]);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previews.update(arr => [...arr, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  }
}
