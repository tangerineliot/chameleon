### Usage

```jsx
<Dropdown.Root forceVisibility={syncMenu}>
  <Dropdown.Trigger label={label} />

  <Dropdown.Content>
    <Dropdown.Label text="Items" />
    <Dropdown.Item href="/page1">Page 1</Dropdown.Item>
    <Dropdown.Item href="/page2">Page 2</Dropdown.Item>
    <Dropdown.Item href="/page3">Page 3</Dropdown.Item>
    <Dropdown.Item href="/page4">Page 4</Dropdown.Item>
  </Dropdown.Content>

  <Dropdown.SubContent>
    <Dropdown.Label text="More items" />
    <Dropdown.Item href="/page5">Page 5</Dropdown.Item>
    <Dropdown.Item href="/page9">Page 9</Dropdown.Item>
  </Dropdown.SubContent>
</Dropdown.Root>
```

### API Reference

#### Root

The main dropdown component

| Property          | Type      |
| ----------------- | --------- |
| children          | ReactNode |
| defaultVisibility | boolean   |
| forceVisibility   | boolean   |

#### Trigger

Triggers the popup visibility

| Property | Type   |
| -------- | ------ |
| label    | string |

#### Content

Renders the main popup of the dropdown

| Property | Type          |
| -------- | ------------- |
| children | Label or Item |

#### SubContent

Renders the secondary popup of the dropdown

| Property | Type          |
| -------- | ------------- |
| children | Label or Item |

#### Label

Renders the dropdown label

| Property | Type   |
| -------- | ------ |
| text     | string |

#### Item

Renders the dropdown item

| Property | Type      |
| -------- | --------- |
| href     | string    |
| children | ReactNode |
| onClick  | function  |
