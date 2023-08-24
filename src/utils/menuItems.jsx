import { dashboard } from "./icons";
import { transactions } from "./icons";
import { trend } from "./icons";
import { expenses } from "./icons";

export const menuItems = [
    {
        id: 1,
        title: 'Dashboard',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 2,
        title: 'View Transaction',
        icon: transactions,
        link: '/dashboard'
    },
    {
        id: 3,
        title: 'Incomes',
        icon: trend,
        link: '/dashboard'
    },
    {
        id: 4,
        title: 'Expenses',
        icon: expenses,
        link: '/dashboard'
    },
]