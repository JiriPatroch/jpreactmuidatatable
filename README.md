# JP React MUI Datatable

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/JiriPatroch/jpreactmuidatatable?color=orange&style=flat-square) ![GitHub](https://img.shields.io/github/license/JiriPatroch/jpreactmuidatatable?color=orange&style=flat-square) ![GitHub package.json version](https://img.shields.io/github/package-json/v/JiriPatroch/jpreactmuidatatable?color=orange&style=flat-square) [![Donate](https://img.shields.io/badge/Donate-PayPal-blue)](https://www.paypal.com/paypalme2/jiripatroch)


## About

Datatable based on most popular [React UI framework "Material-UI"](https://material-ui.com/). Builded for simple and fast implementing into your project. As template for this table is used ["Enhanced Table"](https://material-ui.com/components/tables/#sorting-amp-selecting), this template was further extended with new functionalities and styles. I am still continuously developing this project to apply all features which I miss in other similiar projects. If you have any idea what to implement into datatable, feel free to contact me :wink:

### Features

    1. Pagination
    2. Rows per page
    3. Multiple Rows select
    4. ASC / DESC + single property sorting
    5. Reorder Columns by drag and drop their headcells
    6. Hide / Show Columns
    7. Global Searching (one term in all columns)
    8. Advanced Searching (based on multiple terms)
    9. Changeable Searching mode (exact term / include term)

### Next steps

    1. Codesandbox example
    3. Allow to add custom columns and custom actions
    4. UI improvements
    5. Save table setting (Local Storage)


## Preview

![JpMuiDatatableBasic](https://github.com/JiriPatroch/jpreactmuidatatable/blob/master/docs/JpMuiDatatableBasic.png)

See fully functional preview (link below). This example will show you table with all functions turned on. Table is fetching "posts" data from fake REST API [JSONPlaceholder](https://jsonplaceholder.typicode.com/),

##### [SEE EXAMPLE PREVIEW](https://jiripatroch.github.io/jpreactmuidatatable/)


## Documentation

### Installation

You can install this component as NPM modul:
```
  npm install jpreactmuidatatables
```

### Adding to your Project
Adding Datatable to project as component is fast and simple, just import it from node_modules and add <JpMuiDatatable /> element into your code.

```javascript 
import { JpMuiDatatable } from "jpreactmuidatatables/core"
```

### Default Setting

Datatable has all features turned off as default.

#### STEP 1 - Table Features Setting

Below you will find complete setting object. You can disable / enable all features simply by changing false / true parameter.

```javascript
const defaultTableSetting = { 
    tableName: "JpTable", 
    globalSearch: false, 
    columnsHideShowSwitch: false, 
    tableMenu: false, 
    multiSearch: false, 
    hasEditing: false, 
    hasDeleting: false, 
    denseRowsSwitch: false 
    };
```
You can create your own and pass it into component prop:
```javascript
<JpMuiDatatable tableSetting={yourOwnTableSetting}/>
```

#### STEP 2 - Column Setting

Let's say you have this array of objects from your API:

```javascript
[
  {
    "id": 1,
    "name": "Leanne Graham",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
  },
]
```

This table is object based. You don't have to remap your incoming objects from API to an arrays. All you have to do is just create array of columns where in "id" property you will specify property name of incoming object you want to display in table.

```javascript
const columnsSetting = [ 
    { 
        id: "id", 
        isSortable: true, 
        label: "User Id" 
    },
    { 
        id: "name", 
        isSortable: true, 
        label: "Name" 
    } 
    ];   
```

Passing it into component prop:
```javascript
<JpMuiDatatable columns={columnsSetting} />
```

#### STEP 3 - Table Actions

Table has as default two predefined actions "onEditClick" and "onRemoveClick". Both of them returns row data, which you can further handle as you want - for example connect to your redux actions.

Passing it into component prop:
```javascript
<JpMuiDatatable onEditClick={yourOwnOnEditClickAction} onRemoveClick={yourOwnOnRemoveClickAction} />
```

#### Styles Setting

Styling of table is based on MUI component styling see [MUI customization examples](https://material-ui.com/customization/components/#5-global-theme-variation). If your are familiar with MUI component styling, creating your own styles for table is pretty simple. In example below you can see table restyling using Theme Provider.. More examples comming soon.

#### Restyling Step 1
```javascript
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
```

#### Restyling Step 2
Create your own theme..

```javascript
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000"
    },
    secondary: {
      main: "#3b3b3b"
    },
    background: {
      paper: "#fe8641",
      tablebottom: '#ffb354',
      default: "#ffb354",
    },
    text: {
      primary: "#000",
      secondary: "#000",
      hint: "#3b3b3b"
    },
    divider: "#3b3b3b"
  },
  overrides: {
    MuiIconButton: {
      root: {
        color: "#3b3b3b"
      }
    },
    MuiTableCell: {
      root: {
        borderBottom: "1px solid #3b3b3b"
      }
    },
    MuiSwitch: {
      switchBase: {
        color: "#3b3b3b",
      },
      track: {
        backgroundColor: "#3b3b3b",
      },

      colorSecondary: {
        '&$checked': {
          color: "#fe8641",
          '& + $bar': {
            backgroundColor: "#fe8641",
          },
          '& + $track': {
            backgroundColor: "#3b3b3b",
          }
        }
      },
      checked: {
        '& + $bar': {
          opacity: 1
        }
      },
      bar: {
        opacity: 1,
        backgroundColor: "#fe8641"
      },
    },
  }
});
```

#### Restyling Step 3
Wrap JpMuiDatatable component with 

```javascript
<ThemeProvider theme={theme}>
  <JpMuiDatatable 
    usersData={usersData}
    columns={columnsSetting}
    onEditClick={onEditClick}
    onRemoveClick={onRemoveClick}
    tableSetting={tableSetting} />
</ThemeProvider>
```
#### Restyling Result

![JpMuiDatatableCustom](https://github.com/JiriPatroch/jpreactmuidatatable/blob/master/docs/JpMuiDatatableCustom.png)

#### [Example of table re-styling comming soon]

#### Complete Setting

Here is how complete setting of your table could look like:

```javascript
import React from "react";
import { JpMuiDatatable } from "jpreactmuidatatables/core";


const usersData = [
  {
    "id": 1,
    "name": "Leanne Graham",
  },
  {
    "id": 2,
    "name": "Ervin Howell",
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
  },
]

function App() {

  const columnsSetting = [
    {
      id: "id",
      isSortable: true,
      label: "User Id"
    },
    {
      id: "name",
      isSortable: true,
      label: "Post Id"
    },
  ];

  const onEditClick = (data) => {
    console.log("Edit clicked");
    console.log(data);
  }

  const onRemoveClick = (data) => {
    console.log("Remove clicked");
    console.log(data);
  }

  const tableSetting = {
    tableName: "JpTable",
    globalSearch: true,
    columnsHideShowSwitch: true,
    tableMenu: true,
    multiSearch: true,
    hasEditing: true,
    hasDeleting: true,
    denseRowsSwitch: true
  };

  return (
    <>
      <JpMuiDatatable
        usersData={usersData}
        columns={columnsSetting}
        onEditClick={onEditClick}
        onRemoveClick={onRemoveClick}
        tableSetting={tableSetting}
      />
    </>
  );
}
export default App;
```
## License

The code in this project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
Note that you will be responsible for following terms of service of the third party APIs used in the code.