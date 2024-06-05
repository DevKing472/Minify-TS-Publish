class MyClass {
  public my_property = 1;
  public my_method(param1: any, param2: any): void {
    // Implement your logic here
    console.log(param1, param2);
  }
}

export function myEntryPoint(param1: string, param2: string) {
  const instance = new MyClass();
  return instance.my_method(param1, param2); 
}