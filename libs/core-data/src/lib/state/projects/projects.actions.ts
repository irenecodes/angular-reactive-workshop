// Step 6 import Action
import {Action} from '@ngrx/store'
// Step 8 import project interface available in this proj (that we would otherwise create)
import {Project} from './../../projects/project.model'

// Step 5 
export enum ProjectsActionTypes {
    ProjectSelected = '[Projects] Selected',
    AddProject = '[Projects] Add Data',
    UpdateProject = '[Projects] Update Data',
    DeleteProject = '[Projects] Delete Data'
}

// Step 7 implements the interface ACTION from ngrx store
export class AddProject implements Action {
    readonly type = ProjectsActionTypes.AddProject;
    constructor(private payload: Project) {}
}

export class SelectProject implements Action {
    readonly type = ProjectsActionTypes.ProjectSelected;
    constructor(private payload: Project) {}
}

export class UpdateProject implements Action {
    readonly type = ProjectsActionTypes.UpdateProject;
    constructor(private payload: Project) {}
}

export class DeleteProject implements Action {
    readonly type = ProjectsActionTypes.DeleteProject;
    constructor(private payload: Project) {}
}

// if reference ProjectsActions, reference specific things behind it  
export type ProjectsActions = SelectProject | AddProject | UpdateProject | DeleteProject;