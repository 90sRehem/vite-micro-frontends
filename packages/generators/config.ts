import type { PlopTypes } from "@turbo/gen";
import fs from "node:fs";
import path from "node:path";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation


// const customActions: PlopTypes.CustomActionFunction = async (answers) => {
//     const result = "teste";
//     console.log("Result: ", result);
//     answers.result = result;
//     return `Finished ${result}`;
// }

export default function generator(plop: PlopTypes.NodePlopAPI): void {
    // const rootPath = __dirname;
    const rootPath = process.cwd();
    // A simple generator to add a new React component to the internal UI library
    plop.setGenerator("react-component", {
        description: "Adds a new react component",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the component?",
            },
            {
                type: "input",
                name: "path",
                message: "Where should the component be created?",
                default: rootPath,
            }
        ],
        actions: [
            {
                type: "add",
                path: `${rootPath}/{{path}}/{{kebabCase name}}.tsx`,
                templateFile: "templates/component.tsx.hbs",
            },
        ],
    });

}