import {
  Rule,
  SchematicContext,
  Tree,
  externalSchematic,
} from '@angular-devkit/schematics';

export function newRepo(_options: any): Rule {
  const name = _options.name;

  return (_: Tree, _context: SchematicContext) => {
    return externalSchematic('@schematics/angular', 'ng-new', {
      name,

      version: '9.0.0',

      directory: name,

      routing: false,

      style: 'css',

      inlineStyle: false,

      inlineTemplate: false,
    });
  };
}
