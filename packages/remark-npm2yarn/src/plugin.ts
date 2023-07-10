import { Code, Root } from 'mdast';
import convert from 'npm-to-yarn';
import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { cleanMeta, PACKAGE_MANAGERS, PackageManager } from './constants.js';

const META_PLACEHOLDER = 'npm2yarn';

// To avoid conflicts with other Tabs/Tab declarations
const TABS_NAME = '$Tabs';
const TAB_NAME = '$Tab';

function getTabAST(node: Code, packageManager: PackageManager, npm2yarnIndex: number) {
  const meta = node.meta!;
  return {
    type: 'mdxJsxFlowElement',
    name: TAB_NAME,
    children: [
      {
        type: node.type,
        lang: node.lang,
        // Replace `npm2yarn` metadata keyword, so it will be not picked by inserted code-blocks
        meta: meta.slice(0, npm2yarnIndex) + meta.slice(npm2yarnIndex + META_PLACEHOLDER.length),
        value: convert(node.value, packageManager),
      },
    ],
  };
}

export const remarkNpm2Yarn: Plugin<
  [{ packageName: string; tabNamesProp: string; storageKey: string }],
  Root
> = opts => {
  if (!opts?.packageName) throw new Error('remarkNpm2Yarn: `packageName` option is required');
  if (!opts?.tabNamesProp) throw new Error('remarkNpm2Yarn: `tabNamesProp` option is required');
  if (!opts?.storageKey) throw new Error('remarkNpm2Yarn: `storageKey` option is required');

  const IMPORT_AST = {
    type: 'mdxjsEsm',
    data: {
      estree: {
        body: [
          {
            type: 'ImportDeclaration',
            source: { type: 'Literal', value: opts.packageName },
            specifiers: [
              {
                type: 'ImportSpecifier',
                imported: { type: 'Identifier', name: 'Tabs' },
                local: { type: 'Identifier', name: TABS_NAME },
              },
              {
                type: 'ImportSpecifier',
                imported: { type: 'Identifier', name: 'Tab' },
                local: { type: 'Identifier', name: TAB_NAME },
              },
            ],
          },
        ],
      },
    },
  };

  const TABS_AST = {
    type: 'mdxJsxFlowElement',
    name: TABS_NAME,
    attributes: [
      {
        type: 'mdxJsxAttribute',
        name: opts.tabNamesProp,
        value: {
          type: 'mdxJsxAttributeValueExpression',
          data: {
            estree: {
              body: [
                {
                  type: 'ExpressionStatement',
                  expression: {
                    type: 'ArrayExpression',
                    elements: PACKAGE_MANAGERS.map(value => ({ type: 'Literal', value })),
                  },
                },
              ],
            },
          },
        },
      },
      {
        type: 'mdxJsxAttribute',
        name: 'storageKey',
        value: opts.storageKey,
      },
    ],
  };

  return (ast, _file, done) => {
    let isImported = false;

    visit(ast, 'code', (node: Code, index, parent) => {
      const npm2yarnIndex = node.meta ? cleanMeta(node.meta).indexOf(META_PLACEHOLDER) : -1;

      if (npm2yarnIndex === -1) return;

      if (!node.value.startsWith('npm')) {
        throw new Error('`npm-to-yarn` package convert only npm commands to all package managers');
      }

      // Replace current node with Tabs/Tab components
      parent!.children[index!] = {
        ...TABS_AST,
        children: PACKAGE_MANAGERS.map(value => getTabAST(node, value, npm2yarnIndex)),
      } as any;

      if (isImported) return;

      // Add import statement at top of file
      ast.children.unshift(IMPORT_AST as any);

      isImported = true;
    });

    done();
  };
};
