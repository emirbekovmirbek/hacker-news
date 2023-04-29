
export enum typeOfItem {
  JOB = 'job',
  STORY = 'story',
  COMMENT = 'comment',
  POLL = 'poll',
  POLLOPT = 'pollopt'
}
export type id =  string | number

export interface IComment {
  id: number
  text: string
  kids: number[] | undefined
  by: string
  time: number
}

export interface INews {
  id: id
  descendants: number
  by: string
  kids: Array<number>
  score: number
  time: number
  title: string
  type: typeOfItem
  url: string
}
