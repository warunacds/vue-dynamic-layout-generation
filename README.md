# vue-dynamic-layout-generation

This project show how you can create dynamic layout in vue using yaml and recursive components.

It uses vuetify as base layout for the convienece. But you can use any Vue component libray or do with with basic html.

Sample Yaml Layout Should look like this.

```yaml
---
row:
  - col: 12
    row:
      - col: 12
        component_id: 1
  - col: 12
    row:
      - col: 6
        component_id: 2
```

Remember indentation is impornt in YAML. Therefore copy and pasting above example might not work.

To verify your YAML expression check an validator.

[YAML validator](https://onlineyamltools.com/convert-yaml-to-json)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Cypress Component testing

```sh
npm run test:comp
```
