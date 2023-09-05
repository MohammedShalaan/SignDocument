const props = [
    { id: 1, name: "John" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Tom" }
];
const [, , { name }] = props;
console.log(name);