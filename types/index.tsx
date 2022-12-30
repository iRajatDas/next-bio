export type BioData = {
  ok: boolean
  data: Bio[]
}

export interface Bio {
  text: string
}

export type TBreadcrumb = {
  href: string;
  label: string;
}[]

export type TItemListElement = {
  position: number;
  name: string;
  item: string
}