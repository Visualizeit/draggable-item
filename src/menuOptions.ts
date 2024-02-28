import type { MenuOptionSharedPart } from 'naive-ui/es/menu/src/interface'

export interface CustomMenuOption extends MenuOptionSharedPart {
  label: string
  parents: string[]
  children?: CustomMenuOption[]
}

export const menuOptions: CustomMenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    parents: [],
    children: [
      {
        label: '鼠',
        key: 'rat',
        parents: ['hear-the-wind-sing']
      }
    ]
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    parents: [],
    children: [
      {
        label: '虎',
        key: 'tiger',
        parents: ['pinball-1973']
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    parents: [],
    children: [
      {
        label: '龙',
        key: 'dragon',
        parents: ['a-wild-sheep-chase']
      }
    ]
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    parents: [],
    children: [
      {
        label: '叙事者',
        key: 'narrator',
        parents: [ 'dance-dance-dance']
      },
      {
        label: '羊男',
        key: 'sheep-man',
        parents: ['dance-dance-dance']
      },
      {
        label: '饮品',
        key: 'beverage',
        parents: ['dance-dance-dance'],
        children: [
          {
            label: '威士忌',
            key: 'whisky',
            parents: ['dance-dance-dance', 'beverage']
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        parents: ['dance-dance-dance'],
        children: [
          {
            label: '三明治',
            key: 'sandwich',
            parents: ['dance-dance-dance', 'food']
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
        parents: ['dance-dance-dance']
      }
    ]
  }
]
