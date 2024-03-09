export const moveZeros = (data: Array<any>) => {
  return [
    ...data.filter(element => element !== 0), 
    ...data.filter(element => element === 0)
  ]
}