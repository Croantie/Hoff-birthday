const participantsList = [
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Константин Пешехонов',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Kdkj KLJKjknknk',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Константин Пешехонов',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Kdkj KLJKjknknk',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Константин Пешехонов',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Константин Пешехонов',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Константин Пешехонов',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Kdkj KLJKjknknk',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Константин Пешехонов',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Kdkj KLJKjknknk',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Kdkj KLJKjknknk',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: 'ИМ Продажи'
    },
    {
        name: 'Kdkj KLJKjknknk',
        experience: '5 лет в Hoff',
        department: '716 Химки'
    },
    {
        name: 'Игорь Щетинский',
        experience: '5 лет в Hoff',
        department: '722 Автозаводская'
    },
]

const list = document.getElementById('participants-list');

window.addEventListener('load', () => {
    participantsList.forEach((el, index) => {
        el.id = index;
        const item = document.createElement('li')
        item.innerHTML = `<b>${el.name}</b><br> ${el.experience}, ${el.department}`
        list.appendChild(item)
    })
})

export {participantsList};