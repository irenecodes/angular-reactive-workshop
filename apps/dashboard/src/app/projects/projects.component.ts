import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Customer, Project, ProjectsService, NotificationsService, CustomersService, ProjectsState } from '@workshop/core-data';

const emptyProject: Project = {
  id: null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: null
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  currentProject: Project;

  constructor(
    private projectsService: ProjectsService,
    private customerService: CustomersService,
    // STEP 3 wire it up 
    private store: Store<ProjectsState>,
    private ns: NotificationsService) {
      // Step 4 set projects with an observable and turn it off in another place
      this.projects$ = store.pipe(
        select('projects'),
        map((projectsState: ProjectsState) => projectsState.projects)
      )
    }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.currentProject = emptyProject;
  }

  selectProject(project) {
    this.currentProject = project;
  }

  cancel(project) {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    // this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {

    this.store.dispatch({type: 'create', payload: project})
  
     
        // this.ns.emit('Project created!');
    
        // this.resetCurrentProject();

  }

  updateProject(project) {
    this.store.dispatch({type: 'update', payload: project})
  
    // this.projectsService.update(project)
    //   .subscribe(response => {
    //     this.ns.emit('Project saved!');

    //     this.resetCurrentProject();
    //   });
  }

  deleteProject(project) {
    this.store.dispatch({type: 'delete', payload: project})
    
        this.ns.emit('Project deleted!');

        this.resetCurrentProject();
      
  }
}

