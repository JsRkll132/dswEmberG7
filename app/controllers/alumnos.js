import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AlumnosController extends Controller {
  @tracked alumnos = [];
  @tracked showForm = false;

  @action
  async fetchAlumnos() {
    try {
      const response = await fetch('http://localhost:2331/api/v1/alumnos/list');
      if (!response.ok) {
        throw new Error('Failed to fetch alumnos');
      }
      const data = await response.json();

      this.alumnos = data;
      return data;
    } catch (error) {
      console.error('Error fetching alumnos:', error);
    }
  }

  @action
  async saveAlumno(alumnoTemplate) {
    try {
      const response = await fetch(
        'http://localhost:2331/api/v1/alumnos/save',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(alumnoTemplate),
        },
      );
      if (!response.ok) {
        throw new Error('Failed to save alumno');
      }
      // Handle response if needed
    } catch (error) {
      console.error('Error saving alumno:', error);
    }
  }
}
