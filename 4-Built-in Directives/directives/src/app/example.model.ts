export interface ExampleDef {
  label: string;  // link label
  name: string;   // route name of the example
  path: string;   // route path
  component: any; // component class
  dev?: boolean;  // is it an intermediate step?
}