import * as path from 'path';

import { SourceRepository } from '@caws-blueprint-component/caws-source-repositories';
import { Blueprint } from '@caws-blueprint/caws.blueprint';
import { Component, YamlFile } from 'projen';

import { WorkflowDefinition } from './models';

export * from './models';
export * from './samples/node';
export * from './factories/index';

export class Workflow extends Component {
  constructor(
    blueprint: Blueprint,
    sourceRepository: SourceRepository,
    workflow: WorkflowDefinition,
  ) {
    super(blueprint);

    new YamlFile(
      blueprint,
      path.join(sourceRepository.relativePath, `.aws/workflows/${workflow.Name}.yaml`),
      {
        marker: false,
        obj: {
          ...workflow,
        },
      },
    );
  }
}
