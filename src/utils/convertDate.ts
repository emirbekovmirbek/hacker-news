export const convertDate = (unix: number):string =>  {
  const date = new Date(unix * 1000)
  const year = date.getFullYear()
  const day = date.getDate()
  const month = date.getMonth() + 1
return `${day}/${month}/${year}`
}