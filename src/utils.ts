export const sum = (obj: { a: number; b: number }): number => {
  for (let i = 0; i < 10; i++) {
    console.log(i)
  }
  return obj.a + obj.b
}
