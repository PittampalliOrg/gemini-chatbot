import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"

export const categories = [
  {
    value: "34443ddb-830b-4421-9d52-d1eddd62df11",
    label: "Red category",
    icon: CircleIcon,
},
{
    value: "37a4792c-06bd-44e4-9b9b-ec3cccdcf3ae",
    label: "Orange category",
    icon: CircleIcon,
},
{
    value: "b1197022-e396-4e6b-9106-1d6b081bff34",
    label: "Yellow Category",
    icon: CircleIcon,
},
{
    value: "9c69d84c-b105-4949-9fc6-3e12e58ea1a3",
    label: "Green Category",
    icon: CircleIcon,
},
{
    value: "8cca6b78-aeba-4d4f-b1ab-3a8453a1ffe4",
    label: "Blue category",
    icon: CircleIcon,
},
{
    value: "036e72e9-8c4a-4a97-bf78-0f87a823b1fb",
    label: "Purple Category",
    icon: CircleIcon,
},
{
    value: "8c6da55a-9764-469f-896d-d04df25e613d",
    label: "15",
    icon: CircleIcon,
},
{
    value: "e2cabf8f-2158-4e98-a647-fb3302ae6176",
    label: "30",
    icon: CircleIcon,
},
{
    value: "d14547f3-9c8d-4e44-87e8-3df396702dbc",
    label: "60",
    icon: CircleIcon,
},
{
    value: "24cd0ab6-2d3e-454e-bcba-75a0b54beaf6",
    label: "120",
    icon: CircleIcon,
},
{
    value: "1f7ae5ce-8b8a-4ea3-b232-b3979165c548",
    label: "240",
    icon: CircleIcon,
},
{
    value: "5510341e-55ec-4999-9fb4-7c0534d641c9",
    label: "480",
    icon: CircleIcon,
}
]

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
]
