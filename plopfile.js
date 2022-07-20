export default function ( plop ) {

/** @type {import('plop').NodePlopAPI} */

  plop.setGenerator ('template', {
    description: '创建typescript类型模板',
    prompts: [
      {
        type: 'input',
        name: 'dirName',
        message: '请输入目录名称',
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'type-challenges/{{dirName}}/template.ts',
      },
      {
        type: 'add',
        path: 'type-challenges/{{dirName}}/test-cases.ts',
      },
    ],
  });

};